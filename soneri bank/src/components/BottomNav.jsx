import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
export const BottomNav=({setclusteringseq,clusteringseq})=>{
    return (
      <Box sx={{ width: '100%',position:'absolute',bottom:0}}>
      <BottomNavigation
        showLabels
        value={clusteringseq}
        onChange={(event,newChoice) => {
          setclusteringseq(newChoice);
        }}
      >
        <BottomNavigationAction  label="ATM" id="ATM"  />
        <BottomNavigationAction  label="Branches" id="Branches"   />
      </BottomNavigation>
    </Box>
    )
  }