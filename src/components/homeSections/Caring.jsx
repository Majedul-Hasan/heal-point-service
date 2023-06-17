'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Mousewheel, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Caring.module.css';
import Image from 'next/image';
import { BsArrowUpRight } from 'react-icons/bs';

const Caring = () => {
  return (
    <>
      <div className='flex items-center md:gap-16 justify-center bg-[#003c2a] text-white py-16 px-24 tracking-wider'>
        <div className=''>
          <div>
            <button className='btn btn-outline border-2 text-white hover:bg-orange-500 border-white rounded-full uppercase'>
              caring is always free
            </button>
          </div>
          <div className='text-6xl font-semibold my-7 flex flex-col gap-3'>
            <span> We help you to</span>

            <span className='underline decoration-orange-400 text-amber-400 underline-offset-[10px]'>
              grow confidence
            </span>

            <span>all any age</span>
          </div>
          <div className='text-lg font-semibold tracking-wider flex flex-col '>
            <span>Taking regular practice can induce structural</span>{' '}
            <span>changes in the brain which can help reduce stress</span>{' '}
            <span>enhance sleep quality.</span>
          </div>
        </div>
        <div className='  h-[62vh] '>
          <>
            <Swiper
              direction={'vertical'}
              slidesPerView={1}
              spaceBetween={30}
              mousewheel={true}
              pagination={{
                clickable: true,
              }}
              modules={[Mousewheel, Pagination]}>
              <SwiperSlide className='rounded-2xl max-h-fit bg-[#003c2a] bg-transparent'>
                <div className='card card-compact w-96  shadow-xl bg-transparent '>
                  <figure>
                    <Image
                      height={300}
                      width={484}
                      src='/static/photos/boys-playing-together.jpg'
                      alt='Shoes'
                    />
                  </figure>
                  <div className='card-body  text-black'>
                    <div className='flex border-y-2 border-yellow-700 py-0  font-semibold'>
                      <h2 className='card-title border-r-2 border-yellow-700 py-3 text-center text-2xl w-9/12'>
                        Helping to Navigate
                      </h2>{' '}
                      <div className='mx-1 font-extrabold text-xl my-1 bg-amber-300  text-black w-3/12 flex rounded-md justify-center items-center '>
                        <BsArrowUpRight />
                      </div>
                    </div>

                    <div className='card-actions justify-end text-lg'>
                      <p className=' font-semibold'>
                        Reach out to program from college to elementary school
                        students
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='rounded-2xl max-h-fit bg-[#003c2a]'>
                <div className='card card-compact w-96 bg-base-100 shadow-xl '>
                  <figure>
                    <Image
                      height={300}
                      width={484}
                      src='/static/photos/siblings-playing-with-brain-teaser-toy.jpg'
                      alt='Shoes'
                    />
                  </figure>
                  <div className='card-body  text-black'>
                    <div className='flex border-y-2 border-yellow-700 py-0  font-semibold'>
                      <h2 className='card-title border-r-2 border-yellow-700 py-3 text-center text-2xl w-9/12'>
                        Helping to Navigate
                      </h2>{' '}
                      <div className='mx-1 font-extrabold text-xl my-1 bg-amber-300  text-black w-3/12 flex rounded-md justify-center items-center '>
                        <BsArrowUpRight />
                      </div>
                    </div>

                    <div className='card-actions justify-end text-lg'>
                      <p className=' font-semibold'>
                        Reach out to program from college to elementary school
                        students
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='rounded-2xl max-h-fit bg-[#003c2a]'>
                <div className='card card-compact w-96 bg-base-100 shadow-xl '>
                  <figure>
                    <Image
                      height={300}
                      width={484}
                      src='/static/photos/siblings-playing-with-brain-teaser-toys.jpg'
                      alt='Shoes'
                    />
                  </figure>
                  <div className='card-body  text-black'>
                    <div className='flex border-y-2 border-yellow-700 py-0  font-semibold'>
                      <h2 className='card-title border-r-2 border-yellow-700 py-3 text-center text-2xl w-9/12'>
                        Helping to Navigate
                      </h2>{' '}
                      <div className='mx-1 font-extrabold text-xl my-1 bg-amber-300  text-black w-3/12 flex rounded-md justify-center items-center '>
                        <BsArrowUpRight />
                      </div>
                    </div>

                    <div className='card-actions justify-end text-lg'>
                      <p className=' font-semibold'>
                        Reach out to program from college to elementary school
                        students
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </>
  );
};

export default Caring;
