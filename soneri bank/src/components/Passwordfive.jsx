import React, { useContext, useState } from 'react'
import { useFormik } from "formik";
import { Box, Button,  IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material';
import { FaArrowLeft ,FaArrowRight } from "react-icons/fa6";
import FormControl from '@mui/material/FormControl';
import { MdOutlineVisibility,MdOutlineVisibilityOff  } from "react-icons/md";
import { PasswordSchema } from '../Validation/validationsignup';
import Notecontext from '../context/Notecontext';
export const Passwordfive = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setshowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setshowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const context=useContext(Notecontext)
  const {PageNavigate,dataStore,data}=context
  const initialValues={
      password: data.password!==undefined?data.password:"",
      cPassword: data.cPassword!==undefined?data.cPassword:""
  }

  const formik =useFormik({
    initialValues: initialValues,
    validationSchema: PasswordSchema,
   onSubmit: async (values) => {
    dataStore({password:values.password,cPassword:values.cPassword})
    PageNavigate('/signup6')
  }
  })
  const PrevStep=()=>{
    PageNavigate('/signup4')
  }
  return (
    <>
    <Stack align='center'>

    <Typography variant='caption' component="h2">Firstly, we need to verify your legal Id. Select which document you want to use.</Typography>

<form onSubmit={formik.handleSubmit}>

      <Stack  alignItems='center'  >

      <FormControl sx={{ m: 1, width: '48%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
          name='password'
          id='password'
          sx={{  borderLeft: '5px solid black'}}
          onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.password}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <MdOutlineVisibilityOff  /> : <MdOutlineVisibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
                     {formik.errors.password && formik.touched.password ? (
                      <Typography color='orange'  textAlign={'center'} fontSize='xs'>{formik.errors.password}</Typography>
                    ) : null}
        </FormControl>
      <FormControl sx={{ m: 1, width: '48%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Confirm password</InputLabel>
          <OutlinedInput
          sx={{  borderLeft: '5px solid black'}}
          name='cPassword'
          id='cPassword'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cPassword}
            type={showConfirmPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <MdOutlineVisibilityOff  /> : <MdOutlineVisibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm password"
          />
           {formik.errors.cPassword && formik.touched.cPassword ? (
                      <Typography color='orange'  textAlign={'center'} fontSize='xs'>{formik.errors.cPassword}</Typography>
                    ) : null}
        </FormControl>

      </Stack>
      <Stack  justifyContent={'center'} direction='row'>
      <Box    sx={{
        '& > :not(style)': { m:2,width: '2%',borderRadius:26 },
      }}> 
    <Button  onClick={PrevStep}  sx={{ backgroundColor: "#052CAC", color: "white", width: 150,'&:hover': {
    backgroundColor: '#052CAC',
  }, }} margin='auto'  variant="contained"><FaArrowLeft size={17}/></Button>
      </Box>
      <Box    sx={{
        '& > :not(style)': { m:2,width: '2%',borderRadius:26 },
      }}> 

    <Button  type='submit' disabled={formik.values.password.trim().length === 0 && formik.values.cPassword.trim().length === 0} sx={{ backgroundColor: "#052CAC", color: "white", width: 150,'&:hover': {
    backgroundColor: '#052CAC',
  }, }} margin='auto'  variant="contained"><FaArrowRight size={17}/></Button>
      </Box>
      </Stack>
    </form>
    </Stack>
    </>
  )
}