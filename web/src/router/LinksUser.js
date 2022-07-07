import { DeleteFilled, EditOutlined, HomeFilled, SettingFilled, TeamOutlined, UserOutlined } from "@ant-design/icons";
import IconOrders from "../assets/img/icons/IconOrders";
import Affiliates from "../pages/User/Affiliates";
import Cart from "../pages/User/Cart";
import BankDeposit from "../pages/User/Cart/BankDeposit";
import PaymentMethod from "../pages/User/Cart/PaymentMethod";
import Home from "../pages/User/Home";
import Orders from "../pages/User/Orders";
import Profile from "../pages/User/Profile";
import EditProfile from "../pages/User/Profile/EditProfile";
import ProfileConfig from "../pages/User/Profile/EditProfile/ProfileConfig";
import ProfileDelete from "../pages/User/Profile/EditProfile/ProfileDelete";
import ProfileInfo from "../pages/User/Profile/EditProfile/ProfileInfo";



const LinksUser = [
    {
        name: 'Home',
        path: 'home',
        display: true,
        icon: HomeFilled,
        element: Home
    },
    {
        name: 'Afiliados',
        path: 'affiliates',
        display: true,
        icon: TeamOutlined,
        element: Affiliates
    },
    {
        name: 'Mis pedidos',
        path: 'orders',
        display: true,
        icon: IconOrders,
        element: Orders
    },
    {
        name: 'Profile',
        path: 'profile',
        display: false,
        icon: UserOutlined,
        element: Profile

    },
    {
        name: 'Editar perfil',
        path: 'edit-profile',
        display: false,
        icon: UserOutlined,
        element: EditProfile,
        subElement: ProfileInfo,
        submenu: [
            {
                name: 'Editar perfil',
                path: '',
                display: true,
                icon: EditOutlined,
                element: ProfileInfo,
            },
            {
                name: 'Ajustes de la cuenta',
                display: true,
                path: 'config',
                icon: SettingFilled,
                element: ProfileConfig,
            },
            {
                name: 'Borrar cuenta',
                display: true,
                path: 'delete',
                icon: DeleteFilled,
                element: ProfileDelete,
            }

        ]
    },
    {
        name: 'carrito',
        path: 'cart',
        display: false,
        icon: UserOutlined,
        element: Cart,
        subElement: PaymentMethod,
        submenu: [
            {
                name: 'Metodo de pago',
                path: '',
                display: true,
                icon: EditOutlined,
                element: PaymentMethod,
            },
            {
                name:"Deposito Bancario",
                path:"deposit",
                display: true,
                icon: EditOutlined,
                element: BankDeposit,
            },
        ]

    }
]

export default LinksUser;