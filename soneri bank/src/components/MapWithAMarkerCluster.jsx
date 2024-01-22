import React, { useContext } from "react";
import { compose, withProps, withHandlers } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
  import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel';
  import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";
import { BottomNav } from "./BottomNav";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Notecontext from "../context/Notecontext";
import { MapModal } from "./MapModal";
//import { MapModal } from "./MapModal";

export const MapWithAMarkerClusterer = compose(
    withProps({
      
      googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDoOlmYovBjVqFi9lZKcuOt0xMSEb15OYc`,
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100vh` }} />,
      center:{ lat: 24.850225, lng: 67.005712 }
    }),
    withHandlers({
      onMarkerClustererClick: () => (markerClusterer) => {
        const clickedMarkers = markerClusterer.getMarkers();
      },
    }),
    withScriptjs,
    withGoogleMap,
  
  )(({onMarkerClustererClick,dataGeometry ,setdataGeometry,location,setclusteringseq,clusteringseq,modalData,setModalData,open,handleClose,handleOpen,urlobj,markers}) =>
  <>
  
    <GoogleMap 

      defaultZoom={5}
      defaultCenter={{ lat:  location.latitude, lng: location.longitude }}
    >
       <MarkerWithLabel
      position={{ lat: location.latitude, lng: location.longitude}}
      labelAnchor={new google.maps.Point(0, 0)}

    >
      <div></div>
    </MarkerWithLabel>
    <MarkerClusterer 
      onClick={onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={30}
    >
        {markers.map((marker,index) => (
       <div>
          <Marker
            key={index}
          onClick={()=> {
            setModalData(marker.properties)
            setdataGeometry(marker.geometry)
            handleOpen()
          }}
            icon={urlobj[clusteringseq].imgurl}
            position={{ lat: marker.geometry.coordinates[1], lng: marker.geometry.coordinates[0] }}
          />
       
        </div>
        ))}

        <MapModal dataGeometry={dataGeometry} modalData={modalData} location={location} open={open} handleClose={handleClose}/>
        </MarkerClusterer>
    </GoogleMap>
    
    <BottomNav clusteringseq={clusteringseq} setclusteringseq={setclusteringseq} />
   </>
  );
