import { HomeFilled, TeamOutlined, UserOutlined } from "@ant-design/icons";
import IconOrders from "../assets/img/icons/IconOrders";
import Affiliates from "../pages/User/Affiliates";
import Home from "../pages/User/Home";
import Orders from "../pages/User/Orders";
import Profile from "../pages/User/Profile";



const LinksUser = [
    {
        name: 'Home',
        path: '/home',
        display: true,
        icon: HomeFilled,
        element: Home
    },
    {
        name: 'Afiliados',
        path: '/affiliates',
        display: true,
        icon: TeamOutlined,
        element: Affiliates
    },
    {
        name: 'Mis pedidos',
        path: '/orders',
        display: true,
        icon: IconOrders,
        element: Orders
    },
    {
        name: 'Profile',
        path: '/profile',
        display: false,
        icon: UserOutlined,
        element: Profile

    }
]

export default LinksUser;