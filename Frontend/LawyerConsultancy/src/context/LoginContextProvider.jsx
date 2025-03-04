import {createContext, React, useState } from 'react' ;

export const LoginContext = createContext(); 

function LoginContextProvider({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(false) ; 
    const [user, setUser] = useState(null) ; 

    const login = (userData)=>{
        setUser(userData) ;
        setIsAuthenticated(true) ;
        localStorage.setItem("user", JSON.stringify(userData)) ;
    
    }
    const logout = ()=>{
        setUser(null); 
        setIsAuthenticated(false) ;
        localStorage.removeItem("user") ;
    }

    return(
        <LoginContext.Provider value={{isAuthenticated,user ,setIsAuthenticated, login , logout}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider