import styles from '../styles/Featured.module.css';
import Image from 'next/image';
import { useState } from 'react';

export const Featured = () => {
  const [index, setIndex] = useState(0);

  const images = [
    '/img/featured.png',
    '/img/featured2.png',
    '/img/featured3.png',
  ];

  const handleArrow = (direction) => {
    if (direction === 'l') setIndex(index !== 0 ? index - 1 : 2);
    if (direction === 'r') setIndex(index !== 2 ? index + 1 : 0);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow('l')}
      >
        <Image
          src="/img/arrowl.png"
          layout="fill"
          objectFit="contain"
          alt="arrow left"
        />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((image, index) => (
          <div className={styles.imgContainer} key={index}>
            <Image
              src={image}
              alt="Featured Image"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow('r')}
      >
        <Image
          src="/img/arrowr.png"
          layout="fill"
          objectFit="contain"
          alt="arrow right"
        />
      </div>
    </div>
  );
};
