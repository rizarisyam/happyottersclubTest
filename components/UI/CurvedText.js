
import React, { useEffect } from 'react'
import Head from "next/head"
import styles from '../../styles/CurvedText.module.css'

import sepia from '../../public/images/sepia.png'

const CurvedText = () => {

    useEffect(() => {
        const text = document.querySelector('#text p');
        console.log(text)
        text.innerHTML = text.textContent.split("").map((char, i) => `<span style="transform: rotate(${i * 10}deg); font-size: 2.5em">${char}</span>`).join("")
    })

    return (
        <>
            <div className={styles.circle}>
                <div className={styles.logo}>
                    <img src='/images/sepia.png' className='object-cover' />
                </div>
                <div className={styles.text} id="text">
                    <p className='uppercase'>happy - otters - club -</p>
                </div>
            </div>
        </>
    )
}

export default CurvedText;