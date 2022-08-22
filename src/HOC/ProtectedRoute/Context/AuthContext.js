import React from 'react'
import { createContext, useState, useEffect  } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
      const checkIfLogin = () => {
        const token = localStorage.getItem("token")
        if (!token) {
          setIsLogin(false)
        }else{
          setIsLogin(true)
        }
      }
      checkIfLogin();
    },[])
  
    const authData = {
        isLogin, setIsLogin
    }
  
  return (
    <div>
        <AuthContext.Provider value={authData}>
            {props.children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider