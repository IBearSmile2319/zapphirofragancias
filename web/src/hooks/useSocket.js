import {useCallback, useEffect, useState } from 'react'
import { io } from 'socket.io-client'

export const useSocket = (serverPath) => {
    const [socket, setSocket] = useState(null)
    const [online, setOnline] = useState(false)

    const connectSocketAdmin = useCallback(() => {
        const token = window.localStorage.getItem('admin-token')
        const socketTemp = io.connect(serverPath, {
            transports: ['websocket', 'polling', 'flashsocket'],
            autoConnect: true,
            forceNew: true,
            query: {
                'x-token': token
            }
        })
        setSocket(socketTemp)
    }, [serverPath])

    const disconnectSocketAdmin = useCallback(() => {
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
        connectSocketAdmin,
        disconnectSocketAdmin
    }


}