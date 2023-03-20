import styles from './App.module.css'
import Navbar from './Components/Navbar/Navbar';
import BaseContext from './Context/BaseContext';
import { useState, useEffect } from 'react';
import Language from './Language.js';
import Sectionheading from './Components/SectionHeading/SectionHeading';
import Carousel from './Components/Carousel/Carousel';
import ContactUs from './Components/ContactUs/ContactUs';

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
      <ContactUs content={content}/>
      </BaseContext.Provider>
    </div>
  );
}

export default App;
