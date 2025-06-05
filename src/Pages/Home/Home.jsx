import React, { useState } from 'react';
import s from './Home.module.scss';

const images = [
  '/Images/group_foto.jpg',
  '/Images/group1.jpg',
  '/Images/IMG_4925.jpg',
  '/Images/IMG_4976.jpg',
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className={s.Home}>
      <div className={s.slider}>
        <div
          className={s.slideContainer}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, i) => (
            <img key={i} src={img} alt={`Slide ${i}`} />
          ))}
        </div>
        <button className={`${s.prevBtn}`} onClick={goToPrev}>❮</button>
        <button className={`${s.nextBtn}`} onClick={goToNext}>❯</button>
      </div>
    </div>
  );
};

export default Home;
