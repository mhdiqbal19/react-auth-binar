import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Alert } from '@mui/material';
    


const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(false);
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault(); 
    const payload = {
      email: email,
      password: password,
    };

    axios
      .post("https://reqres.in/api/register", payload)
      .then((res) => setResult(res.data.token))
      .catch((err) => console.log(err));
  };
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
        <section className='flex flex-col gap-8 w-80'>
          <div className='bg-blue-400 w-24 h-8'>
          </div>
          <h1 className='font-bold text-4xl'>Register</h1>
          {!!result.length && <Alert severity="error">You're Already Registered!</Alert>}
          <form>
            <div className='flex flex-col gap-2 mb-4'>
              <label className='text-sm'>Email</label>
              <input className='py-2 px-4 border border-gray-400 rounded-md text-gray-500 text-xs focus:outline-blue-400' type="email" placeholder='Masukan email anda' onChange={handleEmail}/>
            </div>
            <div className='flex flex-col gap-2 mb-8'>
              <label className='text-sm'>Password</label>
              <input className='py-2 px-4 border border-gray-400 rounded-md text-gray-500 text-xs focus:outline-blue-400' type="password" name="email" placeholder='6+ Karakter' onChange={handlePassword}/>
            </div>
            <button type='button' className='w-full bg-blue-700 text-sm text-white rounded-md hover:bg-blue-900 py-2' onClick={handleRegister}>Daftar</button>
          </form>
          <div className='flex'>
            <p className='text-sm'>Already Have an Account? </p>
            <p className='text-sm text-blue-900'>
              <Link to="/login">
              &nbsp; Klick here!
              </Link>
            </p>

          </div>
        </section>
      </div>
    </div>
  )
}

export default Register