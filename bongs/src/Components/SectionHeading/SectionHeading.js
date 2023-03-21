import { Box } from "@mui/material";
import React from "react";
import styles from './SectionHeading.module.css'
export default function Sectionheading(content){
    return(
        <Box sx={{height: 'auto', width: 'auto'}}>
            <div className={styles.Photo}>
                <div className={styles.Container}>
                <span className={styles.H1}>{content.content.Header}</span>
                <span className={styles.H2}>{content.content.Description}</span>
            </div>
            </div>
        </Box>
    )
}