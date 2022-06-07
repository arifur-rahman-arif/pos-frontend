import React, { ReactNode, SyntheticEvent } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { ListTopNavigation } from '@/components/page-component/list-navigation';
import GeneralTab from './GeneralTab';
import RestrictionTab from './RestrictionTab';
import { MdOutlineRemoveModerator } from 'react-icons/md';
import { RiCoupon4Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@/app/store';
import { CouponSliceInterface, handleTabIndex } from '@/features/coupon/couponSlice';

interface TabPanelProps {
    children?: ReactNode;
    index: number;
    value: number;
}

export interface TooltipInterface {
    individualOnlyTooltip?: boolean;
    excludeSaleItemsTooltip?: boolean;
    minimumCartValueTooltip?: boolean;
    maximumCartValueTooltip?: boolean;
    usageLimitPerCouponTooltip?: boolean;
    usageLimitPerUserTooltip?: boolean;
    includeProductsTooltip?: boolean;
    excludeProductsTooltip?: boolean;
    includeTermsTooltip?: boolean;
    excludeTermsTooltip?: boolean;
    includingUsersTooltip?: boolean;
    excludingUsersTooltip?: boolean;
}

/**
 * Ally props
 * @param {number} index
 * @returns {{'aria-controls': string, id: string}}
 */
const a11yProps = (index: number) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
};

/**
 * Tab panel
 * @param {TabPanelProps} props
 * @returns {JSX.Element}
 * @constructor
 */
const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <>
            <Box
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
                sx={{
                    ml: { sm: 0, md: '40px' }
                }}
            >
                {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
            </Box>
        </>
    );
};

interface CreateCouponInterface {
    editPage?: boolean;
}

/**
 * User account page-component to edit user details
 * @param {boolean | undefined} editPage
 * @returns {JSX.Element}
 * @constructor
 */
const CreateCoupon = ({ editPage = false }: CreateCouponInterface) => {
    const dispatch = useDispatch();

    const { tabIndex } = useSelector((state: AppState) => state.couponSlice as CouponSliceInterface);

    /**
     * Handle the tab state changes
     * @param {React.SyntheticEvent} event
     * @param {number} newValue
     * @returns void
     */
    const handleChange = (event: SyntheticEvent, newValue: number) => dispatch(handleTabIndex(newValue));

    return (
        <>
            <ListTopNavigation title={editPage ? 'Edit coupon' : 'Create coupon'} url="/dashboard/coupons" />

            <Box sx={{ width: '100%', bgcolor: 'background.paper', ml: { sm: 0, md: '-40px' } }}>
                <Tabs
                    value={tabIndex}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                >
                    <Tab
                        label="General"
                        icon={<RiCoupon4Line />}
                        iconPosition="start"
                        {...a11yProps(0)}
                        sx={{
                            fontSize: {
                                sm: '1rem',
                                md: '1.2rem'
                            }
                        }}
                    />
                    <Tab
                        label="Restriction"
                        icon={<MdOutlineRemoveModerator />}
                        iconPosition="start"
                        {...a11yProps(1)}
                        sx={{
                            fontSize: {
                                sm: '1rem',
                                md: '1.2rem'
                            }
                        }}
                    />
                </Tabs>

                <TabPanel value={tabIndex} index={0}>
                    <GeneralTab />
                </TabPanel>
                <TabPanel value={tabIndex} index={1}>
                    <RestrictionTab />
                </TabPanel>
            </Box>
        </>
    );
};

export default CreateCoupon;
