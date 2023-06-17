import Image from 'next/image';
import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { FaLocationArrow } from 'react-icons/fa';

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
          <div>
            <button className='btn btn-outline uppercase'>
              mental health at 30's
            </button>
            <h2>
              Beat your <span>anxiety</span> with therapy
            </h2>
            <p>To live your life to the fullest, we're continuing to </p>
            <div>
              <button>Get Help</button>
              <button>
                <BsFillPlayFill />{' '}
              </button>{' '}
              Play reviews
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
