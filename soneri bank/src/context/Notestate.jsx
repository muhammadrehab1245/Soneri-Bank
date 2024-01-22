import Notecontext from "./Notecontext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import i18n from "../inextintegrate/i8n";
import { useTranslation } from "react-i18next";

const Notestate = (props) => {
  const {t}=useTranslation()
  let langobj={
    'en':'ltr',
    "ar":'rtl',
    "ur":'rtl'
}

let documentlang={
  "CNIC/SCNIC":t('cnic'),
  "POC":t('poc'),
  "S/NICPO":t('nicpo'),
  "PASSPORT":t('passport')
}
 

  let ipaddress="172.20.10.2"
  const [data, setdata] = useState({})
 // const [modalData, setModalData] = useState(null);
  const [locale, setLocale] = useState(i18n.language)
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

  i18n.on('languageChanged',(lang)=>setLocale(i18n.language))



  const langchange=(event)=>{
     // location.reload();
           i18n.changeLanguage(event.target.id)
  }

 /* useEffect(() => {
    document.body.dir=langobj[i18n.language]
    }, [langobj[i18n.language]]) */
  return (
    <Notecontext.Provider value={{PageNavigate,dataStore,data,resetdata,ipaddress,locale, setLocale,t,langobj,langchange,documentlang}}>
      {props.children}
    </Notecontext.Provider>
  );
};

export default Notestate;
