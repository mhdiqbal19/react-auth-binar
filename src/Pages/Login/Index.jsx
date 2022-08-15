import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import swal from 'sweetalert';

const Login = ({setIsLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState();
  const navigate = useNavigate()

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const payload = {
      email: email,
      password: password
    }
    axios
    .post("https://reqres.in/api/login", payload)
    .then((res) => {
      setResult(res.data.token)
      localStorage.setItem("token", res.data.token)
      setIsLogin(true)
      navigate("/dashboard")
    })
    .catch((err) => {
      swal("Login Failed!", "Please enter a valid email address or password!", "error");
    })
  }
  console.log("ini result", result);

    useEffect(() => {
      const checkIfLogin = () => {
        const token = localStorage.getItem("token");
        if (!token) return;
        navigate("/dashboard")
      };
      checkIfLogin();
    });


  return (
    <div className='w-full h-screen bg-gray-400 flex'>
      <div className='md:w-3/5 bg-blue-400 h-full md:block'>
      </div>
      <div className='flex-1 bg-white h-full flex items-center justify-center'>
        <section className='flex flex-col gap-8'>
          <div className='bg-blue-400 w-24 h-8'>
          </div>
          <h1 className='font-bold text-4xl'>Welcome, Admin BCR</h1>
          <form>
            <div className='flex flex-col gap-2 mb-4'>
              <label className='text-sm'>Email</label>
              <input className='py-2 px-4 border border-gray-400 rounded-md text-gray-500 text-xs focus:outline-blue-400' type="email" placeholder='Contoh : miqbal@localhost.co.id' onChange={(e)=>handleEmail(e)}/>
            </div>
            <div className='flex flex-col gap-2 mb-8'>
              <label className='text-sm'>Password</label>
              <input className='py-2 px-4 border border-gray-400 rounded-md text-gray-500 text-xs focus:outline-blue-400' type="password" name="email" placeholder='6+ Karakter' onChange={(e)=>handlePassword(e)}/>
            </div>
            <button type='button' className='w-full bg-blue-700 text-sm text-white rounded-md hover:bg-blue-900 py-2' onClick={handleLogin}>Sign In </button>
          </form>
          <div className='flex'>
            <p className='text-sm'>Belum Daftar Akun </p>
            <p className='text-sm text-blue-900'>
              <Link to="/register">
              &nbsp; Klick here!
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Login