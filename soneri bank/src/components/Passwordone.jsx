import React, { createRef, useContext, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { FaArrowRight } from "react-icons/fa6";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Notecontext from '../context/Notecontext';

export const Passwordone = () => {

  const errorIndicate = createRef();
  const context = useContext(Notecontext)
  const { PageNavigate, dataStore, data,t,documentlang } = context
  const [document, setdocument] = useState(data.idtype !== undefined ? data.idtype : 'CNIC/SCNIC')
  const [value, setValue] = useState(data.idnum !== undefined ? data.idnum : 'CNIC/SCNIC')
  const Handledocument = (e) => {
    setdocument(e.target.value)
  }

  const Firstvalue = (e) => {
    e.target.value.length <= 13 ? setValue(e.target.value) : setValue(value)
  }


  const nextStep = () => {
    if (value.length === 13) {
      dataStore({ idnum: value, idtype: document })
      PageNavigate('/header/forgotpassword2')
    }
    else {
      errorIndicate.current.textContent = 'Enter Valid CNIC Detail'
    }
  }


  return (
    <>
      <Stack align='center'>
      <Typography position={'relative'} bottom={134} color={'white'}>{t('legalid')}</Typography>

<Typography variant='caption' component="h2">{t('verid')}</Typography>

        <FormControl >
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={Handledocument}
            value={document}
          >
            <Stack gap={5} justifyContent='center' direction="row" margin='auto' width={'80%'}>
              <FormControlLabel value="CNIC/SCNIC" control={<Radio />} label={t('cnic')} />
              <FormControlLabel value="POC" control={<Radio />} label={t('poc')} />
              <FormControlLabel value="S/NICPO" control={<Radio />} label={t('nicpo')} />
              <FormControlLabel value="PASSPORT" control={<Radio />} label={t('passport')} />
              <Stack position='relative' right={22} top={7} >
                <FaArrowRight color='grey' size={20} />
              </Stack>
            </Stack>
          </RadioGroup>
          <Stack align='center' >
            <Box
              component="form"

              sx={{
                '& > :not(style)': { m: 2, width: '57%' },
              }}
            >
              <TextField type='number' onChange={(e) => Firstvalue(e)}
                value={value}
                sx={{ borderLeft: '5px solid black' }} id="outlined-basic"  placeholder={`${documentlang[document]} ${t('number')}`} variant="outlined" />
            </Box>
            <Typography ref={errorIndicate} color='red' width={'58%'} align='center'></Typography>

            <Box sx={{
              '& > :not(style)': { m: 2, width: '2%', borderRadius: 26 },
            }}>

              <Button sx={{
                backgroundColor: "#052CAC", color: "white", width: 150, '&:hover': {
                  backgroundColor: '#052CAC',
                },
              }} margin='auto' variant="contained"><FaArrowRight size={17} onClick={nextStep} /></Button>
            </Box>
          </Stack>
        </FormControl>
      </Stack>
    </>
  )
}
