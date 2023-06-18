import Image from 'next/image';
import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import HeroInfo from './HeroInfo';
import Happier from './Happier';
import Calm from './Calm';
import Relaxed from './Relaxed';
import Positive from './Positive';

const HeroSection = () => {
  return (
    <div className='my-3'>
      <div className='hero min-h-screen '>
        <div className='hero-content flex-col lg:flex-row'>
          <div className='flex-1'>
            <HeroInfo />
          </div>
          <div className='flex-1 grid grid-cols-2 gap-10'>
            <Happier />
            <Calm />
            <Relaxed />
            <Positive />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
