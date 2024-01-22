/*import React, { useState } from 'react'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption,
	ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import {createRoot} from 'react-dom/client';
import {APIProvider, AdvancedMarker, InfoWindow, Map, Marker, Pin} from '@vis.gl/react-google-maps';
export const Maps = () => {
    const position = {lat: 24.9117331, lng: 67.0299691};
    const [open, setopen] = useState(false)
  return (
    <APIProvider apiKey={"AIzaSyChyF1EhnKny_-euEVHwdm4dybHnP-yr7g"}>
        <div style={{height:'100vh',width:'100%'}}>

    <Map
      zoom={3}
      center={position}
  //    gestureHandling={'greedy'}
   //   disableDefaultUI={true}
    mapId='736b90e392ed9eb2'  >
        <AdvancedMarker position={position} onClick={()=>setopen(true)}>
            <Pin
            background={'blue'}
            glyphColor={'yellow'} borderColor={'red'}
            />
        </AdvancedMarker>
        {
            open && (
                <InfoWindow position={position} onCloseClick={()=>setopen(false)}>
                You can drag and drop me.
              </InfoWindow>
            )
        }
      </Map>
      </div>
  </APIProvider>
  )
} */
