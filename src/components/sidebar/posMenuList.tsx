import { AiOutlineHome, AiOutlineTable } from 'react-icons/ai';
import { MdOutlineReceiptLong } from 'react-icons/md';
import { FiPieChart } from 'react-icons/fi';

const posMenuList = [
    {
        title: 'Home',
        path: '/pos/random-id',
        linkSlug: 'homePageActive',
        icon: <AiOutlineHome />
    },
    {
        title: 'Orders',
        path: '/pos/random-id/orders',
        linkSlug: 'ordersPageActive',
        icon: <MdOutlineReceiptLong />
    },
    {
        title: 'Reports',
        path: '/pos/random-id/reports',
        linkSlug: 'reportsPageActive',
        icon: <FiPieChart />
    },
    {
        title: 'Tables',
        path: '/pos/random-id/tables',
        linkSlug: 'tablesPageActive',
        icon: <AiOutlineTable />
    }
];

export default posMenuList;
