import React, { useContext } from 'react'
import Stack from '@mui/material/Stack';
import { Box, Grid, ImageListItem, Paper, Typography } from '@mui/material';
import { FaArrowLeft , } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Notecontext from '../context/Notecontext';
export const Headerlayout = () => {
  let location = useLocation();
  let mainlocation=location.pathname.slice(8,location.pathname.length-1)
  const context = useContext(Notecontext)
  const { t} = context
  let mainheader={
    signup:t('signup'),
    forgotpassword:t('forgotpassword'),
    forgotusername:t('forgotusername'),
  }
  let routes=[
    {
      signup:['/header/signup1','/header/signup2','/header/signup3','/header/signup4','/header/signup5','/header/signup6']
    },
    {forgotpassword:['/header/forgotpassword1','/header/forgotpassword2','/header/forgotpassword3','/header/forgotpassword4','/header/forgotpassword5','/header/forgotpassword6']},
    {forgotusername:['/header/forgotusername1','/header/forgotusername2','/header/forgotusername3','/header/forgotusername4']},
  ]


  let filteredRoutes = routes.filter(route => route.hasOwnProperty(mainlocation));
  console.log(filteredRoutes)
  const Comingroutes= filteredRoutes.length!==0?filteredRoutes[0][mainlocation]:[]

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


  console.log(mainheader[mainlocation])

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
        {t('loginback')}
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
                  "/logosoneri-removebg-preview.png"
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
    {Progressing}
  
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
      <Paper  sx={{background:'#FBBB1C',boxShadow:' 0px 58px 90px 10px #FAC32C'}} elevation={0}/>

    </Box>
<Stack align='center'>
<Typography  variant='h6' component='h2'>{mainheader[mainlocation]!==undefined?mainheader[mainlocation]:"Page Found"}</Typography>

</Stack>

</Stack>


</>
  )
}
