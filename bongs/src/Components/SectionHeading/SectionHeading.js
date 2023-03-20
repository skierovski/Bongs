import { Box } from "@mui/material";
import React from "react";
import styles from './SectionHeading.module.css'
import { useContext } from "react";

export default function Sectionheading(content){
    const base_ctx = useContext(BaseProvider);
    const width = base_ctx.width;
    return(
        <Box sx={{height: width > 900?  '40vh' : '30vh', width: 'auto'}}>
            <div className={styles.Photo}>
                <div className={styles.Container}>
                <span className={styles.H1}>{content.content.Header}</span>
                <span className={styles.H2}>{content.content.Description}</span>
            </div>
            </div>
        </Box>
    )
}