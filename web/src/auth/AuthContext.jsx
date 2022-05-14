import { createContext, useCallback } from "react";
import { useDispatch } from "react-redux";
import { AdminrenewToken, UserrenewToken } from "../action/auth.action";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    const verifyToken = useCallback(async () => {
        dispatch(AdminrenewToken())
        dispatch(UserrenewToken())
    }, [])
    return <AuthContext.Provider value={{
        verifyToken,
    }}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext;