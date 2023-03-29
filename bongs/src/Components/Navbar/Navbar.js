import React, { useContext, useState } from 'react'
import styles from './Navbar.module.css'
import image from '../../images/bongs_logo.png' 
import {Grid} from '@mui/material'
import BaseProvider from '../../Context/BaseContext.js';
import MenuIcon from '@mui/icons-material/Menu';
import ReactGA from 'react-ga4';
import styles2 from "../SectionHeading/SectionHeading.module.css"
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function Navbar(content) {
  const [langMenu, setLangMenu] = useState(false);
  const base_ctx = useContext(BaseProvider);
  const [open, setOpen] = useState(false);
  const width = base_ctx.screenWidth;
  let language = base_ctx.countryCode;
  let language2 = null;
  let language3 = null;
  let language4 = null;

  function changeLanguage(country) {
    language = country;
    base_ctx.setLanguage(country)
    setLangMenu(!langMenu)
  }

  if (language === 'PL'){
    language2 = 'EN'
    language3 = 'SE'
    language4 = 'DE'
  }
  else if (language === 'EN'){
    language2 = 'PL'
    language3 = 'SE'
    language4 = 'DE'
  }
  else if (language === 'SE'){
    language4 = 'DE'
    language2 = 'EN'
    language3 = 'PL'
  }
  else if (language === 'DE'){
    language3 = 'SE'
    language2 = 'EN'
    language4 = 'PL'
  }

  function GoogleAnalitics() {
    ReactGA.event({
      action: 'Navbar-click',
      category: 'contact-category',
      label: 'contact',
      value: 'xxxx'
    })
  }

  function WindowScroll(position, phone) {
    if(phone === true){
      setOpen(!open)
      window.scrollTo(0, position)
    }
    else{
      window.scrollTo(0, position)
    }
    GoogleAnalitics()
  }
  return (
    <Grid container sx={{position: width < 450? 'sticky': 'static', top: '0', zIndex: '10', backgroundColor: 'white', paddingLeft: '5px', paddingRight: '5px'}}>
        <Grid item xs={9} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
        <img className={styles.Logo} src={image} alt="logo"></img>
        </Grid>
        <Grid item xs={3} sx={{display: 'flex', justifyContent: 'flex-end', gap: '5vw', alignItems: 'center'}}>
        {width > 750?
            <>
            <button className={styles.Text} style={{ fontSize: '1.2rem', color: 'black', display: 'inline-block', backgroundColor: 'transparent', position: 'relative', border: 'none', fontFamily: 'Cabin, sans-serif', fontWeight: '400' }} onClick={() => WindowScroll(575, false)}>{content.content.Products}</button>
            <button className={styles.Text} style={{ fontSize: '1.2rem', color: 'black', display: 'inline-block', backgroundColor: 'transparent', position: 'relative', border: 'none', fontFamily: 'Cabin, sans-serif', fontWeight: '400' }} onClick={() => WindowScroll(1150, false)}>{content.content.Calculation}</button>
            <div className={styles.WrapperContact}>
            <div className={styles2.SmallContainer}>
                <EmailIcon fontSize="medium" sx={{color: '#0055B8'}}/>
                <a className={styles.Link} href={`mailto:${content.content.Email}?subject="${"Offer" || ""}"&body=${'' || ""}`} onClick={() => GoogleAnalitics()}>{content.content.Email}</a>
                </div>
                <div className={styles2.SmallContainer}>
                <LocalPhoneIcon fontSize="medium" sx={{color: '#0055B8'}}/>
                <a className={styles.Link} href={`tel:${content.content.Phone}`} onClick={() => GoogleAnalitics()}>{content.content.Phone}</a>
                </div>
                </div>
            </>
        :
        <>
        <MenuIcon  sx={{fontSize: 50, height: width > 300? '60px': '40px' }}  onClick={() => setOpen(!open)}/>
        </>
         }  
          <button className={styles.LangButton} onClick={() => setLangMenu(!langMenu)}>{language}</button>
          <button className={langMenu?styles.AdditionalLangAnimate : styles.AdditionalLang} id='next-lang' style={{width: width > 300? '40px': '30px', height: width > 300? '40px': '30px', fontSize: width > 300? '20px' : '15px'}} onClick={() => changeLanguage(language2)}>{language2}</button>
          <button className={langMenu?styles.AdditionalLangAnimate2 : styles.AdditionalLang2} id='next-lang' style={{width: width > 300? '40px': '30px', height: width > 300? '40px': '30px', fontSize: width > 300? '20px' : '15px'}}  onClick={() => changeLanguage(language3)}>{language3}</button>
          <button className={langMenu?styles.AdditionalLangAnimate3 : styles.AdditionalLang3} id='next-lang' style={{width: width > 300? '40px': '30px', height: width > 300? '40px': '30px', fontSize: width > 300? '20px' : '15px'}}  onClick={() => changeLanguage(language4)}>{language4}</button>
         </Grid>
         {open === true? 
         <div className={styles.DropdownContainer}>
          <button className={styles.MenuText} onClick={() => WindowScroll(400, true)}>{content.content.Products}</button>
          <button className={styles.MenuText} onClick={() => WindowScroll(700, true)}>{content.content.Calculation}</button>
         </div>
         :
         <></>
        }
           
    </Grid>
  )
}
