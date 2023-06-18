'use client';
import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa';
import styles from './Happier.module.css';
import bg from '../../../public/static/photos/photo-1553356084-58ef4a67b2a7.jpg';
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse';

function Cappier() {
  return (
    <>
      <div className={`${styles.happier} relative  w-96 mt-28 `}>
        <MouseParallaxContainer
          className='parallax  w-96 h-full '
          resetOnLeave>
          <MouseParallaxChild
            factorX={0.01}
            factorY={0.1}>
            <span className='absolute bg-sky-400 px-3 py-1 z-10 rounded-lg top-0 right-0'>
              Calm
            </span>
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.3}
            factorY={0.3}>
            <span className='absolute z-10  px-3 py-1 rounded-lg top-14 right-2 origin-top-left rotate-180'>
              <FaLocationArrow />
            </span>
          </MouseParallaxChild>

          <MouseParallaxChild
            factorX={0.01}
            factorY={0.2}>
            <div className='ml-auto mt-28 mr-2 w-[350px] relative'>
              <Image
                className='absolute'
                width={350}
                height={350}
                alt='Happier'
                src={bg}></Image>
              <Image
                className='absolute  right-10 top-7 '
                width={250}
                height={250}
                alt='Happier'
                src='/static/photos/ss.png'></Image>
            </div>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </>
  );
}

export default Cappier;
