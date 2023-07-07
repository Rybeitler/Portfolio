import React from 'react'
import styles from './page.module.css'
import { useEffect } from "react";

const Rain = () => {

        var makeItRain = function () {


            var increment = 0;
            var drops = [];
            var backDrops = [];

            while (increment < 100) {
                //couple random numbers to use for various randomizations
                //random number between 98 and 1
                var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
                //random number between 5 and 2
                var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
                //increment
                increment += randoFiver;
                //add in a new raindrop with various randomizations to certain CSS properties
                drops.push({a:randoHundo, b:randoFiver, c:increment})
                // backdrops+=
            }
            return drops
        }

        let genData = makeItRain();

    return (
        <div>
            <div className="rain front-row">
                {genData.map(item=>(

                    <div className={styles.drop} style={{left: `${item.c}%`, bottom: `${item.b + item.b - 1 + 100}%`, animationDelay:`${item.a/100}s`, animationDuration: `${0.5 + item.a}s`}}>
                        <div className={styles.stem} style={{animationDelay: `${item.a/100}s`, animationDuration: `${0.5 + item.a}s`}}>
                        </div>
                        <div className={styles.splat} style={{animationDelay: `${item.a/100}s`, animationDuration: `${0.5 + item.a}s`}}>
                        </div>
                    </div>
                    
                ))}
            </div>
            {/* <div className="rain back-row">
            </div> */}
        </div>
    )
}

export default Rain