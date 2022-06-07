import { Box, Button, Card, CardContent, IconButton, Switch, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsCamera } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { handleAlert } from '@/features/alert/alertSlice';
import Image from 'next/image';
import { acceptedImageTypes } from '@/utils/global';

// Accepted image size in bytes which is 3.1MB
const acceptedMaxImageSize = 3100000;

interface UserPhotoUploadPropsInterface {
    showEmailVerifiedSection?: boolean;
}

/**
 * User photo upload component for user account
 * @param {boolean | undefined} showEmailVerifiedSection
 * @returns {JSX.Element}
 * @constructor
 */
const UserPhotoUpload = ({ showEmailVerifiedSection = true }: UserPhotoUploadPropsInterface) => {
    const theme = useTheme();
    const [image, setImage] = useState<string>();
    const [emailVerified, setEmailVerified] = useState<boolean>(true);
    const dispatch = useDispatch();

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        noClick: false,
        autoFocus: false,
        maxFiles: 1,
        onDrop: (acceptedFiles) => {
            const imageType = acceptedFiles[0].type;

            const imageSize = acceptedFiles[0].size;

            if (!acceptedImageTypes.includes(imageType)) {
                return dispatch(
                    handleAlert({
                        showAlert: true,
                        alertMessage: 'Invalid file type. Please upload a valid file',
                        alertType: 'warning'
                    })
                );
            }

            if (imageSize > acceptedMaxImageSize) {
                return dispatch(
                    handleAlert({
                        showAlert: true,
                        alertMessage: 'Image size is too big. Please upload a limited size image',
                        alertType: 'warning'
                    })
                );
            }

            const imageURL = URL.createObjectURL(acceptedFiles[0]);

            if (imageURL) {
                setImage(imageURL);
            }
        }
    });

    return (
        <Card>
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Box
                    sx={{
                        width: '220px',
                        height: '220px',
                        borderRadius: '50%',
                        border: `1px dashed ${theme.palette.primary.light}`,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        position: 'relative',
                        transition: `background 225ms ${theme.transitions.easing.easeInOut}`,
                        '&:hover': {
                            background: theme.palette.grey['200']
                        },
                        background: isDragActive ? theme.palette.grey['200'] : 'none'
                    }}
                >
                    <div
                        style={{
                            width: 'calc(100% + 100px)',
                            height: 'calc(100% + 100px)',
                            background: 'transparent',
                            color: 'transparent'
                        }}
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                    </div>
                    {/* If there is no image selected, then show the image uploader icon */}
                    {!image && (
                        <Box
                            sx={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '5px',
                                fontSize: '2.5rem',
                                pointerEvents: 'none'
                            }}
                        >
                            <IconButton
                                sx={{
                                    fontSize: '2.5rem',
                                    pointerEvents: 'none'
                                }}
                            >
                                <BsCamera />
                            </IconButton>
                            <Typography variant="body1" sx={{ textAlign: 'center' }}>
                                Upload image
                            </Typography>
                        </Box>
                    )}
                    {/* If image is selected than show the image only */}
                    {image && <Image layout="fill" src={image} alt="User avatar" />}
                </Box>

                {/* If image is uploaded than show the clear button */}
                {image && (
                    <Button
                        variant="contained"
                        sx={{
                            mt: 3
                        }}
                        onClick={() => setImage('')}
                    >
                        Clear
                    </Button>
                )}

                <Typography variant="body1" sx={{ m: 4, textAlign: 'center' }}>
                    Type of jpeg, webp, jpg, png, svg & max size of 3.1 MB image is allowed
                </Typography>

                {showEmailVerifiedSection && (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            mt: 3
                        }}
                    >
                        <div>
                            <Typography variant="h6">Email verified</Typography>
                            <Typography>
                                Disabling this will automatically send the user a verification email
                            </Typography>
                        </div>
                        <Switch
                            checked={emailVerified}
                            onChange={(e) => setEmailVerified(e.target.checked)}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </Box>
                )}
            </CardContent>
        </Card>
    );
};

export default UserPhotoUpload;
