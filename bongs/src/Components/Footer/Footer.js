import React from "react"
import styles from "./Footer.module.css"

export default function Footer() {
    return(
        <div className={styles.Container}>
            <div className={styles.FlexContainer} >
            <div className={styles.SmallContainer}>
            <span className={styles.Text}>BONGS SEGREGATORY POLSKA SP. Z O.O.</span>
            <span className={styles.Text}>Copyright © 2023 Bongs Segregatory Polska Sp. z o.o.</span>
            <span className={styles.Text}>KRS: 0000065269 NIP: PL 593-23-07-194</span>
            </div>
            <div className={styles.SmallContainer}>
            <span className={styles.RightText}>Sąd Rejonowy Gdańsk-Północ w Gdańsku</span>
            <span className={styles.RightText}>VIII Wydział Gospodarczy</span>
            <span className={styles.RightText}>Krajowego Rejestru Sądowego</span>
            <span className={styles.RightText}>Kapitał Zakładowy: 555000zł</span>
            </div>
            </div>
        </div>
    )
}