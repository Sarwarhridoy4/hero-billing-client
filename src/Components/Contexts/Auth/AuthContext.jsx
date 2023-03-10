import { createContext, useState } from "react";

export const AuthContext = createContext();



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [total,setTotal] = useState(0)
    

    

    

    

    

    const authInfo = {
        
        setLoading,
        setUser,
        user,
        loading,
        total,
        setTotal
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;