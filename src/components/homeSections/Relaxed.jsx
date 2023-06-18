'use client';
import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa';
import styles from './Happier.module.css';
import bg from '../../../public/static/photos/premium_photo-1669732922459-0d1946366259.jpg';
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse';

function Relaxed() {
  return (
    <>
      <div className={` relative  w-[650px] -mt-28 `}>
        <MouseParallaxContainer
          className='parallax justify-between flex w-96 h-full '
          resetOnLeave>
          <MouseParallaxChild
            factorX={0.1}
            factorY={0.3}>
            <span className='absolute bg-emerald-500 px-3 py-1 rounded-lg top-80 left-5 '>
              Relaxed
            </span>
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.1}
            factorY={0.02}>
            <span className='absolute z-10  px-3 py-1 rounded-lg top-72 left-20 origin-top-left '>
              <FaLocationArrow />
            </span>
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.01}
            factorY={0.02}>
            <div className='ml-auto mt-3 mr-2  w-[450px] relative'>
              <Image
                className='absolute right-0 top-0 rounded-full'
                width={350}
                height={350}
                alt='Happier'
                src={bg}></Image>
              <Image
                className='absolute rounded-full right-0 top-0 '
                width={350}
                height={350}
                alt='Happier'
                src='/static/photos/sincerely-media-WaFHxewtfPQ-unsplash.png'></Image>
            </div>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </>
  );
}

export default Relaxed;
