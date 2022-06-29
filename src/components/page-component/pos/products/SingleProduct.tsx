import { Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import styles from './styles/ProductList.module.scss';
import { CourseItemType } from '@/features/course/courseSlice';

interface PropInterface {
    id: string;
    name: string;
    price: number;
    image: string;
    handleClick: (message: string, itemData: CourseItemType) => void;
}

export interface SnackbarMessage {
    message: string;
    key: number;
}

/**
 * Single product of product list
 * @param {string} id
 * @param {string} name
 * @param {number} price
 * @param {string} image
 * @param {Function} handleClick
 * @returns {JSX.Element}
 * @constructor
 */
const SingleProduct = ({ id, name, price, image, handleClick }: PropInterface) => {
    return (
        <>
            <Card>
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: 1,
                        cursor: 'pointer',
                        p: 2,
                        paddingBottom: '16px !important'
                    }}
                    onClick={() => handleClick(`${name} added`, { id, name, price, quantity: 1 })}
                >
                    <Box
                        sx={{
                            borderRadius: '50%',
                            position: 'relative',
                            minWidth: '154px',
                            maxWidth: 200,
                            width: {
                                xs: '154px',
                                sm: '100%',
                                lg: '200px'
                            },
                            height: {
                                xs: '154px',
                                sm: '165px',
                                md: '170px',
                                lg: '200px'
                            },
                            overflow: 'hidden'
                        }}
                    >
                        <div className={styles.image_background}></div>
                        <div className={styles.image_style}>
                            <Image src={image} layout="fill" />
                        </div>
                    </Box>

                    <Typography variant="body1" alignSelf="flex-start">
                        {name}
                    </Typography>
                    <Typography
                        variant="h5"
                        alignSelf="flex-start"
                        sx={{ fontWeight: 'bolder', color: (theme) => theme.palette.primary.main }}
                    >
                        £{price.toFixed(2)}
                    </Typography>
                </CardContent>
            </Card>

            {/* <Snackbar */}
            {/*     key={messageInfo ? messageInfo.key : undefined} */}
            {/*     open={open} */}
            {/*     onClose={handleClose} */}
            {/*     autoHideDuration={2000} */}
            {/*     anchorOrigin={{ vertical: 'top', horizontal: 'center' }} */}
            {/*     TransitionProps={{ onExited: handleExited }} */}
            {/*     TransitionComponent={Slide} */}
            {/* > */}
            {/*     <MuiAlert */}
            {/*         onClose={handleClose} */}
            {/*         severity="success" */}
            {/*         variant="filled" */}
            {/*         className={styles.alert} */}
            {/*         sx={{ */}
            {/*             width: '100%', */}

            {/*             backgroundColor: 'rgb(46, 125, 50)', */}

            {/*             '& .MuiAlert-icon': { */}
            {/*                 color: '#fff', */}

            {/*                 Opacity: '1' */}
            {/*             }, */}

            {/*             '& .MuiAlert-action': { */}
            {/*                 color: '#fff', */}

            {/*                 Opacity: '1' */}
            {/*             } */}
            {/*         }} */}
            {/*     > */}
            {/*         <Typography */}
            {/*             variant="body1" */}
            {/*             sx={{ */}
            {/*                 textTransform: 'capitalized', */}
            {/*                 color: '#fff' */}
            {/*             }} */}
            {/*         > */}
            {/*             {name} added */}
            {/*         </Typography> */}
            {/*     </MuiAlert> */}
            {/* </Snackbar> */}
        </>
    );
};

export default SingleProduct;
