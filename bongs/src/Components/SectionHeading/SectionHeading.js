import { Box } from "@mui/material";
import React from "react";
import styles from './SectionHeading.module.css'
import BaseProvider from '../../Context/BaseContext.js';
import { useContext } from 'react';

export default function Sectionheading(content){
    const base_ctx = useContext(BaseProvider);
    const width = base_ctx.screenWidth;
    return(
        <Box sx={{height: 'auto', width: 'auto'}}>
            <div className={styles.Photo}>
                {width > 450? 
                <div className={styles.Container}>
                <span className={styles.H1}>{content.content.Header}</span>
                <span className={styles.H2}>{content.content.Description}</span>
            </div>
            :
            <div className={styles.Container}>
                <span className={styles.Phone}>{content.content.HeaderPhone}</span>
            </div>
                }
            </div>
        </Box>
    )
}