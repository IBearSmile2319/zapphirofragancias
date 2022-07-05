import { createContext, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { URL } from '../helpers/axios';
import { useSocket } from '../hooks/useSocket';

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
    const {
        socket,
        online,
        connectSocket,
        disconnectSocket
    } = useSocket(URL);
    const { admin, user } = useSelector(state => state.auth);
    // adminSocket
    useEffect(() => {
        if (admin.logged || user.logged) {
            connectSocket();
        }
    }, [admin, user, connectSocket]);
    // admin socket
    useEffect(() => {
        if (!admin.logged || !user.logged) {
            disconnectSocket();
        }
    }, [admin, user, disconnectSocket]);
    return <SocketContext.Provider value={{ socket, online }}>
        {children}
    </SocketContext.Provider>
}


export default SocketContext;