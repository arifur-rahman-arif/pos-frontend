import React, { ReactNode, SyntheticEvent, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Page from '@/components/Page';
import { SITE_NAME } from '@/utils/global';
import { Box, Tab, Tabs } from '@mui/material';
import { VscAccount } from 'react-icons/vsc';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { BsKey } from 'react-icons/bs';
import { GeneralTabPanel, PasswordTabPanel } from '@/components/page-component/user';
import { ListTopNavigation } from '@/components/page-component/list-navigation';

interface TabPanelProps {
    children?: ReactNode;
    index: number;
    value: number;
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

    // @ts-ignore
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

/**
 * User account page-component to edit user details
 * @returns {JSX.Element}
 * @constructor
 */
const AccountPage: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const siteName = `${SITE_NAME} > Account > ${id}`;
    const [value, setValue] = useState(0);

    /**
     * Handle the tab state changes
     * @param {React.SyntheticEvent} event
     * @param {number} newValue
     * @returns void
     */
    const handleChange = (event: SyntheticEvent, newValue: number) => setValue(newValue);

    return (
        <Page title={siteName}>
            <ListTopNavigation title="User account" url="/dashboard/users" />

            <Box sx={{ width: '100%', bgcolor: 'background.paper', ml: { sm: 0, md: '-40px' } }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                >
                    <Tab
                        label="General"
                        icon={<VscAccount />}
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
                        label="Billing"
                        icon={<FaRegMoneyBillAlt />}
                        iconPosition="start"
                        {...a11yProps(1)}
                        sx={{
                            fontSize: {
                                sm: '1rem',
                                md: '1.2rem'
                            }
                        }}
                    />
                    <Tab
                        label="Change password"
                        icon={<BsKey />}
                        iconPosition="start"
                        {...a11yProps(2)}
                        sx={{
                            fontSize: {
                                sm: '1rem',
                                md: '1.2rem'
                            }
                        }}
                    />
                </Tabs>

                <TabPanel value={value} index={0}>
                    <GeneralTabPanel />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <PasswordTabPanel />
                </TabPanel>
            </Box>
        </Page>
    );
};

export default AccountPage;
