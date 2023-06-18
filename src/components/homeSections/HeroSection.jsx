'use client';

import Image from 'next/image';
import React from 'react';
import HeroInfo from './HeroInfo';
import Happier from './Happier';
import Calm from './Calm';
import Relaxed from './Relaxed';
import Positive from './Positive';
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse';

const HeroSection = () => {
  return (
    <div className='my-3'>
      <div className='hero min-h-screen relative'>
        <div className='hero-content flex-col lg:flex-row '>
          <div className='flex-1'>
            <HeroInfo />
          </div>
          <div className='flex-1 grid grid-cols-2 gap-10 '>
            <Happier />
            <Calm />
            <Relaxed />
            <Positive />
          </div>
        </div>
        <div className='absolute top-[55%] left-[40%]  '>
          <MouseParallaxContainer
            className='parallax   h-full '
            resetOnLeave>
            <MouseParallaxChild
              factorX={0.3}
              factorY={0.9}>
              <Image
                alt='balloon'
                src='/static/photos/balloon-02.png'
                width={100}
                height={150}></Image>
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
        <div className='absolute top-[35%] right-[40%]  '>
          <MouseParallaxContainer
            className='parallax   h-full '
            resetOnLeave>
            <MouseParallaxChild
              factorX={0.3}
              factorY={0.9}>
              <Image
                alt='balloon'
                src='/static/photos/pngtree557871.png'
                width={100}
                height={150}></Image>
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
        <div className='absolute bottom-[35%] right-[25%]  '>
          <MouseParallaxContainer
            className='parallax   h-full '
            resetOnLeave>
            <MouseParallaxChild
              factorX={0.3}
              factorY={0.9}>
              <Image
                alt='balloon'
                src='/static/photos/heart-chat-png.webp'
                width={100}
                height={150}></Image>
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
        <div className='absolute top-[35%] right-[25%]  '>
          <MouseParallaxContainer
            className='parallax   h-full '
            resetOnLeave>
            <MouseParallaxChild
              factorX={0.3}
              factorY={0.9}>
              <Image
                alt='balloon'
                src='/static/photos/line.png'
                width={200}
                height={150}></Image>
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
