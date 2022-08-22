import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext'

const ProtectedRoute = ({children}) => {

    const authData = useContext(AuthContext)
    const {isLogin} = authData;

    if (!isLogin) {
        return <Navigate to="/login" replace/>
    }

    return children;
}

export default ProtectedRoute