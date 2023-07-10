import React, { useState, useEffect } from 'react';
import styles from './page.module.css'
import RaindropIcon from '../../../public/droplet-solid.svg'
import Image from 'next/image';

const RainComponent = () => {
    const [raindrops, setRaindrops] = useState([]);

    useEffect(() => {
        const generateRaindrops = () => {
            const numRaindrops = 50; // Number of raindrops to generate

            const newRaindrops = Array.from({ length: numRaindrops }, () => ({
                x: Math.random() * 100, // Random x position percentage
                y: -Math.random() * 100, // Random y position percentage
                delay: Math.random() * 2, // Random delay between 0 and 2s
            }));

            setRaindrops(newRaindrops);
        };

        generateRaindrops();

        window.addEventListener('resize', generateRaindrops); // Regenerate raindrops on window resize

        return () => {
            window.removeEventListener('resize', generateRaindrops); // Cleanup event listener
        };
    }, []);


    return (
        <div className={styles.rainContainer}>
            <h2 className={styles.centeredText}>See my Resume!</h2>
            {raindrops.map((raindrop, index) => (
                <div
                    key={index}
                    className={styles.raindrop}
                    style={{ left: `${raindrop.x}%`, top: `${raindrop.y}%`, animationDelay: `${raindrop.delay}s` }}
                >
                    <Image src={RaindropIcon} className={styles.raindropIcon} 
                        />

                </div>
            ))}
        </div>
    );
};

export default RainComponent;
