import React from "react"
import styles from "./Footer.module.css"

export default function Footer() {
    return(
        <div className={styles.Container}>
            <div className={styles.FlexContainer}>
            <div className={styles.SmallContainer}>
            <span className={styles.Text}>BONGS SEGREGATORY POLSKA SP. Z O.O.</span>
            <span className={styles.Text}>Copyright © 2023 Bongs Segregatory Polska Sp. z o.o.</span>
            </div>
            <div className={styles.SmallContainer}>
            <span className={styles.RightText}>Sad Rejonowy Gdansk-Polnoc w Gdansku</span>
            <span className={styles.RightText}>VIII Wydzial Gospodarczy Krajowego Rejestru Sadowego</span>
            <span className={styles.RightText}>KRS: 0000065269 NIP: 593-23-07-194</span>
            </div>
            </div>
        </div>
    )
}