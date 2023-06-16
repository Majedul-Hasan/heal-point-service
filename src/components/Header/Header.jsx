import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  const navOptions = (
    <>
      <li>
        <Link href='/service'>Service</Link>
      </li>
      <li>
        <Link href='/clinics'>Clinics</Link>
      </li>
      <li>
        <Link href='/treatments'>Treatments</Link>
      </li>
    </>
  );

  return (
    <div className=' bg-white mx-16 rounded-b-2xl'>
      <div className='navbar '>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label
              tabIndex={0}
              className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 '>
              {navOptions}
            </ul>
          </div>
          <div>
            <Link
              href='/'
              className=''>
              <Image
                src='/static/logo.png'
                width={300}
                height={10}
                alt='logo'
              />
            </Link>
          </div>
        </div>
        <div className='navbar-end   '>
          <div className='navbar justify-end hidden lg:flex ml-auto mr-0'>
            <ul className='menu menu-horizontal px-1 border-r-2 border-black'>
              {navOptions}
            </ul>
            <div>
              <ul className='menu menu-horizontal px-1'>
                <li>
                  <select
                    defaultValue='EN'
                    className='select  dark:text-black inline-flex px-2'>
                    <option className='dark:text-black'>EN</option>
                    <option className='dark:text-black'>HIND</option>
                  </select>
                </li>
                <li className='flex items-center justify-center '>
                  <label
                    tabIndex={0}
                    className='btn btn-ghost flex items-center justify-center pt-2 '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5 mt-1'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4 6h16M4 12h8m-8 6h16'
                      />
                    </svg>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className='navbar-end '>
            <a className='btn  btn-outline rounded-full hover:bg-stone-100 hover:text-black'>
              Need help?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
