import React from 'react'
import styles from './Navbar.module.css'
import image from '../../images/bongs_logo.png' 
import {Grid} from '@mui/material'

export default function Navbar() {
  return (
    <Grid container>
        <Grid item xs={9} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
        <img className={styles.Logo} src={image} alt="logo"></img>
        </Grid>
        <Grid item xs={3} sx={{display: 'flex', justifyContent: 'flex-end', gap: '5vw', alignItems: 'center'}}>
            <button className={styles.Text} style={{fontSize: '1.2rem', color: 'black', display: 'inline-block', backgroundColor: 'transparent', position: 'relative', border: 'none', fontFamily: 'Outfit, sans-serif', fontWeight: '400' }}>Products</button>
            <button className={styles.Text} style={{fontSize: '1.2rem', color: 'black', display: 'inline-block', backgroundColor: 'transparent', position: 'relative', border: 'none', fontFamily: 'Outfit, sans-serif', fontWeight: '400' }}>Calculation</button>
            <button className={styles.Text} style={{fontSize: '1.2rem', color: 'black', display: 'inline-block', backgroundColor: 'transparent', position: 'relative', border: 'none', fontFamily: 'Outfit, sans-serif', fontWeight: '400' }}>Conctact</button>
            <button className={styles.LangButton}>PL</button>
        </Grid>   
    </Grid>
  )
}
