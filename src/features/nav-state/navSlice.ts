import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavbarInterface {
    top: boolean;
    left: boolean;
    bottom: boolean;
    right: boolean;
}

interface InitialStateInterface {
    sidebarOpen: boolean;
    subMenuState: {
        [key: string]: any;
    };
    navbarState: NavbarInterface;
}

export type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface SubmenuStateInterface {
    path: string;
    open: boolean;
}

const initialState: InitialStateInterface = {
    sidebarOpen: true,
    subMenuState: {
        '/dashboard/products': false,
        '/dashboard/coupons': false
    },
    navbarState: {
        top: false,
        left: false,
        bottom: false,
        right: false
    }
};

const navSlice = createSlice({
    name: 'navSlice',
    initialState,
    reducers: {
        maximizeSidebar: (state: InitialStateInterface) => {
            state.sidebarOpen = true;
        },
        minimizeSidebar: (state: InitialStateInterface) => {
            state.sidebarOpen = false;
        },
        toggleSubMenu: (state: InitialStateInterface, action: PayloadAction<SubmenuStateInterface>) => {
            const { path, open } = action.payload;
            state.subMenuState[`${path}`] = open;
        },
        toggleNavbar: (state: InitialStateInterface, action) => {
            const { sidebarPosition, open }: { sidebarPosition: Anchor; open: boolean } = action.payload;

            switch (sidebarPosition) {
                case 'left':
                    state.navbarState.left = open;
                    break;
                case 'right':
                    state.navbarState.right = open;
                    break;
                case 'top':
                    state.navbarState.right = open;
                    break;
                case 'bottom':
                    state.navbarState.bottom = open;
                    break;
                default:
                    return;
            }
        }
    }
});

export const { maximizeSidebar, minimizeSidebar, toggleSubMenu, toggleNavbar } = navSlice.actions;

export default navSlice.reducer;
