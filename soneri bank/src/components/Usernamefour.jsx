import React, { useContext, useState } from 'react'
import { useFormik } from "formik";
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { FaArrowLeft ,FaArrowRight } from "react-icons/fa6";
import { UsernameSchema } from '../Validation/validationsignup';
import Notecontext from '../context/Notecontext';
export const Usernamefour = () => {
  const context=useContext(Notecontext)
  const {PageNavigate,dataStore,data}=context

  const initialValues={
    username:data.username!==undefined?data.username:"",
      cUsername: data.cUsername!==undefined?data.cUsername:""
  }
  const formik =useFormik({
    initialValues: initialValues,
    validationSchema: UsernameSchema,
   onSubmit: async (values) => {
    dataStore({username:values.username,cUsername:values.cUsername})
    PageNavigate('/signup5')
  }
  })
  
  const PrevStep=()=>{
    PageNavigate('/signup3')
  }
  return (
    <>
    <Stack align='center'>

    <Typography variant='caption' component="h2">Firstly, we need to verify your legal Id. Select which document you want to use.</Typography>

<form onSubmit={formik.handleSubmit}>

      <Stack    align='center' >
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m:2,width: '48%' },
      }}
    >
      <TextField  id="username" name='username' onChange={formik.handleChange}
               onBlur={formik.handleBlur}
                value={formik.values.username}  sx={{  borderLeft: '5px solid black'}}  label="Username" variant="outlined" />
   {formik.errors.username && formik.touched.username ? (
                      <Typography color='orange'  textAlign={'center'} fontSize='xs'>{formik.errors.username}</Typography>
                    ) : null}
      </Box>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m:2,width: '48%' },
      }}
    >
      <TextField  name='cUsername' onChange={formik.handleChange}
               onBlur={formik.handleBlur}
                value={formik.values.cUsername} sx={{  borderLeft: '5px solid black'}}  id="cUsername" label="Confirm Username" variant="outlined" />
  
  {formik.errors.cUsername && formik.touched.cUsername ? (
                      <Typography color='orange'  textAlign={'center'} fontSize='xs'>{formik.errors.cUsername}</Typography>
                    ) : null}
      </Box>
      </Stack>
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

    <Button  type='submit' disabled={formik.values.cUsername.trim().length === 0 && formik.values.username.trim().length === 0}  sx={{ backgroundColor: "#052CAC", color: "white", width: 150,'&:hover': {
    backgroundColor: '#052CAC',
  }, }} margin='auto'  variant="contained"><FaArrowRight size={17}/></Button>
      </Box>
      </Stack>
    </form>
    </Stack>
    </>
  )
}
