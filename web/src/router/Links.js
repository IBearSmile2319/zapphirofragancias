// links de mis path

import { DashboardOutlined, OrderedListOutlined, ShoppingOutlined } from "@ant-design/icons"
import Dashboard from "../pages/Admin/Dashboard"
import Orders from "../pages/Admin/Orders"
import Products from "../pages/Admin/Products"
import AddProduct from "../pages/Admin/Products/AddProduct"
import ListProducts from "../pages/Admin/Products/ListProducts"

export const LinksAdmin = [
    {
        name: 'dashboard',
        path: 'dashboard',
        icon: DashboardOutlined,
        element: Dashboard
    },
    {
        name: 'orders',
        path: 'orders',
        icon: OrderedListOutlined,
        element: Orders
    },
    {
        name: 'products',
        path: 'products',
        icon: ShoppingOutlined,
        element: Products,
        subElement: ListProducts,
        submenu: [
            {
                name: 'products',
                path: 'add',
                element: AddProduct
            }
        ]
    },
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
