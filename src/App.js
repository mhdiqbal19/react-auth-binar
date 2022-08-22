import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Index';
import Home from './Pages/Home/Index';
import Register from './Pages/Register/Index';
import Dashboard from './Pages/Dashboard/Index';
import ProtectedRoute from './HOC/ProtectedRoute/Index';
import DetailUser from './Pages/DetailUser/Index';
import Belajar from './Pages/BelajarLCM/Index';
import ListUser from './Pages/BelajarLCM/ListUser';
import AuthContextProvider from './HOC/ProtectedRoute/Context/AuthContext';

function App() {

  return (
  <AuthContextProvider>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/listUser' element={<ListUser/>} />
        <Route path='/belajar' element={<Belajar/>}/>
        <Route path='/register' element={<Register/>} />
        <Route path="/login" element={<Login/>} />

        
        <Route path='/detailUser/:id' element={
        <ProtectedRoute>
        <DetailUser/>
        </ProtectedRoute>
        }/>

        <Route path='/dashboard' element={
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
        }/>
    </Routes>
  </AuthContextProvider>
  )
}

export default App;
