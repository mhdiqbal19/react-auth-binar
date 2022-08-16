import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Index';
import Home from './Pages/Home/Index';
import Register from './Pages/Register/Index';
import Dashboard from './Pages/Dashboard/Index';
import ProtectedRoute from './HOC/ProtectedRoute/Index';
import { useEffect, useState } from 'react';
import DetailUser from './Pages/DetailUser/Index';
import Belajar from './Pages/BelajarLCM/Index';
import ListUser from './Pages/BelajarLCM/ListUser';

function App() {
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


  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/listUser' element={<ListUser/>} />
        <Route path='/belajar' element={<Belajar/>}/>
        <Route path='/register' element={<Register/>} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />

        
        <Route path='/detailUser/:id' element={
        <ProtectedRoute isLogin={isLogin}>
        <DetailUser/>
        </ProtectedRoute>
        }/>

        <Route path='/dashboard' element={
        <ProtectedRoute isLogin={isLogin}>
          <Dashboard/>
        </ProtectedRoute>
        }/>
    </Routes>
  )
}

export default App;
