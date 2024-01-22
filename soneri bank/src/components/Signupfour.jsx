import React, { createRef, useContext, useState } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import FormControl from '@mui/material/FormControl';
import OTPInput, { ResendOTP } from "otp-input-react";
import Notecontext from '../context/Notecontext';

export const Signupfour = () => {
  const context=useContext(Notecontext)
  const {PageNavigate,dataStore,data,t}=context
  const errorIndicate = createRef();
  const [OTP, setOTP] = useState(data.otp!==undefined?data.otp:"");
  let email = 'rehab123335@gmail.com', ph = '923312643625'
  const renderButton = (buttonProps) => {
    return <button style={{backgroundColor:'transparent',border:'none'}} {...buttonProps}>{t('resend')}</button>;
  };
  const renderTime = (remainingTime) => {
    return <span style={{fontSize:'10px'}}>{remainingTime} {t('secrem')}</span>;
  };
  const nextStep=async()=>{
   if (OTP.length===4){
  //  const sessionID =document.cookie.split(';'). find( row =>row.startsWith('JSESSIONID')).split('=')[1];

   dataStore({otp:OTP})
 /* const response = await fetch(`http://192.168.100.184:8080/OtpConfirmation/${OTP}`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        credentials:"include",
    },
    body:JSON.stringify({otp:OTP})

});
console.log(response.status) */
  PageNavigate('/header/signup5')}
  else{

    errorIndicate.current.textContent='Enter Valid OTP Code'
  } 
  }
  
  const PrevStep=()=>{
    PageNavigate('/header/signup3')
  }
  return (
    <Stack align='center'>
    <Typography position={'relative'} bottom={134} color={'white'}>{t('smsotp')}</Typography>
      <Typography variant='caption' component="h2">{t('otpdes')}</Typography>
      <Typography marginBottom={3} variant='h6' component="h2">{email.slice(0, 1)}{'*'.repeat(email.search("@") - 3)}{email.slice(email.search("@") - 1)}/{ph.slice(0, 4)}{'*'.repeat(ph.length - 6)}{ph.slice(ph.length - 2)}</Typography>

      <FormControl >
          <Stack   width='100%'  gap={5} alignItems={'center'} direction="column" margin='auto' >
      <OTPInput name='otp'  value={OTP}
      onChange={setOTP} style={{color:'silver'}} autoFocus OTPLength={4} inputStyles={{backgroundColor:'#D3D3D3',borderRadius:'12px',padding:'10px'}} otpType="number" disabled={false} />
      <ResendOTP style={{display:'flex',flexDirection:'column-reverse'}}  renderButton={renderButton} renderTime={renderTime} onResendClick={() => console.log("Resend clicked")} />
          </Stack>
          <Typography ref={errorIndicate} color='red'  width={'100%'} align='center'></Typography>
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
