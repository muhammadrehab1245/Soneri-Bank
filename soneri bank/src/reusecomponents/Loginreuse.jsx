import styled from "@emotion/styled";
import { Box, IconButton, Stack, Typography } from "@mui/material";

export const Logininput=styled(Box)({
  
    '& > :not(style)': { width: '93%' },
})

export const Iconstack=styled(Stack)({
  direction:'column',
})
export const Iconbtns=styled(IconButton)({
 fontSize:23
})
export const Appimg=styled('img')(({ theme })=>({
    borderRadius:9,width:150,
    [theme.breakpoints.down('md')]: {
        width:110
      },
}))
export const Inputhead=styled(Typography)({
    
    fontSize: 13
 
})


