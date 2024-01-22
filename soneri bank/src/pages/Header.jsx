import React from 'react'
import { Outlet} from 'react-router-dom';
import { Headerlayout } from '../components/Headerlayout';
export const Header = () => {
 
  return (
    <>
    
<Headerlayout/>
<Outlet/>


</>
  )
}
