import { MdCircle, MdOutlineDashboard, MdOutlineReceiptLong } from 'react-icons/md';
import { BsCart3, BsShop } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { BiCircle } from 'react-icons/bi';
import { RiCoupon4Line, RiDoorOpenLine } from 'react-icons/ri';
import { AiOutlineCalculator, AiOutlineTable } from 'react-icons/ai';

const sidebarMenuList = [
    {
        title: 'dashboard',
        path: '/dashboard',
        icon: <MdOutlineDashboard />
    },
    {
        title: 'POS',
        path: '/pos/sdl234assfaojf',
        icon: <AiOutlineCalculator />
    },
    {
        title: 'products',
        path: '/dashboard/products',
        icon: <BsCart3 />,
        hideSubMenu: false,
        subMenu: [
            {
                // For floating menu
                title: 'Products',
                path: '/dashboard/products',
                icon: <BiCircle />,
                activeIcon: <MdCircle />,
                show: true,
                hideMenuOnMaximized: true
            },
            {
                title: 'Create product',
                path: '/dashboard/product/create',
                icon: <BiCircle />,
                activeIcon: <MdCircle />,
                show: true
            },
            {
                title: 'Product',
                path: '/dashboard/product/[id]',
                icon: <BiCircle />,
                activeIcon: <MdCircle />,
                show: false
            },
            // Category list page
            {
                title: 'Categories',
                path: '/dashboard/product/categories',
                icon: <BiCircle />,
                activeIcon: <MdCircle />,
                show: true
            },
            // Create category page
            {
                title: 'Create category',
                path: '/dashboard/product/category/create',
                icon: <BiCircle />,
                activeIcon: <MdCircle />,
                show: true
            },
            // Edit category page
            {
                title: 'Edit category',
                path: '/dashboard/product/category/[id]',
                icon: <BiCircle />,
                activeIcon: <MdCircle />,
                show: false
            },
            // Tag list page
            {
                title: 'Tags',
                path: '/dashboard/product/tags',
                icon: <BiCircle />,
                activeIcon: <MdCircle />,
                show: true
            },
            // Create tag page
            {
                title: 'Create tag',
                path: '/dashboard/product/tag/create',
                icon: <BiCircle />,
                activeIcon: <MdCircle />,
                show: true
            },
            // Edit tag page
            {
                title: 'Edit tag',
                path: '/dashboard/product/tag/[id]',
                icon: <BiCircle />,
                activeIcon: <MdCircle />,
                show: false
            }
        ]
    },
    {
        title: 'Orders',
        path: '/dashboard/orders',
        icon: <MdOutlineReceiptLong />,
        hideSubMenu: true,
        subMenu: [
            {
                // For floating menu
                title: 'Orders',
                path: '/dashboard/orders',
                icon: <BiCircle />,
                activeIcon: <MdCircle />,
                show: true,
                hideMenuOnMaximized: true
            },
            {
                title: 'Order details',
                path: '/dashboard/order/[id]',
                icon: <BiCircle />,
                activeIcon: <MdCircle />,
                show: false
            }
        ]
    },
    {
        title: 'Coupons',
        path: '/dashboard/coupons',
        icon: <RiCoupon4Line />,
        hideSubMenu: false,
        subMenu: [
            // For floating menu
            {
                title: 'Coupons',
                path: '/dashboard/coupons',
                icon: <BiCircle />,
                activeIcon: <MdCircle />,
                show: true,
                hideMenuOnMaximized: true
            },
            {
                title: 'Create coupon',
                path: '/dashboard/coupon/create',
                icon: <BiCircle />,
                activeIcon: <MdCircle />,
                show: true
            },
            {
                title: 'Edit coupon',
                path: '/dashboard/coupon/[id]',
                icon: <BiCircle />,
                activeIcon: <MdCircle />,
                show: false
            }
        ]
    },
    {
        title: 'Rooms',
        path: '/dashboard/rooms',
        icon: <RiDoorOpenLine />,
        hideSubMenu: true,
        subMenu: [
            {
                title: 'create',
                path: '/dashboard/room/create',
                icon: <BiCircle />,
                activeIcon: <MdCircle />,
                show: false
            }
        ]
    },
    {
        title: 'Tables',
        path: '/dashboard/tables',
        icon: <AiOutlineTable />,
        hideSubMenu: true,
        subMenu: [
            {
                title: 'create',
                path: '/dashboard/table/create',
                icon: <BiCircle />,
                activeIcon: <MdCircle />,
                show: false
            }
        ]
    },
    {
        title: 'Users',
        path: '/dashboard/users',
        icon: <FiUsers />,
        hideSubMenu: false,
        subMenu: [
            // For floating menu
            {
                title: 'Users',
                path: '/dashboard/users',
                icon: <BiCircle />,
                activeIcon: <MdCircle />,
                show: true,
                hideMenuOnMaximized: true
            },
            {
                title: 'Create user',
                path: '/dashboard/user/create',
                icon: <BiCircle />,
                activeIcon: <MdCircle />,
                show: true
            },
            {
                title: 'account',
                path: '/dashboard/user/[id]',
                icon: <BiCircle />,
                activeIcon: <MdCircle />,
                show: false
            },
            {
                title: 'account',
                path: '/dashboard/user/create',
                icon: <BiCircle />,
                activeIcon: <MdCircle />,
                show: false
            }
        ]
    },
    {
        title: 'Shops',
        path: '/dashboard/shops',
        icon: <BsShop />,
        hideSubMenu: false,
        subMenu: [
            // For floating menu
            {
                title: 'Shops',
                path: '/dashboard/shops',
                icon: <BiCircle />,
                activeIcon: <MdCircle />,
                show: true,
                hideMenuOnMaximized: true
            },
            {
                title: 'Create shop',
                path: '/dashboard/shop/create',
                icon: <BiCircle />,
                activeIcon: <MdCircle />,
                show: true
            },
            {
                title: 'Edit shop',
                path: '/dashboard/shop/[id]',
                icon: <BiCircle />,
                activeIcon: <MdCircle />,
                show: false
            }
        ]
    }
];

export default sidebarMenuList;
