import { useState, useEffect } from 'react';
import { Button, Container, FormControl, Input, InputLabel } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const DetailUser = () => {
  const [data, setData] = useState([]);

  const {id} = useParams();
  console.log('ini id',id);

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
                    <InputLabel htmlFor="component-simple">{data.first_name} {data.last_name}</InputLabel>
                    <Input type='text' id="component-simple"/>
                </FormControl>
            </div>
            <div>
                <FormControl  fullWidth variant="standard">
                    <InputLabel htmlFor="component-simple">{data.email}</InputLabel>
                    <Input id="component-simple" />
                </FormControl>
            </div>
            <div className='mt-4 flex justify-end'>
            <Button variant="outlined" color="success">Reset</Button> &nbsp;
            <Button variant="contained" color="primary">Edit</Button>
            </div>
        </div>
    </Container>
  )
}

export default DetailUser