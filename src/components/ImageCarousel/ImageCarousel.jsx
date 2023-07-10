import React, { useState } from 'react';
import me1 from '../../../public/me1.jpg'
import me2 from '../../../public/me2.jpg'
import Image from 'next/image';
import styles from './page.module.css'
const ImageCarousel = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        me2,
        me1,
    ];

    const handleMouseEnter = () => {
        const nextIndex = (activeIndex + 1) % images.length;
        setActiveIndex(nextIndex);
    };


    return (
        <div className={styles.imgCarousel}>
            <Image
                src={images[activeIndex]}
                alt="carousel"
                onMouseEnter={handleMouseEnter}
                className='rounded-md'
            />
        </div>
    );
};

export default ImageCarousel;
