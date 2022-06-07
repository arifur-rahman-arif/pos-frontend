// @ts-ignore
import faker from 'faker';
import { noCase } from 'change-case';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { formatDistanceToNow, set, sub } from 'date-fns';
import { alpha } from '@mui/material/styles';
import {
    Avatar,
    Badge,
    Box,
    Button,
    Divider,
    IconButton,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    ListSubheader,
    Tooltip,
    Typography
} from '@mui/material';
import { MenuPopover } from '../../menu-popover';
import { Scrollbar } from '../../scrollbar';
import { mockImgAvatar } from '@/utils/mockImages';
import { BiBell } from 'react-icons/bi';
import { BsCheck2All } from 'react-icons/bs';

const NOTIFICATIONS = [
    {
        id: faker.datatype.uuid(),
        title: 'Your order is placed',
        description: 'waiting for shipping',
        avatar: null,
        type: 'order_placed',
        createdAt: set(new Date(), { hours: 10, minutes: 30 }),
        isUnRead: true
    },
    {
        id: faker.datatype.uuid(),
        title: faker.name.findName(),
        description: 'answered to your comment on the Minimal',
        avatar: mockImgAvatar(2),
        type: 'friend_interactive',
        createdAt: sub(new Date(), { hours: 3, minutes: 30 }),
        isUnRead: true
    },
    {
        id: faker.datatype.uuid(),
        title: 'You have new message',
        description: '5 unread messages',
        avatar: null,
        type: 'chat_message',
        createdAt: sub(new Date(), { days: 1, hours: 3, minutes: 30 }),
        isUnRead: false
    },
    {
        id: faker.datatype.uuid(),
        title: 'You have new mail',
        description: 'sent from Guido Padberg',
        avatar: null,
        type: 'mail',
        createdAt: sub(new Date(), { days: 2, hours: 3, minutes: 30 }),
        isUnRead: false
    },
    {
        id: faker.datatype.uuid(),
        title: 'Delivery processing',
        description: 'Your order is being shipped',
        avatar: null,
        type: 'order_shipped',
        createdAt: sub(new Date(), { days: 3, hours: 3, minutes: 30 }),
        isUnRead: false
    }
];

/**
 * Notification popover inner content
 * @param {any} notification
 * @returns {JSX.Element}
 */
const renderContent = (notification: any) => {
    const title = (
        <Typography variant="subtitle2">
            {notification.title}
            <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
                &nbsp; {noCase(notification.description)}
            </Typography>
        </Typography>
    );

    if (notification.type === 'order_placed') {
        return {
            avatar: <img alt={notification.title} src="/static/icons/ic_notification_package.svg" />,
            title
        };
    }
    if (notification.type === 'order_shipped') {
        return {
            avatar: <img alt={notification.title} src="/static/icons/ic_notification_shipping.svg" />,
            title
        };
    }
    if (notification.type === 'mail') {
        return {
            avatar: <img alt={notification.title} src="/static/icons/ic_notification_mail.svg" />,
            title
        };
    }
    if (notification.type === 'chat_message') {
        return {
            avatar: <img alt={notification.title} src="/static/icons/ic_notification_chat.svg" />,
            title
        };
    }
    return {
        avatar: <img alt={notification.title} src={notification.avatar} />,
        title
    };
};

/**
 * Content item of notification
 * @param {any} notification
 * @returns {JSX.Element}
 * @constructor
 */
const NotificationItem = ({ notification }: any) => {
    const { avatar, title } = renderContent(notification);

    return (
        <ListItemButton
            disableGutters
            sx={{
                py: 1.5,
                px: 2.5,
                mt: '1px',
                ...(notification.isUnRead && {
                    bgcolor: 'action.selected'
                })
            }}
        >
            <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'background.neutral' }}>{avatar}</Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={title}
                secondary={
                    <Typography
                        variant="caption"
                        sx={{
                            mt: 0.5,
                            display: 'flex',
                            alignItems: 'center',
                            color: 'text.disabled'
                        }}
                    >
                        <Box sx={{ mr: 0.5, width: 16, height: 16 }}>
                            <i className="fa-solid fa-clock"></i>
                        </Box>

                        {formatDistanceToNow(new Date(notification.createdAt))}
                    </Typography>
                }
            />
        </ListItemButton>
    );
};

/**
 * Notification popover component
 * @returns {JSX.Element}
 * @constructor
 */
const NotificationsPopover = () => {
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [notifications, setNotifications] = useState(NOTIFICATIONS);
    const totalUnRead = notifications.filter((item) => item.isUnRead).length;

    /**
     * Open the notification popover
     * @returns void
     */
    const handleOpen = () => setOpen(true);

    /**
     * Close the notification popover
     * @returns void
     */
    const handleClose = () => setOpen(false);

    /**
     * Function to handle the mark read functionality
     */
    const handleMarkAllAsRead = () => {
        setNotifications(
            notifications.map((notification) => ({
                ...notification,
                isUnRead: false
            }))
        );
    };

    return (
        <>
            <IconButton
                ref={anchorRef}
                size="large"
                color={open ? 'primary' : 'default'}
                onClick={handleOpen}
                sx={{
                    ...(open && {
                        bgcolor: (theme) =>
                            alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
                    })
                }}
            >
                <Badge badgeContent={totalUnRead} color="error">
                    <BiBell />
                </Badge>
            </IconButton>

            <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current} sx={{ width: 360 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="subtitle1">Notifications</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            You have {totalUnRead} unread messages
                        </Typography>
                    </Box>

                    {totalUnRead > 0 && (
                        <Tooltip title=" Mark all as read">
                            <IconButton color="primary" onClick={handleMarkAllAsRead}>
                                <BsCheck2All />
                            </IconButton>
                        </Tooltip>
                    )}
                </Box>

                <Divider />

                <Scrollbar sx={{ height: { xs: 340, sm: 'auto' } }}>
                    <List
                        disablePadding
                        subheader={
                            <ListSubheader
                                disableSticky
                                sx={{
                                    py: 1,
                                    px: 2.5,
                                    typography: 'overline'
                                }}
                            >
                                New
                            </ListSubheader>
                        }
                    >
                        {notifications.slice(0, 2).map((notification) => (
                            <NotificationItem key={notification.id} notification={notification} />
                        ))}
                    </List>

                    <List
                        disablePadding
                        subheader={
                            <ListSubheader
                                disableSticky
                                sx={{
                                    py: 1,
                                    px: 2.5,
                                    typography: 'overline'
                                }}
                            >
                                Before that
                            </ListSubheader>
                        }
                    >
                        {notifications.slice(2, 5).map((notification) => (
                            <NotificationItem key={notification.id} notification={notification} />
                        ))}
                    </List>
                </Scrollbar>

                <Divider />

                <Box sx={{ p: 1 }}>
                    <Link href="/register" passHref>
                        <Button fullWidth disableRipple>
                            View All
                        </Button>
                    </Link>
                </Box>
            </MenuPopover>
        </>
    );
};

export default NotificationsPopover;
