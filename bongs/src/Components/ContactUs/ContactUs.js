import React from "react"
import styles from './ContactUs.module.css'
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';

export default function ContactUs(content) {
    return(
        <div className={styles.Container}> 
            <span className={styles.Text}>{content.content.ContactUs}</span>
            <div className={styles.Information}>
                <div className={styles.SmallContainer}>
                    <SmartphoneIcon fontSize="large"/>
                <span className={styles.InfText}>+48 600 209 311</span>
                </div>
                <div className={styles.SmallContainer}>
                    <EmailIcon fontSize="large"/>
                <span className={styles.InfText}>a.jachimowski@bongs-segregatory.pl</span>
                </div>
                <div className={styles.SmallContainer}>
                    <RoomIcon fontSize="large"/>
                <span className={styles.InfText}>84-217 Szemud k. Wejherowa Mercerstwo 2</span>
                </div>
            </div>
        </div>
    )
}