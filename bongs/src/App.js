import styles from './App.module.css'
import Navbar from './Components/Navbar/Navbar';
import BaseContext from './Context/BaseContext';
import { useState, useEffect } from 'react';
import Language from './Language.js';
import Sectionheading from './Components/SectionHeading/SectionHeading';
import Carousel from './Components/Carousel/Carousel';
import ContactUs from './Components/ContactUs/ContactUs';
import Offer from './Components/Offer/Offer';
import Footer from './Components/Footer/Footer';
import CookieConsent from "react-cookie-consent";

function App() {
  const [width, setWidth] = useState(window.innerWidth)
  const [language, setLanguage] = useState()
  let content = null;
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    
}

    window.addEventListener('resize', handleResize)
  })

  useEffect(() => {
   const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
   if (timeZone === 'Europe/Warsaw'){
    setLanguage('PL')
   }
   else if (timeZone === 'Europe/Stockholm'){
    setLanguage('SE')
   }
   else if (timeZone === 'Europe/Berlin'){
    setLanguage('DE')
   }
   else {
    setLanguage('EN')
   }
   
  }, [])

  if (language === 'PL'){
    content = Language.Polish
  }
  else if (language === 'SE'){
    content = Language.Swedish
  }
  else if (language === 'DE'){
    content = Language.German
  }
  else {
    content = Language.English
  }
  return (
    <div className={styles.App}>
       <BaseContext.Provider value={{
        screenWidth: width,
         countryCode: language,
         setLanguage}} >
      <Navbar content={content}/>
      <Sectionheading content={content}/>
      <Carousel content={content}/>
      <Offer content={content}/>
      <ContactUs content={content}/>
      <Footer/>
      </BaseContext.Provider>
      <CookieConsent style={{background: "rgba(0, 85, 184, 0.43)", borderRadius: '5px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(5px)', border: '1px solid rgba(0, 85, 184, 0.3)', WebkitBackdropFilter: 'blur(5px', fontFamily: 'Outfit, sans-serif', fontSize: '1rem'}} buttonStyle={{ background: "white", fontSize: "13px", color: 'black', borderRadius: '7px', fontFamily: 'Outfit, sans-serif', marginRight: '5px'}}>This website uses cookies to enhance the user experience.</CookieConsent>
    </div>
  );
}

export default App;
