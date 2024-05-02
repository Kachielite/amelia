import {createContext, useContext, useEffect, useState} from "react";
import {getCurrentUser} from "../lib/appwrite";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getCurrentUser()
            .then((res) => {
                if (res) {
                    setIsLoggedIn(true);
                    setUser(res);
                } else {
                    setIsLoggedIn(false);
                    setUser(null);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return(
        <AuthContext.Provider value={{user, isLoading, isLoggedIn, setIsLoggedIn, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;