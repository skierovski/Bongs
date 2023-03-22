import { Box } from "@mui/system"
import React from "react"
import styles from './Offer.module.css'

export default function Offer(content) {
    const boxStyle = {
        background: '#FFFFF',
        boxShadow: '0px 7px 29px rgba(100, 100, 111, 0.2)',
        borderRadius: '5px',
        width: '250px',
        height: '250px',
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'center'
    }
    return (
        <div className={styles.Wrapper}>
        <span className={styles.Title}>{content.content.ThirdHeader}</span>
        <div className={styles.Container}>
        <Box sx={boxStyle}> 
            <span className={styles.Description}>Pudelka</span>
        </Box>
        <Box sx={boxStyle}>
            <span className={styles.Description}>Segregator</span>
        </Box>
        <Box sx={boxStyle}>
            <span className={styles.Description}>Gazetowce</span>
        </Box>
        <Box sx={boxStyle}>
            <span className={styles.Description}>Teczki</span>
        </Box>
        <Box sx={boxStyle}>
            <span className={styles.Description}>Wzorniki</span>
        </Box>
        <Box sx={boxStyle}>
            <span className={styles.Description}>Tapeowce</span>
        </Box>
        <Box sx={boxStyle}>
            <span className={styles.Description}>Pudelka</span>
        </Box>
        <Box sx={boxStyle}>
            <span className={styles.Description}>Segregator</span>
        </Box>
        <Box sx={boxStyle}>
            <span className={styles.Description}>Gazetowce</span>
        </Box>
        <Box sx={boxStyle}>
            <span className={styles.Description}>Teczki</span>
        </Box>
        <Box sx={boxStyle}>
            <span className={styles.Description}>Wzorniki</span>
        </Box>
        <Box sx={boxStyle}>
            <span className={styles.Description}>Tapetowce</span>
        </Box>
        <Box sx={boxStyle}>
            <span className={styles.Description}>Teczki</span>
        </Box>
        <Box sx={boxStyle}>
            <span className={styles.Description}>Wzorniki</span>
        </Box>
        <Box sx={boxStyle}>
            <span className={styles.Description}>Zamowienia specjalne</span>
        </Box>
        </div>
        </div>
        
    )
}