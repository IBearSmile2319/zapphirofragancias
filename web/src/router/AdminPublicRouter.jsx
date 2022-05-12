import { Navigate, Outlet } from 'react-router-dom'
const AdminPublicRouter = ({ admin }) => {
    return admin ? <Navigate to="/admin/dashboard" /> : <Outlet />
}

export default AdminPublicRouter