import Notecontext from "./Notecontext";
import { useState } from "react";
import { useNavigate } from "react-router";

const Notestate = (props) => {
  const [data, setdata] = useState({})
  const dataStore = (data) => {
    setdata((prevUser) => ({ ...prevUser, ...data }));
  };
  let navigate=useNavigate()
  let PageNavigate=(url)=>{
    navigate(url)
  }

  const resetdata=()=>{
    setdata({})
  }

  return (
    <Notecontext.Provider value={{PageNavigate,dataStore,data,resetdata}}>
      {props.children}
    </Notecontext.Provider>
  );
};

export default Notestate;
