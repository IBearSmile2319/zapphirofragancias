import { createContext, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useSocket } from '../hooks/useSocket';

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
    const {
        socket,
        online,
        connectSocketAdmin,
        disconnectSocketAdmin
    } = useSocket("http://localhost:8080");
    const { admin, user } = useSelector(state => state.auth);
    // adminSocket
    useEffect(() => {
        if (admin.logged) {
            connectSocketAdmin();
        }
    }, [admin, connectSocketAdmin]);

    useEffect(() => {
        if (!admin.logged) {
            disconnectSocketAdmin();
        }
    }, [admin, disconnectSocketAdmin]);

    return <SocketContext.Provider value={{ socket, online }}>
        {children}
    </SocketContext.Provider>
}


export default SocketContext;