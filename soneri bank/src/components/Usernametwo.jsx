import React, { createRef, useContext, useState } from 'react'
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { FaArrowLeft ,FaArrowRight } from "react-icons/fa6";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Notecontext from '../context/Notecontext';
export const Usernametwo = () => {
  const [type, settype] = useState('Account')
  const [value, setValue] = useState("")
  const errorIndicate = createRef();
  const context=useContext(Notecontext)
const {PageNavigate}=context

const Secondvalue=(e)=>{
  e.target.value.length<=11?setValue(e.target.value):setValue(value)
}

const nextStep=()=>{
  value.length===11?PageNavigate('/signup3'):errorIndicate.current.textContent='Enter Valid Account Detail'
}

const PrevStep=()=>{
  PageNavigate('/signup1')
}
  return (
    <>
    <Stack align='center'>

    <Typography variant='caption' component="h2">Firstly, we need to verify your legal Id. Select which document you want to use.</Typography>

<FormControl >
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={type}
        onChange={e=>settype(e.target.value)}
      >
<Stack gap={5}  direction="row"  margin='auto' width={'40%'}>
        <FormControlLabel value="Account" control={<Radio />} label="Account" />
    </Stack>
      </RadioGroup>
      <Stack    align='center' >
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m:2,width: '48%' },
      }}
   
    >
      <TextField type='number' sx={{  borderLeft: '5px solid black'}}    onChange={Secondvalue}
      value={value} id="outlined-basic" label="Please Enter 11 digit soneri account number" variant="outlined" />
  
      </Box>
      </Stack>
      <Typography ref={errorIndicate} color='red' width={'69%'} align='center'></Typography>
      <Stack  justifyContent={'center'} direction='row'>
      <Box    sx={{
        '& > :not(style)': { m:2,width: '2%',borderRadius:26 },
      }}> 

    <Button onClick={PrevStep}   sx={{ backgroundColor: "#052CAC", color: "white", width: 150,'&:hover': {
    backgroundColor: '#052CAC',
  }, }} margin='auto'  variant="contained"><FaArrowLeft size={17}/></Button>
      </Box>
      <Box    sx={{
        '& > :not(style)': { m:2,width: '2%',borderRadius:26 },
      }}> 

    <Button onClick={nextStep}   sx={{ backgroundColor: "#052CAC", color: "white", width: 150,'&:hover': {
    backgroundColor: '#052CAC',
  }, }} margin='auto'  variant="contained"><FaArrowRight size={17}/></Button>
      </Box>
      </Stack>
    </FormControl>
    </Stack>
    </>
  )
}
