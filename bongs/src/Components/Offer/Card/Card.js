import { Box } from "@mui/material"
import { useState } from "react"
import styles from './Card.module.css'
import CloseIcon from '@mui/icons-material/Close';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const Card = (props) => {
    let [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    function changeIndex(direction) {
        console.log(direction)
        if (direction === 'left') {
            if (index > 0){
                setIndex(index -1)
            }
        }
        else if (direction === 'right') {
            if (index < props.Images.length -1) {
                setIndex(index +1)
            }
        }
    }
    return (
        <Box sx={{boxShadow: '0px 7px 29px rgba(100, 100, 111, 0.2)', gap: '1vh',borderRadius: '5px',width: open === true?'300px': '250px',height: open === true? '350px': '250px',display: 'flex',alignItems: 'center',justifyContent: 'center',flexDirection: 'column',}}> 
        {open == true && <div className={styles.ArrowsContainer}>
            <KeyboardDoubleArrowLeftIcon fontSize="large" onClick={() => changeIndex('left')} sx={{cursor: 'pointer'}}/>
            <KeyboardDoubleArrowRightIcon fontSize="large" onClick={() => changeIndex('right')} sx={{cursor: 'pointer'}}/>
            </div>}
        <div className={open?styles.ImageBoxBig : styles.ImageBox}>
            <img className={styles.Image} src={props.Images[index]}/>
        </div>
        <span className={styles.Description}>{props.Type}</span>
        {open === false && <button className={styles.SeeMore} onClick={() => setOpen(!open)}>{props.ClickToSeeMore}</button>}
        {open === true && <CloseIcon fontSize="large" onClick={() => setOpen(!open)} sx={{cursor: 'pointer'}}/>}
        </Box>
    )
}

export default Card;