import { useState, useEffect } from 'react';
import { Button, Container, FormControl, Input, InputLabel } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';


const DetailUser = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const {id} = useParams();

  const navigate = useNavigate();
  
  const handleName = (e) => {
      setName(e.target.value);
  }
  const handleEmail = (e) => {
      setEmail(e.target.value);
  }
  const handleEdit = (e) => {
      e.preventDefault();
    const payload = {
        name: name,
        email: email
    }

    axios
    .put(`https://reqres.in/api/users/${id}`, payload)
    .then((res) => {
        if (res.status === 200) {
            swal("Success!", "User has been edited!", "success");
            navigate("/dashboard")
        }
    })
    .catch((err) => console.log(err))

  }

  useEffect(() => {
      axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
          setData(res.data.data)
      })
      .catch((err) => {
          console.log(err)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  console.log(data.email);

  useEffect(() => {
    const checkIfLogin = () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      navigate(`/detailUser/${id}`)
      return;
    };

    checkIfLogin();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <Container maxWidth="sm" className='bg-blue-200 mt-20 rounded-md'>
        <div className='p-12 gap-3'>
            <div className='flex'>
                <h1 className='font-bold text-3xl'>Edit User</h1>
            </div>
            <div className='flex justify-center mt-4'>
            <img src={data.avatar} className='rounded-md' alt="" />
            </div>
            <div className='mt-4'>
                <FormControl fullWidth variant="standard">
                    <Input type='file' id="component-simple"/>
                </FormControl>
            </div>
            <div>
                <FormControl fullWidth variant="standard">
                    <InputLabel htmlFor="component-simple">{data.first_name} {data.last_name}
                    </InputLabel>
                    <Input type='text' id="component-simple" onChange={(e)=>handleName(e)}/>
                </FormControl>
            </div>
            <div>
                <FormControl  fullWidth variant="standard">
                    <InputLabel htmlFor="component-simple">{data.email}</InputLabel>
                    <Input id="component-simple" onChange={(e)=>handleEmail(e)}/>
                </FormControl>
            </div>
            <div className='mt-4 flex justify-end'>
            <Button variant="outlined" color="success">Reset</Button> &nbsp;
            <Button variant="contained" color="primary" onClick={handleEdit}>Edit</Button>
            </div>
        </div>
    </Container>
  )
}

export default DetailUser