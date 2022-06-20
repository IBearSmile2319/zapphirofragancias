// links de mis path
import IconProducts from '../assets/img/icons/IconProducts'
import iconProductsAdd from "../assets/img/icons/IconProductsAdd"
import IconOrders from "../assets/img/icons/IconOrders"

import { 
    BranchesOutlined, 
    DashboardOutlined, 
    ShoppingOutlined, 
    TagsOutlined,
    PictureOutlined

} from "@ant-design/icons"
import Dashboard from "../pages/Admin/Dashboard"
import Orders from "../pages/Admin/Orders"
// products
import Products from "../pages/Admin/Products"
import AddProduct from "../pages/Admin/Products/AddProduct"
import ListProducts from "../pages/Admin/Products/ListProducts"
// gestion
import Gestion from "../pages/Admin/Gestion"
import Categories from "../pages/Admin/Gestion/Categories"
import Brands from "../pages/Admin/Gestion/Brands"
import Pictures from '../pages/Admin/Gestion/Pictures'
import IconPanda from '../assets/img/icons/IconPanda'
import ProductsCombo from '../pages/Admin/Products/ProductsCombo'
import IconZFCombo from '../assets/img/icons/IconZFCOMBO'
import ListOrders from '../pages/Admin/Orders/ListOrders'
import ViewOrder from '../pages/Admin/Orders/ListOrders/ViewOrder'


export const LinksAdmin = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        icon: DashboardOutlined,
        element: Dashboard
    },
    {
        name: 'Orders',
        path: 'orders',
        icon: IconOrders,
        element: Orders,
        subElement: ListOrders,
        submenu: [
            {
                name: 'Orders',
                path: '',
                display: true,
                icon: IconOrders,
                element: ListOrders,
            },
            {
                name: 'View Order',
                display: false,
                path: ':orderId',
                icon: IconOrders,
                element: ViewOrder,
            }
        ]
    },
    {
        name: 'Products',
        path: 'products',
        icon: ShoppingOutlined,
        element: Products,
        subElement: ListProducts,
        submenu: [
            {
                name: "Productos",
                path: "",
                display: true,
                icon: IconProducts,
            },
            {
                name: 'Añadir producto',
                path: 'add',
                display: true,
                icon: iconProductsAdd,
                element: AddProduct
            },
            {
                name: 'Combos',
                path: 'combos',
                display: true,
                icon: IconZFCombo,
                element: ProductsCombo
            }
        ]
    },
    {
        name: 'Gestionar',
        path: 'gestion',
        icon: BranchesOutlined,
        element: Gestion,
        subElement: Categories,
        submenu: [
            {
                name: "Categorias",
                path: "",
                display: true,
                icon: BranchesOutlined,
            },
            {
                name: 'Marcas',
                path: 'brands',
                display: true,
                icon: TagsOutlined,
                element: Brands
            },
            {
                name: 'Imagenes',
                path: 'Pictures',
                display: true,
                icon: PictureOutlined,
                element: Pictures
            }
        ]
    }
    // {
    //     name: 'users',
    //     path: '/admin/users',
    //     icon: DashboardOutlined,
    // },
    // {
    //     name: 'categories',
    //     path: '/admin/categories',
    //     icon: DashboardOutlined,
    // },

    // {
    //     name: 'shipping',
    //     path: '/admin/shipping',
    //     icon: DashboardOutlined,
    // },
    // {
    //     name: 'payments',
    //     path: '/admin/payments',
    //     icon: DashboardOutlined,
    // },
    // {
    //     name: 'reports',
    //     path: '/admin/reports',
    //     icon: DashboardOutlined,
    // },
    // {
    //     name: 'settings',
    //     path: '/admin/settings',
    //     icon: DashboardOutlined,
    // },
]
