import styles from './App.module.css'
import Navbar from './Components/Navbar/Navbar';
import BaseContext from './Context/BaseContext';
import { useState, useEffect} from 'react';
import Language from './Language.js';
import Sectionheading from './Components/SectionHeading/SectionHeading';
import CookieConsent from "react-cookie-consent";
import ReactGA from 'react-ga4'
import Carousel from './Components/Carousel/Carousel.js';
import Offer from './Components/Offer/Offer.js';
import Footer from './Components/Footer/Footer.js';
import Opinion from './Components/Opinion/Opinion';



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

  function Accepted() {
    console.log(process.env.REACT_APP_GOOGLE_ID)
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ID)
  }
  return (
    <div className={styles.App}>
       <BaseContext.Provider value={{
        screenWidth: width,
         countryCode: language,
         setLanguage}} >
      <Navbar content={content}/>
      <Sectionheading content={content}/>
      <Opinion content={content}/>
      <Carousel content={content}/>
      <Offer content={content}/>
      <Footer/>
      </BaseContext.Provider>
      <CookieConsent onAccept={() => Accepted() } buttonText={content.CookieButtonAccept} location="top" declineButtonText={content.CookieButtonDecline} enableDeclineButton  declineButtonStyle={{ background: "white", fontSize: "13px", color: 'black', borderRadius: '7px', fontFamily: 'Outfit, sans-serif', marginRight: '5px'}} style={{background: "rgba(0, 85, 184, 0.43)", borderRadius: '5px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(5px)', border: '1px solid rgba(0, 85, 184, 0.3)', WebkitBackdropFilter: 'blur(5px', fontFamily: 'Outfit, sans-serif', fontSize: '0.8rem', alignItems: 'center'}} buttonStyle={{ background: "white", fontSize: "13px", color: 'black', borderRadius: '7px', fontFamily: 'Outfit, sans-serif', marginRight: '5px'}}>{content.Cookie}</CookieConsent>
    </div>
  );
}

export default App;
