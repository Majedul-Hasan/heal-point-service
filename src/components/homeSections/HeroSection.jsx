import Image from 'next/image';
import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import HeroInfo from './HeroInfo';

const HeroSection = () => {
  return (
    <div className='my-3'>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='grid grid-cols-2'>
            <div>
              <span>Happier</span>
              <span>
                <FaLocationArrow />
              </span>
              <div>
                <Image
                  width={200}
                  height={200}
                  alt='Happier'
                  src='/static/photo-1548142813-c348350df52b.jfif'></Image>
              </div>
            </div>
            <div>
              <span>calm</span>
              <span>
                <FaLocationArrow />
              </span>
              <div>
                <Image
                  width={200}
                  height={200}
                  alt='Happier'
                  src='/static/photo-1548142813-c348350df52b.jfif'></Image>
              </div>
            </div>
            <div>
              <span>relaxed</span>
              <span>
                <FaLocationArrow />
              </span>
              <div>
                <Image
                  width={200}
                  height={200}
                  alt='Happier'
                  src='/static/photo-1548142813-c348350df52b.jfif'></Image>
              </div>
            </div>
            <div>
              <span>positive</span>
              <span>
                <FaLocationArrow />
              </span>
              <div>
                <Image
                  width={200}
                  height={200}
                  alt='Happier'
                  src='/static/photo-1548142813-c348350df52b.jfif'></Image>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <HeroInfo />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
