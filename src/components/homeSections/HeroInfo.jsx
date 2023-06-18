/* eslint-disable react/no-unescaped-entities */
import { BsFillPlayFill } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import styles from './HeroInfo.module.css';

const HeroInfo = () => {
  return (
    <>
      <div>
        <button className='btn btn-outline border-2 text-black hover:bg-orange-500 border-black rounded-full uppercase'>
          mental health at 30's
        </button>

        <h2 className='text-6xl font-extrabold my-12 flex flex-col gap-4 '>
          <span> Beat your</span>
          <span className='mb-2'>
            <span className={`${styles.brushUnderline}`}>anxiety</span> with
          </span>
          <span> therapy</span>
        </h2>
        <p className='font-semibold '>
          To live your life to the fullest, we're <br /> continuing to{' '}
        </p>
        <div className='flex items-center gap-2'>
          <button className='btn bg-black hover:text-amber-500 text-white px-12 py-4 rounded-full'>
            Get Help{' '}
            <span className='text-amber-500'>
              <IoIosArrowForward />
            </span>{' '}
          </button>
          <button className=' flex font-semibold items-center gap-2 my-5 '>
            <span className='text-2xl btn bg-amber-500 '>
              {' '}
              <BsFillPlayFill />
            </span>
            <span className=''>Play reviews</span>
          </button>{' '}
        </div>
      </div>
    </>
  );
};

export default HeroInfo;
