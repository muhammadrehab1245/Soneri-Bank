import { Box, Button, IconButton, ImageListItem, InputAdornment, Link, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
import React, {  useContext, useState } from 'react'
import '../styling/translatepage.css'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { SiFuturelearn } from "react-icons/si";
import { FaArrowRight, FaLocationDot } from "react-icons/fa6";
import { TiSupport } from "react-icons/ti";
import { Link as Routerlink } from "react-router-dom";
import { Appimg, Iconbtns, Iconstack, Inputhead, Logininput } from '../reusecomponents/Loginreuse';
import { Slide } from './Slide';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Notecontext from '../context/Notecontext';
import i18n from '../inextintegrate/i8n';
export const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }; 
  const loginmainpic = {

    backgroundImage: { xs: 'none', md: 'url("/loginmain.jpg")' },
    backgroundRepeat: { xs: 'none', md: "no-repeat" },
    backgroundPosition: { xs: 'none', md: 'center' },
    backgroundSize: { xs: 'none', md: 'cover' },
    height: { xs: '0', md: '100vh' },
    width: { xs: '100%', md: '38%' }
  };

const context=useContext(Notecontext)
const {locale,setLocale,langobj,langchange,t}=context


  return (
    <>
      <div>
<button disabled={i18n.language==='en'} onClick={langchange} id='en' className="cn">{t('English')}</button>
<button disabled={i18n.language==='ur'} onClick={langchange} id='ur' className="cn">{t('Urdu')}</button>
<button disabled={i18n.language==='ar'} onClick={langchange} id='ar' className="cn">{t('Arabic')}</button>
</div>
    <Stack direction={{ xs: 'column', md: 'row' }}>
      <Stack width={{ xs: '100%', md: '62%' }}>
        <Stack   width={{xs:'70%',md:580}} margin={'auto'}  >
          <Stack    >
            <ImageListItem

              sx={{
                width: {xs:'63%',md:223}
              }}
            >
              <img
                src={
                  "sonerilogo.jpg"
                }
                alt="Banklogo"
              />
            </ImageListItem>
          </Stack>
          <Stack >
            <Typography fontWeight='bold' variant='h6' component='h2'>{t('loginmain')}</Typography>
            <Typography variant='caption' component='h2'>{t('welcomelogin')}</Typography>
          </Stack>
          <Stack gap={2} marginTop={3}>

            <Logininput>
              <Inputhead  >{t('uname')}</Inputhead>

              <TextField autoComplete="off" InputProps={{ sx: { borderRadius: 3 } }}
                placeholder={t('uname')} id="username" name='username'
                variant="outlined" />
            </Logininput>


            <Logininput >
              <Inputhead   >{t('pass')}</Inputhead>
              <OutlinedInput
                name='password'
                autoComplete="off"
                id='password'
                sx={{ borderRadius: 3 }}
                placeholder={t('pass')}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <MdOutlineVisibilityOff color='blue' /> : <MdOutlineVisibility color='blue' />}
                    </IconButton>
                  </InputAdornment>
                }

              />


            </Logininput>
            <Stack width={'93%'} alignItems={{xs:'start',md:'end'}}>
              <Routerlink style={{ textDecoration: 'none' }} underline="hover" to="/header/signup1">
                <Link underline="hover"  ><Typography color='#335DF6' variant='caption' component='h2'>
                {t('forgot')}
                </Typography></Link>
              </Routerlink>
            </Stack>
          </Stack>
          <Stack >
            <Box
              sx={{
                '& > :not(style)': {
                  m: 1,
                  width: '90%',
                  height: 46,
                  borderRadius: 57,
                },
              }}
            >
           <Paper sx={{ backgroundColor: '#052CAC', height: 24 }}   >

           <Button  variant='contained' sx={{ position: 'relative', top: 3, left: 3, backgroundColor: 'white', color: '#052CAC', height: 40, width: '80%', borderRadius: 37, '&:hover': { backgroundColor: 'white' } }}><span style={{fontSize:13}}>   {t('drag')} </span>  <FaArrowRight color='grey' size={20} />
                </Button> 
              </Paper>
{/* <Slide/> */}
            </Box>
          </Stack>
          <Stack  width={'93%'} gap={1} position='relative' top={28} justifyContent='end' direction={'row'}>
            <Stack>
              <Typography variant='caption' component='h2'>{t('notaccount')}</Typography>
            </Stack>
            <Stack>
              <Routerlink style={{ textDecoration: 'none' }} underline="hover" to="/header/signup1">
                <Link underline="hover"  ><Typography color='#335DF6' variant='caption' component='h2'>
                {t('signup')}
                </Typography></Link>
              </Routerlink>
            </Stack>
          </Stack>
          <Stack marginTop={6} color={'blue'} gap={5} justifyContent='center' direction={'row'}>
            <Iconstack>
              <Iconbtns >
                <SiFuturelearn color='blue' />
              </Iconbtns>
              <Inputhead >{t('learn')}</Inputhead>
            </Iconstack>
            <Iconstack>
              <Iconbtns>
                <FaLocationDot color='blue' />
              </Iconbtns>
              <Inputhead>{t('locator')}</Inputhead>
            </Iconstack>
            <Iconstack>
              <Iconbtns  >
                <TiSupport color='blue' />
              </Iconbtns>
              <Inputhead>{t('support')}</Inputhead>
            </Iconstack>
          </Stack>
        </Stack>
          <Stack position='relative' top={{xs:67,md:0}} alignItems={'center'} direction={'row'} justifyContent={'space-between'}>

            <Typography fontSize={14} fontWeight={800}>{t('version')}</Typography>
      
            <Stack alignItems={'center'} direction={'row'}>
            <Typography  fontSize={12}>{t('powered')} </Typography>
            <Stack>
                    <ImageListItem >
                <img
                sx={{width:20}}
                  src={ "/p3.png"}
                  alt="P3"
                />
              </ImageListItem>
              </Stack>
            </Stack>
          </Stack>
         
      </Stack>
      <Stack   sx={loginmainpic}>
        <Stack     position='relative' bottom={{xs:46,md:26}} height='100%' justifyContent='end' alignItems={{xs:'center',md:'center'}}>
          <Stack>
            <Typography display={{ xs: 'none', md: 'block' }} color='#335DF6' fontSize={38}>
              <span style={{ color: '#052CAC', fontWeight: 'bolder' }}>{t('bey')}</span><span >{t('bank')}</span>
            </Typography>
          </Stack>
          <Stack  gap={1} direction='row'>
            <Link target='_blank' href='https://play.google.com/store/apps/details?id=com.p3.soneridigital'>
              <ImageListItem
              >
                <Appimg
                  src={

                    "/googleapp.png"
                  }
                  alt="Banklogo"
                />
              </ImageListItem>
            </Link>
            <Link target='_blank' href='https://apps.apple.com/pk/app/soneri-digital/id1575323634'>
              <ImageListItem

        
              >

                <Appimg
                  src={
                    "/iosapp.png"
                  }
                  alt="Banklogo"
                />

              </ImageListItem>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
    </>
  )
}
