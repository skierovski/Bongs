import { Box } from "@mui/material";
import React from "react";
import styles from './SectionHeading.module.css'
import BaseProvider from '../../Context/BaseContext.js';
import { useContext } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ReactGA from 'react-ga4';

const Sectionheading = (content) =>{
    const base_ctx = useContext(BaseProvider);
    const width = base_ctx.screenWidth;
    function GoogleAnalitics() {
        ReactGA.event({
          action: 'contact-click',
          category: 'contact-category',
          label: 'contact',
          value: 'xxxx'
        })
      }
    return(
        <Box sx={{height: 'auto', width: '100%'}}>
            <div className={styles.Photo}>
                {width > 450? 
                <div className={styles.Container}>
                <h1 className={styles.H1}>{content.content.Header}</h1>
                <div className={styles.Box}>
                <span className={styles.ContactUs}>{content.content.ContactUs}</span>
                <div className={styles.SmallContainer}>
                <EmailIcon fontSize="medium" sx={{color: '#0055B8'}}/>
                <a className={styles.Link} href={`mailto:${content.content.Email}?subject="${"Offer" || ""}"&body=${'' || ""}`} onClick={() => GoogleAnalitics()}>{content.content.Email}</a>
                </div>
                <div className={styles.SmallContainer}>
                <LocalPhoneIcon fontSize="medium" sx={{color: '#0055B8'}}/>
                <a className={styles.Link} href={`tel:${content.content.Phone}`} onClick={() => GoogleAnalitics()}>{content.content.Phone}</a>
                </div>
                </div>
            </div>
            :
            <div className={styles.Container}>
                <h1 className={styles.Phone}>{content.content.HeaderPhone}</h1>
                <div className={styles.Box}>
                <span className={styles.ContactUs}>{content.content.ContactUs}</span>
                <div className={styles.SmallContainer}>
                <EmailIcon fontSize="medium" sx={{color: '#0055B8'}}/>
                <a className={styles.Link} href={`mailto:${content.content.Email}?subject="${"test" || ""}"&body=${'body' || ""}`}>{content.content.Email}</a>
                </div>
                <div className={styles.SmallContainer}>
                <LocalPhoneIcon fontSize="medium" sx={{color: '#0055B8'}}/>
                <a className={styles.Link} href={`tel:${content.content.Phone}`}>{content.content.Phone}</a>
                </div>
                </div>
            </div>
                }
            </div>
        </Box>
    )
}

export default Sectionheading;