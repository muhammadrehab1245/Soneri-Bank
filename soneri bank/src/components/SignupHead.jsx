import React, { createRef } from 'react'
import Stack from '@mui/material/Stack';
import { Box, Button, Grid, ImageListItem, Paper, Typography } from '@mui/material';
import { FaArrowLeft ,FaArrowRight } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
export const SignupHead = () => {
  let location = useLocation();
  let mainlocation=location.pathname.slice(1,location.pathname.length-1)
  let routes=[
    {
      signup:['/signup1','/signup2','/signup3','/signup4','/signup5','/signup6']
    },
    {forgotpassword:['/forgotpassword1','/forgotpassword2','/forgotpassword3','/forgotpassword4','/forgotpassword5','/forgotpassword6']},
    {forgotusername:['/forgotusername1','/forgotusername2','/forgotusername3','/forgotusername4']},
  ]


  let filteredRoutes = routes.filter(route => route.hasOwnProperty(mainlocation));
  const Comingroutes=filteredRoutes[0][mainlocation]

  let completedroute=[]
for (let i = 0; i < Comingroutes.length; i++) {
  completedroute.push(Comingroutes[i])
  if (Comingroutes[i]===location.pathname) {
    break;
  }
}

  const ProgressBoxes=styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    position:'relative',
    bottom:35,
    margin:3,
    '& > :not(style)': {
    
      width: 20,
      height: 2,
  }})
console.log(mainlocation)
let Page;
if (mainlocation==='signup') {
  Page='Sign Up'
}
else if(mainlocation==='forgotpassword'){
  Page='Forgot password'
}
else if(mainlocation==='forgotusername'){
  Page='Forgot Username'
}
else{
  Page="Page not found"
}


  let Progressing=Comingroutes.map((route,i)=>{
    return (

      <div key={i}>
 <Grid sx={{   zIndex:-1}} >
       <ProgressBoxes > 
       <Paper    sx={{
               backgroundColor: i+1<=completedroute.length ? '#052CAC' : '',

             }} elevation={0} />  
       </ProgressBoxes>  
     

           </Grid>
           </div>

    )
  })
  return (
    <>
    <Stack   backgroundColor=	'#FAC32C' direction={'row'}>
        <Stack  paddingLeft={2} paddingTop={4} width={'43%'}  direction={'column'}>
        <Stack width={88} alignItems={'center'} >
        <FaArrowLeft size={20} />
        </Stack>
        <Stack>
        <Typography variant="subtitle2" component="h2">
  Back to Login
</Typography>
        </Stack>
        </Stack>
        <Stack width={'50%'}>
<ImageListItem
              sx={{
                width:140
              }}
            >
              <img
                src={
                  "logosoneri-removebg-preview.png"
                }
                alt="Banklogo"
              />
            </ImageListItem>
            </Stack>
</Stack>
<Stack sx={{position:'relative',zIndex:-2}}  backgroundColor=	'#FBCF56' height={'88px'} direction={'row'} >
</Stack>
<Stack sx={{position:'relative',zIndex:-2}} backgroundColor=	'#F8D577' height={'88px'} direction={'row'}>
</Stack>
<Stack  marginTop='14px'>
  <Grid  justifyContent={'center'} container >
    {/*  <Grid  >
       

  <ProgressBoxes > 
  <Paper    sx={{
          backgroundColor: firststep || secondstep || thirdstep || fourstep || fifthstep || laststep ? '#052CAC' : '',

        }} elevation={0} />  
  </ProgressBoxes>  

        
      </Grid>
      <Grid item >

       <ProgressBoxes > 
       <Paper sx={{
          backgroundColor: secondstep || thirdstep || fourstep || fifthstep || laststep ? '#052CAC' : '',

        }}  elevation={0} />  
       </ProgressBoxes>
      </Grid>
      <Grid   item>
   
      <ProgressBoxes > 
      <Paper sx={{
          backgroundColor: thirdstep || fourstep || fifthstep || laststep ? '#052CAC' : '',

        }}  elevation={0} />  
      </ProgressBoxes>    
      </Grid>
      <Grid   item>
  
     <ProgressBoxes > 
     <Paper sx={{
          backgroundColor:   fourstep || fifthstep || laststep ? '#052CAC' : '',

        }}  elevation={0} />  
     </ProgressBoxes>    

      </Grid>
      <Grid  item>
      <ProgressBoxes > 
       <Paper sx={{
          backgroundColor: fifthstep || laststep ? '#052CAC' : '',

        }}  elevation={0} />  
       </ProgressBoxes> 
      </Grid>
      <Grid  item>
      <ProgressBoxes > 
       <Paper sx={{
          backgroundColor: laststep ? '#052CAC' : '',

        }}  elevation={0} />  
       </ProgressBoxes> 
       </Grid>
       */
       Progressing   }
  
  </Grid>
  <Box
      sx={{
        width:'100%',
        display: 'flex',
        flexWrap: 'wrap',
        position:'absolute',
        top:142,
        justifyContent:'center',
        zIndex:-1,
        
        '& > :not(style)': {
          m: 1,
          width: 250,
          height: 130,
          borderRadius: '150px 150px 0 0',
  
        },
      }}
    >
      <Grid  sx={{background:'#FBBB1C',boxShadow:' 0px 58px 90px 10px #FAC32C'}} elevation={0} />
    </Box>
<Stack align='center'>
<Typography  variant='h6' component='h2'>{Page}</Typography>
</Stack>

</Stack>


</>
  )
}
