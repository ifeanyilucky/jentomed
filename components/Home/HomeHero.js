import React, { useState } from 'react';
import Link from 'next/link';
import { PATH } from '../../components/paths';
import {
  varFadeInRight,
  MotionInView,
  varFadeInLeft,
} from '../../components/animate';
import { config } from '../../config';

export default function HomeHero() {
  const [showVideo, setShowVideo] = useState(false);
  const { tel1 } = config();

  return (
    <>
      <div className='container'>
        <div className='row justify-content-lg-between'>
          <div className='col-md-7 position-relative zi-1 content-space-1 content-space-md-3'>
            <MotionInView variants={varFadeInLeft}>
              <div className='mb-5'>
                <h1 className='display-4 text-primary'>
                  We're healthcare professionals.
                  {/* <span className='text-secondary'>
                    <span className='js-typedjs'>business.</span>
                    <span
                      className='typed-cursor typed-cursor--blink'
                      aria-hidden='true'
                    >
                      |
                    </span>
                  </span> */}
                </h1>
              </div>

              <div className='w-lg-85'>
                <form>
                  <div className='row gx-2'>
                    <div className='col-sm-auto'>
                      <div className='d-grid'>
                        <Link href={PATH.appointment}>
                          <button
                            className='btn btn-primary btn-lg'
                            type='button'
                            id='emailAddOn'
                          >
                            Book an appointment
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>

                <p className='lead mt-1'>
                  We're committed to the best quality of life through preventive
                  and clinical medicine
                </p>

                <a
                  className='d-none d-md-inline-block position-md-absolute bottom-0 start-0'
                  href='#scrollToContent'
                >
                  <span className='svg-icon svg-icon-lg text-primary'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        opacity='0.3'
                        x='11'
                        y='4'
                        width='2'
                        height='10'
                        rx='1'
                        fill='#035A4B'
                      ></rect>
                      <path
                        d='M6.70711 12.2929C6.31658 11.9024 5.68342 11.9024 5.29289 12.2929C4.90237 12.6834 4.90237 13.3166 5.29289 13.7071L11.2929 19.7071C11.6715 20.0857 12.2811 20.0989 12.6757 19.7372L18.6757 14.2372C19.0828 13.864 19.1103 13.2314 18.7372 12.8243C18.364 12.4172 17.7314 12.3897 17.3243 12.7628L12.0301 17.6159L6.70711 12.2929Z'
                        fill='#035A4B'
                      ></path>
                    </svg>
                  </span>
                </a>
              </div>
            </MotionInView>
          </div>

          <div className='col-md-5 banner-half-end'>
            <div
              className='d-none d-md-block bg-img-center h-100 position-relative'
              style={{
                borderRadius: '20px',
                backgroundImage: `linear-gradient(to bottom, var(--tw-gradient-stops))`,
                backgroundImage:
                  'url(https://res.cloudinary.com/thebrickng/image/upload/v1657288394/jentomed-assets/WhatsApp_Image_2022-07-03_at_10.35.14_AM_cairhb.jpg)',
              }}
            >
              <div style={{ position: 'absolute', bottom: 10, left: 10 }}>
                <p className='text-white'>Watch our video</p>
              </div>
            </div>
            <div className='d-md-none w-75 mx-auto ms-sm-auto'>
              <MotionInView variants={varFadeInRight}>
                <img
                  className='img-fluid'
                  src='https://res.cloudinary.com/thebrickng/image/upload/v1657288394/jentomed-assets/WhatsApp_Image_2022-07-03_at_10.35.14_AM_cairhb.jpg'
                  alt='Jentomed Hospital'
                  style={{ borderRadius: '20px' }}
                />
              </MotionInView>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='container'>
        <div className='position-relative content-space-t-3 content-space-t-md-0 content-space-t-lg-3 content-space-b-2 content-space-b-md-3 content-space-b-xl-5'>
          <div className='row position-relative zi-2 mt-md-n5'>
            <MotionInView variants={varFadeInRight}>
              <div className='col-md-8 mb-7 mb-md-0'>
                <div className='w-md-75 mb-7'>
                  <h1 className='display-4'>We're healthcare professionals.</h1>
                  <p className='text-black'>
                    We're committed to the best quality of life through
                    preventive and clinical medicine
                  </p>
                </div>

                <RouterLink
                  type='button'
                  className='btn btn-primary btn-lg'
                  to={PATH.appointment}
                >
                  Book an appointment
                </RouterLink>
                <p className='text mt-4'>
                  Do you have an emergency? Please call{' '}
                  <a href={`tel:${tel1}`} className='text-primary'>
                    <strong>{tel1}</strong>
                  </a>
                </p>
              </div>
            </MotionInView>
          </div>

          <div className='col-md-6 position-md-absolute top-0 end-0'>
            <MotionInView variants={varFadeInRight}>
              <img
                className='img-fluid'
                src='https://res.cloudinary.com/thebrickng/image/upload/v1657288394/jentomed-assets/WhatsApp_Image_2022-07-03_at_10.35.14_AM_cairhb.jpg'
                alt='Image Description'
              />

              <div className='position-absolute bottom-0 end-0 zi-n1 mb-n10 me-n7'>
                <img
                  className='img-fluid'
                  src='https://res.cloudinary.com/thebrickng/image/upload/v1657288394/jentomed-assets/WhatsApp_Image_2022-07-03_at_10.35.14_AM_cairhb.jpg'
                  alt='Image Description'
                />
              </div>
            </MotionInView>
          </div>
        </div>
      </div> */}
    </>
  );
}
