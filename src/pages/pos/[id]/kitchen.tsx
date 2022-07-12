import React, { ReactNode, useEffect } from 'react';
import { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import { setPageActive } from '@/features/nav-state/posNavStateSlice';
import styles from './styles/Kitchen.module.scss';
import { LeftComponent } from '@/components/page-component/kitchen/left-components';
import { styled } from '@mui/material/styles';
import { PrepareItem } from '@/components/page-component/kitchen/middle-components';

const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.up('lg')]: {
        paddingTop: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
    },
    [theme.breakpoints.down('lg')]: {
        paddingTop: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
    },
    [theme.breakpoints.down('sm')]: {
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    }
}));

/**
 * Pos order list page
 * @returns {JSX.Element}
 * @constructor
 */
const Kitchen: NextPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageActive('kitchenPageActive'));
    }, []);

    return (
        <RootStyle>
            <MainStyle>
                <div className={styles.kitchenLayout}>
                    <LeftComponent />

                    <PrepareItem />

                    <div>hello 3</div>
                </div>
            </MainStyle>
        </RootStyle>
    );
};

// @ts-ignore
Kitchen.layout = 'noNavigation';

export default Kitchen;
