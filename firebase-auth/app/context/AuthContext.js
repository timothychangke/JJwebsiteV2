import {useContext, createContext, useState, useEffect} from "react";

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
  
  const [user, setUser] = useState('Aqil')
  
  return <AuthContext.Provider value={{user}}>
    {children}
  </AuthContext.Provider>
}

export const UserAuth = () => {
  return useContext(AuthContext)
}