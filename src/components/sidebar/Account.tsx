import { Avatar as MuiAvatar, Box, Typography } from '@mui/material';
import account from '@/_mocks_/account';
import { AccountStyle } from '@/components/sidebar/AccountStyle';

/**
 * Avatar component to show user avatar with image
 * @returns {JSX.Element}
 * @constructor
 */
export const Avatar = (): JSX.Element => (
    <MuiAvatar
        src={account.photoURL}
        alt="photoURL"
        sx={{
            width: '3rem',
            height: '3rem',
            mx: 'auto'
        }}
    />
);

interface AccountPropInterface {
    isInMobileSidebar?: boolean;
}

/**
 * Account component
 * @param {boolean | undefined} isInMobileSidebar
 * @returns {JSX.Element}
 * @constructor
 */
export const Account = ({ isInMobileSidebar = false }: AccountPropInterface): JSX.Element => {
    /**
     * Trim the text to a specified length with ...
     * @param {string} text
     * @returns {string}
     */
    const trimText = (text: string): string => {
        const length = 16;

        return text.length > length ? text.substring(0, length - 3) + '...' : text;
    };

    return (
        <AccountStyle sx={isInMobileSidebar ? { mb: 5, mx: 2.5 } : {}}>
            <MuiAvatar src={account.photoURL} alt="photoURL" />
            <Box sx={{ mx: 2 }}>
                <Typography variant="subtitle1" sx={{ color: 'text.primary' }}>
                    {trimText(account.displayName)}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {account.displayName}
                </Typography>
            </Box>
        </AccountStyle>
    );
};
