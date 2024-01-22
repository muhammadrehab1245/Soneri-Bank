import React, { useContext } from 'react'
import '../styling/translatepage.css'
import { useTranslation } from "react-i18next";
import Notecontext from '../context/Notecontext';
import i18n from '../inextintegrate/i8n';
import { useEffect } from 'react';
export const Translation = () => {
    let langobj={
        'en':'ltr',
        "ar":'rtl',
        "ur":'rtl'
    }
    const context=useContext(Notecontext)
    const {locale,setLocale}=context
    i18n.on('languageChanged',(lang)=>setLocale(i18n.language))

    const {t}=useTranslation()

    const langchange=(event)=>{
       // location.reload();
             i18n.changeLanguage(event.target.id)
    }
    useEffect(() => {
    document.body.dir=langobj[i18n.language]
    }, )
    return (
        <div className="main">
            <div className="navbar">
                <div className="icon">
                    <h2 className="logo"> {t('praroz')}  </h2>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <a href="#">{t('home')}</a>
                        </li>
                        <li>
                            <a href="#">{t('about')}</a>
                        </li>
                        <li>
                            <a href="#">{t('service')}</a>
                        </li>
                        <li>
                            <a href="#">{t('design')}</a>
                        </li>
                        <li>
                            <a href="#">{t('contact')}</a>
                        </li>
                    </ul>
                </div>
                <div className="search">
                    <input
                        className="srch"
                        type="search"
                        name="search"
                        placeholder={t('typing')} 
                    />
                    <a href="#">
                        {" "}
                        <button className="btn">{t('search')}</button>
                    </a>
                </div>
            </div>
            <div className="content">
                <h1>
                {t('webdesign')}   <br />
                    <span>{t('webdev')}</span> <br />
                    {t('course')} 
                </h1>
                <p className="par">
                {t('p1')}
                </p>
                <button className="cn">
                    <a href="#">{t('joinus')}</a>
                </button>
                <div>

                    <button disabled={i18n.language==='en'} onClick={langchange} id='en' className="cn">{t('English')}</button>
                    <button disabled={i18n.language==='ur'} onClick={langchange} id='ur' className="cn">{t('Urdu')}</button>
                    <button disabled={i18n.language==='ar'} onClick={langchange} id='ar' className="cn">{t('Arabic')}</button>
                </div>
                <div style={{marginTop:'20px'}}>
                  <p>
                  {t('p2')}
                    </p>  
                    <p style={{marginTop:'30px'}}>
                    {t('hcontent')}
                    </p>
                </div>
                <div className="form">
                    <h2>        {t('loginh')} </h2>
                    <input type="email" name="email" placeholder={t('email')} />
                    <input type="password" name="" placeholder={t('password')} />
                    <button className="btnn">
                        <a href="#">{t('login')}</a>
                    </button>
                    <p className="link">
                    {t('notaccount')} 
                        <br />
                        <a href="#">    {t('signup')} </a>      {t('here')}
                    </p>
                    <div className="icons">
                        <a href="#">
                            <ion-icon name="logo-facebook" />
                        </a>
                        <a href="#">
                            <ion-icon name="logo-instagram" />
                        </a>
                        <a href="#">
                            <ion-icon name="logo-twitter" />
                        </a>
                        <a href="#">
                            <ion-icon name="logo-google" />
                        </a>
                        <a href="#">
                            <ion-icon name="logo-skype" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}
