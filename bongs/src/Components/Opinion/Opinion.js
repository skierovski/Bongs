import styles from "./Opinion.module.css"
import StarIcon from '@mui/icons-material/Star';
import { useEffect, useState } from "react";

const Opinion = (content) =>{
    const [index, setIndex] = useState(0)

    const Opinions = [
        {Company: content.content.NameCompany1,
        Opinion: content.content.Opinion},
        {Company: content.content.NameCompany2,
        Opinion: content.content.Opinion2}
    ]

    const OpinionToShow = Opinions[index]
    useEffect(() => {
        const intervalId = setInterval(() => {
            if(index === 0){
                setIndex(1)
            }
            else {
                setIndex(0)
            }
            console.log(index)
        },10000 // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, [index]);

    return (
        <div className={styles.Container}>
            <span className={styles.Opinion}>"{OpinionToShow.Opinion}"</span>
            <div className={styles.Stars}>
            <StarIcon sx={{color: '#ffdb6b'}}/>
            <StarIcon sx={{color: '#ffdb6b'}}/>
            <StarIcon sx={{color: '#ffdb6b'}}/>
            <StarIcon sx={{color: '#ffdb6b'}}/>
            <StarIcon sx={{color: '#ffdb6b'}}/>
            </div>
            <span className={styles.Opinion}>{OpinionToShow.Company}</span>
        </div>
    )
}

export default Opinion;