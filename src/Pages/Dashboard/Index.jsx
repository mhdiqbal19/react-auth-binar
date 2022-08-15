import {useNavigate} from 'react-router-dom';
import { Card, CardMedia, CardContent, CardActions, Typography, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Dashboard = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/")
  }

  useEffect(() => {
    getData();
  },[])

  const getData = () => {
    axios
    .get("https://reqres.in/api/users?page=1")
    .then((res) => {
      setData(res.data.data)
    })
    .catch((err) => console.log(err))
  }

  const handleDelete = (id) => {
    axios
    .delete(`https://reqres.in/api/users/${id}`)
    .then((res) => {
      if (res.status === 204) {
        setOpen(false)
      }
    })
    .catch((err) => console.log(err))
  }


  return (
    <div className='w-full h-screen flex-col bg-green-400 flex items-center justify-center'>
      <section className='flex flex-col gap-3'>
      <h1 className='font-bold text-4xl w-full'>Dashboard</h1>
      <button className='w-full bg-blue-700 text-sm text-white rounded-md hover:bg-blue-900 py-2' onClick={handleLogout}>Logout</button>
      </section>
       <section className='mt-8 flex gap-3'>
        {!!data.length > 0 ? data.map((item) => (
        <>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={item.avatar}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.first_name} {item.last_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.email}
              </Typography>
            </CardContent>
            <CardActions>
              <button size="small" className="bg-green-500 text-white rounded-md p-2 hover:bg-green-700 flex items-center w-full justify-center" >Edit</button>
              <button size="small" onClick={()=>{
                setId(item.id)
                handleClickOpen()}} className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-700 flex items-center w-full justify-center">Delete</button>
            </CardActions>
          </Card>

        </>
        )):<p>Loading...</p>
      }
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        Are you sure?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this user!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button className="text-black rounded-md p-2  hover:text-gray-400 flex items-center w-full justify-center" onClick={handleClose}>Cancel</button>
          <button className="bg-red-500 text-white rounded-md p-2 hover:bg-red-700 flex items-center w-full justify-center" onClick={()=>handleDelete(id)} autoFocus>
            Delete
          </button>
        </DialogActions>
      </Dialog>

      </section>
    </div>
  )
}

export default Dashboard