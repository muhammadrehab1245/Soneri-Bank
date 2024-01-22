import React, { useContext, useState } from 'react'
import { Box, Button,  IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import { FaArrowLeft ,FaArrowRight } from "react-icons/fa6";
import FormControl from '@mui/material/FormControl';
import { MdOutlineVisibility,MdOutlineVisibilityOff  } from "react-icons/md";
import { PinSchema } from '../Validation/validationsignup';
import { useFormik } from 'formik';
import Notecontext from '../context/Notecontext';
export const Signupsix = () => {
    const [showPin, setshowPin] = useState(false);
    const [showConfirmPin, setshowConfirmPin] = useState(false);

  const handleClickShowPin = () => setshowPin((show) => !show);
  const handleClickShowConfirmPin = () => setshowConfirmPin((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const context=useContext(Notecontext)
  const {PageNavigate,dataStore,data,resetdata,t}=context

  const initialValues={
    pin: data.pin!==undefined?data.pin:"",
    cPin: data.cPin!==undefined?data.cPin:""
}

const formik =useFormik({
  initialValues: initialValues,
  validationSchema: PinSchema,
 onSubmit: async (values) => {
  dataStore({password:values.pin,cPassword:values.cPin})
  console.log(data)
  resetdata()
  PageNavigate('/header/signup1')
  
}
})

const PrevStep=()=>{
  PageNavigate('/header/signup5')
}

  return (
    <>
    <Stack align='center'>
    <Typography position={'relative'} bottom={134} color={'white'}>{t('credentials')}</Typography>
    <Typography variant='caption' component="h2">{t('pindes')}</Typography>

<form onSubmit={formik.handleSubmit} >

      <Stack  alignItems='center'  >

      <FormControl sx={{ m: 1, width: '48%' }} variant="outlined">

          <OutlinedInput
          sx={{  borderLeft: '5px solid black'}}
            id="pin"
            name='pin'
            placeholder={t('pin')}
            onBlur={formik.handleBlur}
            value={formik.values.pin}
            onChange={formik.handleChange}
            type={showPin ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPin}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                
                >
                  {showPin ? <MdOutlineVisibilityOff  /> : <MdOutlineVisibility />}
                </IconButton>
              </InputAdornment>
            }
     
          />
            {formik.errors.pin && formik.touched.pin ? (
                      <Typography color='orange'  textAlign={'center'} fontSize='xs'>{formik.errors.pin}</Typography>
                    ) : null}
        </FormControl>
      <FormControl sx={{ m: 1, width: '48%' }} variant="outlined">
          <InputLabel htmlFor="Cpin"></InputLabel>
          <OutlinedInput
                
          sx={{  borderLeft: '5px solid black'}}
          id="Cpin"
          name='cPin'
          placeholder={t('cpin')}
            type={showConfirmPin ? 'text' : 'password'}
            onBlur={formik.handleBlur}
            value={formik.values.cPin}
            onChange={formik.handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPin}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showConfirmPin ? <MdOutlineVisibilityOff  /> : <MdOutlineVisibility />}
                </IconButton>
              </InputAdornment>
            }
    
          />
               {formik.errors.cPin && formik.touched.cPin ? (
                      <Typography color='orange'  textAlign={'center'} fontSize='xs'>{formik.errors.cPin}</Typography>
                    ) : null}
        </FormControl>

      </Stack>
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

    <Button  type='submit'  sx={{ backgroundColor: "#052CAC", color: "white", width: 150,'&:hover': {
    backgroundColor: '#052CAC',
  }, }} margin='auto'  variant="contained"><FaArrowRight size={17}/></Button>
      </Box>
      </Stack>
    </form>
    </Stack>
    </>
  )
}
