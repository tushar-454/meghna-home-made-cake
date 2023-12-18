'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
const slidesArray = [
  {
    image:
      'https://drippy-demo.myshopify.com/cdn/shop/files/slider--1.jpg?v=1614284073',
  },
  {
    image:
      'https://drippy-demo.myshopify.com/cdn/shop/files/slider--3.jpg?v=1614284072',
  },
  {
    image:
      'https://drippy-demo.myshopify.com/cdn/shop/files/slider--2.jpg?v=1614284072',
  },
];

const CarouselComponent = () => {
  const [counter, setCounter] = useState(0);
  const [buttons, setButtons] = useState([]);
  useEffect(() => {
    const slidesNode = document.querySelectorAll('.allSlider');
    setButtons([...new Array(slidesNode.length).keys()]);
    slidesNode.forEach((slide, index) => {
      slide.style.left = `${index * 100}%`;
    });
    slidesNode.forEach((slide) => {
      slide.style.transform = `translate(-${counter * 100}%) skewX(${
        counter * 360
      }deg)`;
    });
  }, [counter]);
  return (
    <section>
      {/* <Container> */}
      <div className={'sliderWrap'}>
        <div className={'slideWrap'}>
          {slidesArray.map((singleSlide, index) => (
            <div key={index} className={`slide allSlider`}>
              <Image
                src={singleSlide.image}
                width={800}
                height={500}
                alt='slider image'
              />
            </div>
          ))}
        </div>
        <div className={'sliderButton'}>
          {buttons?.map((btn, index) => (
            <button
              key={index}
              onClick={() => setCounter(index)}
              className={index === counter ? 'active' : undefined}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      {/* </Container> */}
    </section>
  );
};

export default CarouselComponent;
