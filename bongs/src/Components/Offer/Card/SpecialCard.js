import styles from './Card.module.css'
import { Box } from "@mui/material"
import ReactGA from 'react-ga4';

const SpecialCard = (props) => {
    function GoogleAnalitics() {
        ReactGA.event({
          action: 'contact-click',
          category: 'contact-category',
          label: 'contact',
          value: 'xxxx'
        })
      }
    return(
        <Box sx={{boxShadow: '0px 7px 29px rgba(100, 100, 111, 0.2)',gap: '1vh',borderRadius: '5px',width: '250px',height: '250px',display: 'flex',alignItems: 'center',justifyContent: 'center',flexDirection: 'column',}}> 
        <span className={styles.Adnotation}>{props.Title}</span>
        <span className={styles.Adnotation}>{props.Description}</span>
        <a className={styles.Link} href={`mailto:${props.Email}?subject="${"Offer" || ""}"&body=${'' || ""}`} onClick={() => GoogleAnalitics()}>Kontakt</a>
        </Box>
    )
}

export default SpecialCard;