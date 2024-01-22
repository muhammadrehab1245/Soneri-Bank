

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { useEffect } from 'react';
import { useState } from 'react';

export const Slide = (props) => {
  
    const [sliderval, setsliderval] = useState(0)
  
    const CustomSlider = styled(Slider)(({ theme }) => ({
        '& .MuiSlider-thumb': {
          background: `white !important`,
          marginTop: '2px',
          marginLeft:'9.8vw',
          cursor: 'grab',
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          borderRadius: 50,
     //     height: '-webkit-fill-available',
          width: '50%',
          height: 560,
          zIndex: 1,
          height: '100% !important',
          pointerEvents: 'all',
          top: '38px',
        },
        '& .MuiSlider-rail': {
          height: 68,
          opacity: 1,
          top: '40px',
          color:'#052CAC',
          borderRadius: 50,
          zIndex:-2,
          width:'100%'
        },
      }));
   useEffect(() => {
 
       let classe=document.querySelector('.MuiSlider-thumb')
       if (sliderval===1) {
        classe.style.borderRadius='2px solid green'
        classe.style.marginLeft='-170px'
       }
       else{
        classe.style.borderRadius='2px solid yellow'
       }
    
   })
   const handle=(e)=>{
    setsliderval(e.target.value)
  }
    return (
        <Box sx={{width:500}}>
     
        <CustomSlider
          defaultValue={sliderval}
          step={1}
          max={1}
          sx={{ height: '26px',color:'#052CAC' }}
          onChange={handle}
        />
          
    </Box>

    )
}


