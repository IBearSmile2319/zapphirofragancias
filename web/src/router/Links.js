// links de mis path
import IconProducts from '../assets/img/icons/IconProducts'
import iconProductsAdd from "../assets/img/icons/IconProductsAdd"
import IconOrders from "../assets/img/icons/IconOrders"

import { BranchesOutlined, DashboardOutlined, OrderedListOutlined, ShoppingOutlined } from "@ant-design/icons"
import Dashboard from "../pages/Admin/Dashboard"
import Orders from "../pages/Admin/Orders"
import Products from "../pages/Admin/Products"
import AddProduct from "../pages/Admin/Products/AddProduct"
import ListProducts from "../pages/Admin/Products/ListProducts"
import Categories from "../pages/Admin/Gestion/Categories"
import Branges from "../pages/Admin/Gestion/Branges"
import Gestion from "../pages/Admin/Gestion"


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
        element: Orders
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
                icon: IconProducts,
            },
            {
                name: 'Añadir producto',
                path: 'add',
                icon: iconProductsAdd,
                element: AddProduct
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
                name: "categorias",
                path: "",
                icon: BranchesOutlined,
            },
            {
                name: 'Añadir categoria',
                path: 'branges',
                icon: OrderedListOutlined,
                element: Branges
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
