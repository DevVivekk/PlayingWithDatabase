import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Submitt from '../gallery/doge.png'

function Submit() {

    const [user,setUser] = useState({name:'',subscribedChannel:''})
    let name,value;
    const handleChange=(e)=>{
       name=e.target.name;
       value=e.target.value;
       setUser({...user,[name]:value})
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const {name,subscribedChannel} = user;
        if(subscribedChannel===''){
          window.alert('First Fill the form!')
        }else{
        if(window.confirm(`Are you sure you wanna add ${subscribedChannel} channel`)===true){
      const response = await fetch('/api/subscribe',{
         method:"POST",
         headers:{
           "Accept":"application/json",
           "Content-Type":"application/json"
    },
    body:JSON.stringify({name,subscribedChannel})
    });
    if(response.status === 201){
        window.alert(`Your channel ${subscribedChannel} has been added successfully!`)
    }else if(response.status===401){
        window.alert(`Something went wrong!`)
    }else if(response.status===404){
        window.alert(`User ${name} already exits!`)
    }else if(response.status===400){
        window.alert('First Fill the form!')
    }else{
    const body_data = await response.json();
    console.log(body_data);
        }}}
    }
    
  return (
    <div className='submit-data'>
       <div className='form-2'>
      <h1>Hey!👋</h1>
      <br />
      <h2>Just fill out the form to Subscribe the Channel!</h2>
      <img src={Submitt} alt='#img' className='form-image'/>
    </div>
    <div className='form-1'>
    <form method='POST'>
    {/* <Box component="form"
      sx={{
        '& > :not(style)': { m:1, ml:50, width: '60ch' },display: 'flex',
        flexDirection: 'column',
      }}
      noValidate
      autoComplete="off"
      spacing={4}
    > */}
    <br /><br/><br/><br/><br /><br /><br/>
    <br />
      <TextField className='formfield' name='name' value={user.name} onChange={handleChange}  InputProps={{ style: { fontSize: 20 } }}
        InputLabelProps={{ style: { fontSize: 20 } }} id="outlined-basic" size="normal" label="UserName" placeholder='Username should be unique' variant="outlined" /> <br /> <br /><br />
      <TextField className='formfield' name='subscribedChannel' value={user.subscribedChannel} onChange={handleChange}    InputProps={{ style: { fontSize: 20 } }}
        InputLabelProps={{ style: { fontSize: 20 } }} id="outlined-basic" size="normal"  label="Channel Name" placeholder='Channel name you wanna sub' variant="outlined" /> <br /> <br /><br />
        <Button type='submit' onClick={handleSubmit}  className='submit-button' size='lg' variant="warning">Submit Details</Button>{' '}
    {/* </Box> */}
    </form>
    </div>
    <div>
      
    </div>
    </div>
  )
}

export default Submit