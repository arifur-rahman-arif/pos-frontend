import React, { useState } from 'react';
import { Fade, Grid, IconButton, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { acceptedImageTypes } from '@/utils/global';
import { handleAlert } from '@/features/alert/alertSlice';
import Lottie, { Options } from 'react-lottie';
import * as animationData from '../../../../public/static/lottie-animations/27938-upload-files.json';
import styles from './styles/ImageUpload.module.scss';
import Image from 'next/image';
import { IoMdRemoveCircle } from 'react-icons/io';

// Accepted image size in bytes which is 3.1MB
const acceptedMaxImageSize = 3100000;

const lottieOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: animationData
};

/**
 * Lottie's animation component to show the animation
 * @returns {JSX.Element}
 * @constructor
 */
const LottieAnimation = () => {
    return (
        <Lottie
            options={lottieOptions}
            speed={1}
            title="Upload image"
            style={{ width: '250px', height: '250px' }}
        />
    );
};

/**
 * Product image upload component to upload product image
 * @returns {JSX.Element}
 * @constructor
 */
const ImageUpload = () => {
    const theme = useTheme();
    const [image, setImage] = useState<string>();
    const dispatch = useDispatch();

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        noClick: false,
        autoFocus: false,
        maxFiles: 1,
        onDrop: (acceptedFiles) => {
            if (acceptedFiles.length > 1) {
                return dispatch(
                    handleAlert({
                        showAlert: true,
                        alertMessage: 'Multiple file upload is not acceptable',
                        alertType: 'warning'
                    })
                );
            }

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
        <Grid item xs={12} sm={12} md={12}>
            <Stack direction="column" alignItems="flex-start" gap={3}>
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: '300px',
                        borderRadius: '8px',
                        border: `1px solid #DFE3E8`,
                        cursor: 'pointer'
                    }}
                    className={styles.image_upload_box}
                >
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            background: 'transparent',
                            color: 'transparent'
                        }}
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                    </div>

                    {/* Background overlay */}
                    <Box
                        className="image_upload_overlay"
                        sx={{
                            position: 'absolute',
                            left: '0',
                            top: '0',
                            width: '100%',
                            height: '100%',
                            zIndex: '-2',
                            transition: `background 225ms ${theme.transitions.easing.easeInOut}`,
                            background: isDragActive ? theme.palette.grey['200'] : 'none'
                        }}
                    />
                    {/* File upload animation */}
                    <Box
                        sx={{
                            position: 'absolute',
                            left: '0',
                            top: '0',
                            width: '100%',
                            height: '100%',
                            zIndex: '-1',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <LottieAnimation />
                        <Typography
                            variant="h6"
                            sx={{
                                position: 'absolute',
                                left: '50.99%',
                                top: 'calc(50% + 100px)',
                                transform: 'translate(-50%, -50%)',
                                color: theme.palette.grey['600'],
                                textAlign: 'center'
                            }}
                        >
                            Drop or select a file
                        </Typography>
                    </Box>
                </Box>
                <Fade in={!!image}>
                    {image ? (
                        <Box
                            sx={{
                                position: 'relative',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                border: `1px solid ${theme.palette.grey['300']}`,
                                width: '250px',
                                height: '150px'
                            }}
                        >
                            {image && (
                                <Image
                                    src={image}
                                    style={{
                                        borderRadius: '8px',
                                        border: `1px solid ${theme.palette.grey['300']}`
                                    }}
                                    alt="Uploaded image"
                                    width={250}
                                    height={150}
                                />
                            )}
                            <IconButton
                                sx={{
                                    fontSize: '1.3rem',
                                    color: theme.palette.error.main,
                                    position: 'absolute',
                                    top: '0',
                                    right: '0'
                                }}
                                onClick={() => setImage('')}
                            >
                                <IoMdRemoveCircle />
                            </IconButton>
                        </Box>
                    ) : (
                        <div style={{ display: 'none' }}></div>
                    )}
                </Fade>
            </Stack>
        </Grid>
    );
};

export default ImageUpload;
