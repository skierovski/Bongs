import styles from "./Opinion.module.css"
import StarIcon from '@mui/icons-material/Star';

const Opinion = (content) =>{
    return (
        <div className={styles.Container}>
            <span className={styles.Opinion}>"{content.content.Opinion}"</span>
            <div className={styles.Stars}>
            <StarIcon sx={{color: 'yellow'}}/>
            <StarIcon sx={{color: 'yellow'}}/>
            <StarIcon sx={{color: 'yellow'}}/>
            <StarIcon sx={{color: 'yellow'}}/>
            <StarIcon sx={{color: 'yellow'}}/>
            </div>
            <span className={styles.Opinion}>{content.content.NameCompany1}</span>
        </div>
    )
}

export default Opinion;