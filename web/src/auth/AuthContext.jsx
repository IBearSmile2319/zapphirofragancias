import { createContext, useCallback } from "react";
import { useDispatch } from "react-redux";
import { AdminrenewToken } from "../action/auth.action";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    const verifyToken = useCallback(async () => {
        dispatch(AdminrenewToken())
    }, [])
    return <AuthContext.Provider value={{
        verifyToken
    }}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext;