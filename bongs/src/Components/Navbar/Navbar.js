import React, { useContext, useState } from 'react'
import styles from './Navbar.module.css'
import image from '../../images/bongs_logo.png' 
import {Grid} from '@mui/material'
import BaseProvider from '../../Context/BaseContext.js';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar(content) {
  const [langMenu, setLangMenu] = useState(false);
  const base_ctx = useContext(BaseProvider);
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
  return (
    <Grid container>
        <Grid item xs={9} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
        <img className={styles.Logo} src={image} alt="logo"></img>
        </Grid>
        <Grid item xs={3} sx={{display: 'flex', justifyContent: 'flex-end', gap: '5vw', alignItems: 'center'}}>
        {width > 750?
            <>
            <button className={styles.Text} style={{ fontSize: '1.2rem', color: 'black', display: 'inline-block', backgroundColor: 'transparent', position: 'relative', border: 'none', fontFamily: 'Outfit, sans-serif', fontWeight: '400' }}>{content.content.Products}</button>
            <button className={styles.Text} style={{ fontSize: '1.2rem', color: 'black', display: 'inline-block', backgroundColor: 'transparent', position: 'relative', border: 'none', fontFamily: 'Outfit, sans-serif', fontWeight: '400' }}>{content.content.Calculation}</button>
            <button className={styles.Text} style={{ fontSize: '1.2rem', color: 'black', display: 'inline-block', backgroundColor: 'transparent', position: 'relative', border: 'none', fontFamily: 'Outfit, sans-serif', fontWeight: '400' }}>{content.content.Contact}</button>
            </>
        :
        <>
        <MenuIcon  sx={{fontSize: 50, height: width > 300? '60px': '40px' }}  />
        </>
         }
         {langMenu !== true?
          <button className={styles.LangButton} onClick={() => setLangMenu(true)}>{language}</button>
          :
          <>
          <button className={styles.LangButton} onClick={() => changeLanguage(language)}>{language}</button>
          <button className={styles.AdditionalLang} style={{width: width > 300? '40px': '30px', height: width > 300? '40px': '30px', fontSize: width > 300? '20px' : '15px'}} onClick={() => changeLanguage(language2)}>{language2}</button>
          <button className={styles.AdditionalLang2} style={{width: width > 300? '40px': '30px', height: width > 300? '40px': '30px', fontSize: width > 300? '20px' : '15px'}}  onClick={() => changeLanguage(language3)}>{language3}</button>
          <button className={styles.AdditionalLang3} style={{width: width > 300? '40px': '30px', height: width > 300? '40px': '30px', fontSize: width > 300? '20px' : '15px'}}  onClick={() => changeLanguage(language4)}>{language4}</button>
          </>
          }
         </Grid>
           
    </Grid>
  )
}
