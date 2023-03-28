import React from "react"
import styles from './Offer.module.css'
import Card from "./Card/Card"
import Images from '../../Images'

export default function Offer(content) {
    const ProductTypes = content.content.Types
    return (
        <div className={styles.Wrapper}>
        <span className={styles.Title}>{content.content.ThirdHeader}</span>
        <div className={styles.Container}>
        {ProductTypes.map((type, i) => {
            console.log(type)
            return(
            <Card ClickToSeeMore={content.content.ClickToSeeMore} Type={type.Type} Images={type.Images} index={i}/>
            )
        })}
        </div>
        </div>
        
    )
}