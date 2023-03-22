import React from "react"
import styles from './ContactUs.module.css'
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';
import BaseProvider from '../../Context/BaseContext.js';
import { useContext } from 'react';

export default function ContactUs(content) {
    const base_ctx = useContext(BaseProvider);
    const width = base_ctx.screenWidth;
    return(
        <>
        {width > 550?
        <div className={styles.Container}>
        <span className={styles.Text}>{content.content.ContactUs}</span>
        <div className={styles.Information}>
            <div className={styles.SmallContainer}>
                <SmartphoneIcon fontSize="large"/>
            <span className={styles.InfText}>{content.content.Phone}</span>
            </div>
            <div className={styles.SmallContainer}>
                <EmailIcon fontSize="large"/>
            <span className={styles.InfText}>{content.content.Email}</span>
            </div>
            <div className={styles.SmallContainer}>
                <RoomIcon fontSize="large"/>
            <span className={styles.InfText}>84-217 Szemud k. Wejherowa Mercerstwo 2</span>
            </div>
            </div>
            </div>
            :
            <div className={styles.Container}>
            <span className={styles.Text}>{content.content.ContactUs}</span>
            <div className={styles.Information}>
            <div className={styles.SmallContainer}>
                <SmartphoneIcon fontSize="medium"/>
            <span className={styles.InfText}>{content.content.Phone}</span>
            </div>
            <div className={styles.SmallContainer}>
                <EmailIcon fontSize="medium"/>
            <span className={styles.InfText}>{content.content.Email}</span>
            </div>
            <div className={styles.SmallContainer}>
                <RoomIcon fontSize="medium"/>
            <span className={styles.InfText}>84-217 Szemud k. Wejherowa Mercerstwo 2</span>
            </div>
            </div>
            </div>
         }
         </>
    )
}