'use client';
import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa';
import styles from './Happier.module.css';
import bg from '../../../public/static/Web-assignment-01.png';
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse';

function Happier() {
  return (
    <>
      <div className={`${styles.happier} relative  w-96  `}>
        <MouseParallaxContainer
          className='parallax  w-96 h-full '
          resetOnLeave>
          <MouseParallaxChild
            factorX={0.01}
            factorY={0.03}>
            <MouseParallaxChild
              factorX={0.1}
              factorY={0.08}>
              <span className='absolute bg-amber-400 px-3 py-1 rounded-lg top-0 left-0 '>
                Happier
              </span>
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.1}
              factorY={0.2}>
              <span className='absolute z-10  px-3 py-1 rounded-lg top-9 left-24 origin-top-left rotate-90'>
                <FaLocationArrow />
              </span>
            </MouseParallaxChild>

            <MouseParallaxChild
              factorX={0.01}
              factorY={0.2}>
              <div className='ml-auto mt-3 mr-2 w-[350px] relative'>
                <Image
                  className='absolute'
                  width={350}
                  height={350}
                  alt='Happier'
                  src={bg}></Image>
                <Image
                  className='absolute rounded-full right-10 top-12 '
                  width={250}
                  height={250}
                  alt='Happier'
                  src='/static/photos/jake-nackos-IF9TK5Uy-KI-unsplash.png'></Image>
              </div>
            </MouseParallaxChild>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </>
  );
}

export default Happier;
