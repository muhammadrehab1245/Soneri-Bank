import React, { createRef, useContext, useState } from 'react'
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import FormControl from '@mui/material/FormControl';
import OTPInput, { ResendOTP } from "otp-input-react";
import Notecontext from '../context/Notecontext';

export const Signupthree = () => {
  const context=useContext(Notecontext)
  const {PageNavigate,dataStore,data}=context
  const errorIndicate = createRef();
  const [OTP, setOTP] = useState(data.otp!==undefined?data.otp:"");
  let email = 'rehab123335@gmail.com', ph = '923312643625'
  const renderButton = (buttonProps) => {
    return <button style={{backgroundColor:'transparent',border:'none'}} {...buttonProps}>Resend</button>;
  };
  const renderTime = (remainingTime) => {
    return <span>{remainingTime} seconds remaining</span>;
  };

  console.log(OTP)
  const nextStep=()=>{
   if (OTP.length===4){
    dataStore({otp:OTP})
  PageNavigate('/signup4')}
  else{

    errorIndicate.current.textContent='Enter Valid OTP Code'
  } 
  }
  
  const PrevStep=()=>{
    PageNavigate('/signup2')
  }
  return (
    <Stack align='center'>

      <Typography variant='caption' component="h2">Firstly, we need to verify your legal Id. Select which document you want to use.</Typography>
      <Typography variant='h6' component="h2">{email.slice(0, 1)}{'*'.repeat(email.search("@") - 3)}{email.slice(email.search("@") - 1)}/{ph.slice(0, 4)}{'*'.repeat(ph.length - 6)}{ph.slice(ph.length - 2)}</Typography>

      <FormControl >
  
          <Stack gap={5} justifyContent='center' direction="column" margin='auto' width={'18%'}>
      <OTPInput  value={OTP}
      onChange={setOTP} style={{color:'silver'}} autoFocus OTPLength={4} otpType="number" disabled={false} />
      <ResendOTP  renderButton={renderButton} renderTime={renderTime} onResendClick={() => console.log("Resend clicked")} />
          </Stack>
          <Typography ref={errorIndicate} color='red' width={'69%'} align='center'></Typography>
          <Stack  justifyContent={'center'} direction='row'>
      <Box    sx={{
        '& > :not(style)': { m:2,width: '2%',borderRadius:26 },
      }}> 
    <Button onClick={PrevStep}    sx={{ backgroundColor: "#052CAC", color: "white", width: 150,'&:hover': {
    backgroundColor: '#052CAC',
  }, }} margin='auto'  variant="contained"><FaArrowLeft size={17}/></Button>
      </Box>
      <Box    sx={{
        '& > :not(style)': { m:2,width: '2%',borderRadius:26 },
      }}> 

    <Button  onClick={nextStep}  sx={{ backgroundColor: "#052CAC", color: "white", width: 150,'&:hover': {
    backgroundColor: '#052CAC',
  }, }} margin='auto'  variant="contained"><FaArrowRight size={17}/></Button>
      </Box>
      </Stack>
      </FormControl>
    </Stack>
  )
}
