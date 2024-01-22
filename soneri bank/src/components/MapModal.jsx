import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';import { Button, Link } from "@mui/material";
export const MapModal=({handleClose,open,modalData,dataGeometry,location})=> {
  function distance(lat1, lon1, lat2, lon2) {
    const theta = lon1 - lon2;
    let unit = "Km";
    let dist = Math.sin(deg2rad(lat1)) * Math.sin(deg2rad(lat2)) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.cos(deg2rad(theta));
    dist = Math.acos(dist);
    dist = rad2deg(dist);
    dist = dist * 60 * 1.1515; // in miles
    dist = dist * 1.6; // in Km
 
    if (dist > 0 && dist < 1) {
        dist = dist * 1000;
        unit = "M"; // in meters
    }
 
    return dist.toFixed(2) + unit;
}
 
function deg2rad(deg) {
    return deg * Math.PI / 180.0;
}
 
function rad2deg(rad) {
    return rad * 180.0 / Math.PI;
}
console.log(open)
console.log(dataGeometry)
console.log(location)
//let result=distance(location.latitude,location.longitude , dataGeometry?.coordinates[1], dataGeometry?.coordinates[0])
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 2,
  };

  /*
  const daysplit = modalData.openHours?modalData.openHours.split('\n') :"" ;
  if (daysplit!=="") {
    const breaktimesplit=daysplit[1].split('(')
    daysplit.splice(1, 1,breaktimesplit[0],breaktimesplit[1])
  }
  console.log(daysplit) */
  let content;
      const FinalModal=()=>{
  
      if (modalData.hasOwnProperty("locker")) {
        content=modalData.locker===true?"Locker : Available":"Locker : Not Available"
      }
      else{
        content="24 hrs available"
      }
        return(
          <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
       
  <Typography fontWeight={'bold'} id="modal-modal-title" variant="h6" component="h2">
  
{ modalData.branch?modalData.branch:modalData.name}
  </Typography>
  
  { /*    daysplit === "" ? (
    <Typography fontSize={10} id="modal-modal-title" variant="h6" component="h2">
     Not available
    </Typography>
  ) : (
    daysplit.map((days,index) => (
      <Typography fontSize={10} key={index} id="modal-modal-title" variant="h6" component="h2">
        {days}
      </Typography>
    ))
  )
    */
  <Typography fontSize={10} id="modal-modal-title" variant="h6" component="h2">
{ modalData.openHours?modalData.openHours:modalData.address}
 </Typography>
    }
  <Typography fontSize={12}>
    {modalData.location}
  </Typography>

  <Typography fontSize={10}>

   {open && distance(location.latitude,location.longitude , dataGeometry?.coordinates[1], dataGeometry?.coordinates[0])}
  </Typography>
  <Typography fontSize={12}>

   {content}
  </Typography>
  { 
    open &&
  <Button href={`https://www.google.com/maps/dir/${location.latitude},${location.longitude}/${dataGeometry?.coordinates[1]},${dataGeometry?.coordinates[0]}?entry=ttu`} target='_blank'  sx={{ backgroundColor: "#1A73E8",width:150, color: "black",'&:hover': {
    backgroundColor: '#1A73E8',
  }, }} > Directions
  </Button> }
          </Box>
        </Modal>
        )
      }
 
    return (
      <div>
   <FinalModal />
      </div>
    );
  }
