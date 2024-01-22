import React, { useState, useEffect, memo } from "react";

import { MapWithAMarkerClusterer } from "./MapWithAMarkerCluster";

export const Maps2 =  () => {
  const [markers, setMarkers] = useState([]);
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [location, setLocation] = useState('');

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Update the location state with the position information
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },        (error) => {
          // Handle geolocation error, if any
          console.error('Error getting location:', error.message);
          setLocation({
            error: 'Error getting location. Please enable location services.'
          });
        }

      );
    } else {
      // If Geolocation API is not supported, update the location state accordingly
      setLocation({
        error: 'Geolocation is not supported by this browser.'
      });
    }
  };
  useEffect(() => {
    getLocation();
  }, []);
 
  const urlobj={
    1:{url:"https://soneriqa.cloudasset.com/api/v1/geojson/branches",imgurl:'/sonericluster.png'},
    0:{url:"https://soneriqa.cloudasset.com/api/v1/geojson/atm",imgurl:"/atmcluster.png"}
  }
  const [clusteringseq, setclusteringseq] = useState(1);
  const [ modalData,setModalData] =useState("");
  const [ dataGeometry,setdataGeometry] =useState("");
  useEffect(() => {

   fetch(urlobj[clusteringseq].url)
      .then(res => res.json())
      .then(data => {
        setMarkers(data.features);
      });
  }, [clusteringseq]);

  

  return (
    <>
    <MapWithAMarkerClusterer dataGeometry={dataGeometry} setdataGeometry={setdataGeometry} location={location} clusteringseq={clusteringseq} setclusteringseq={setclusteringseq} modalData={modalData} setModalData={setModalData} open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose} urlobj={urlobj}  markers={markers} />
 
    </>
  );
};



