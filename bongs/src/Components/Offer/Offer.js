import React from "react"
import styles from './Offer.module.css'
import Card from "./Card/Card"
import SpecialCard from "./Card/SpecialCard"

export default function Offer(content) {
    const ProductTypes = content.content.Types
    return (
        <div className={styles.Wrapper}>
        <span className={styles.Title}>{content.content.ThirdHeader}</span>
        <div className={styles.Container}>
        {ProductTypes.map((type, i) => {
            return(
            <Card ClickToSeeMore={content.content.ClickToSeeMore} Type={type.Type} Images={type.Images} key={i}/>
            )
        })}
        <SpecialCard Email={content.content.Email} Title={content.content.SpecialCardTitle} Description={content.content.SpecialCardDescription}/>
        </div>
        </div>
        
    )
}