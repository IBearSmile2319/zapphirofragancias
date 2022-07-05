import {useCallback, useEffect, useState } from 'react'
import { io } from 'socket.io-client'

export const useSocket = (serverPath) => {
    const [socket, setSocket] = useState(null)
    const [online, setOnline] = useState(false)

    const connectSocket = useCallback(() => {
        const tokenAdmin = window.localStorage.getItem('admin-token')
        const tokenUser = window.localStorage.getItem('token')
        const socketTemp = io(serverPath, {
            transports: ['websocket', 'polling', 'flashsocket'],
            autoConnect: true,
            forceNew: true,
            query: {
                'x-token-admin': tokenAdmin,
                'x-token': tokenUser,
            }
        })
        setSocket(socketTemp)
    }, [serverPath])

    const disconnectSocket = useCallback(() => {
        socket?.disconnect()
        setSocket(null)
    }, [socket])

    useEffect(() => {
        setOnline(socket?.connected)
    }, [socket])

    useEffect(() => {
        socket?.on("connect", () => {
            setOnline(true)
        })
    }, [socket])
    
    useEffect(() => {
        socket?.on("disconnect", () => {
            setOnline(false)
        })
    }, [socket])

    return {
        socket,
        online,
        connectSocket,
        disconnectSocket
        // connectSocketAdmin,
        // disconnectSocketAdmin
    }


}