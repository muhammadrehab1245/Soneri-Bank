import React, { createRef, useContext, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import {  FaArrowRight } from "react-icons/fa6";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Notecontext from '../context/Notecontext';

export const Passwordone = () => {
  const [document, setdocument] = useState('CNIC/SCNIC')
  const [value, setValue] = useState("")
  const errorIndicate = createRef();
  const context=useContext(Notecontext)
const {PageNavigate}=context
  const Handledocument=(e)=>{
    setdocument(e.target.value)
  }

  const Firstvalue=(e)=>{
    e.target.value.length<=13?setValue(e.target.value):setValue(value)
  }

  const nextStep=()=>{
    value.length===13?PageNavigate('/signup2'):errorIndicate.current.textContent='Enter Valid CNIC Detail'
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
        onChange={Handledocument}
        value={document}
      >
<Stack gap={5} justifyContent='center'  direction="row"  margin='auto' width={'80%'}>
        <FormControlLabel value="CNIC/SCNIC" control={<Radio />} label="CNIC/SCNIC" />
<FormControlLabel value="POC" control={<Radio />} label="POC" />
<FormControlLabel value="S/NICPO" control={<Radio />} label="S/NICPO" />
<FormControlLabel value="PASSPORT" control={<Radio />} label="PASSPORT" />
<Stack position='relative' right={22} top={7} >
<FaArrowRight color='grey' size={20} />
</Stack>
    </Stack>
      </RadioGroup>
      <Stack    align='center' >
      <Box
      component="form"
 
      sx={{
        '& > :not(style)': { m:2,width: '57%' },
      }}
    >
      <TextField  type='number'       onChange={(e) => Firstvalue(e)}
       value={value} 
    sx={{  borderLeft: '5px solid black'}} id="outlined-basic" label={`${document} Number`} variant="outlined" />
      </Box>
  <Typography ref={errorIndicate} color='red' width={'58%'} align='center'></Typography>

      <Box    sx={{
        '& > :not(style)': { m:2,width: '2%',borderRadius:26 },
      }}> 

    <Button    sx={{ backgroundColor: "#052CAC", color: "white", width: 150,'&:hover': {
    backgroundColor: '#052CAC',
  }, }} margin='auto'  variant="contained"><FaArrowRight size={17} onClick={nextStep}/></Button>
      </Box>
      </Stack>
    </FormControl>
    </Stack>
    </>
  )
}
