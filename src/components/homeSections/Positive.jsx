'use client';
import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa';

import bg from '../../../public/static/photos/premium_photo-1670530034951-b7d0428d6c9c.jpg';
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse';

function Positive() {
  return (
    <div>
      <div className='ml-10'>
        <div className={` relative  w-[650px]  `}>
          <MouseParallaxContainer
            className='parallax justify-between flex w-96 h-full '
            resetOnLeave>
            <MouseParallaxChild
              factorX={0.1}
              factorY={0.2}>
              <div className=' mt-20 ml-10   w-[450px] relative'>
                <Image
                  className=' right-0 top-0 rounded-full'
                  width={300}
                  height={300}
                  alt='Happier'
                  src={bg}></Image>
                <Image
                  className=' absolute rounded-full bottom-0 right-24'
                  width={350}
                  height={350}
                  alt='Happier'
                  src='/static/photos/halil-ibrahim-cetinkaya-WzGC8xSyqfg-unsplash.png'></Image>
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.01}
              factorY={0.1}>
              <span className='absolute bg-amber-600 px-3 py-1 rounded-lg bottom-6 right-5 '>
                Positive
              </span>
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.1}
              factorY={0.02}>
              <span className='absolute z-10  px-3 py-1 rounded-lg bottom-6 right-16 origin-top-left -rotate-90 '>
                <FaLocationArrow />
              </span>
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
      </div>
    </div>
  );
}

export default Positive;
