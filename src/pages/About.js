import { Link } from 'react-router-dom';
import { PATH } from '../router/paths';
import { motion } from 'framer-motion';
import { varFadeInUp, MotionInView } from '../components/animate';

export default function About() {
  return (
    <>
      <main id='content' role='main'>
        <div className='container content-space-t-3 content-space-t-lg-5'>
          <div className='w-lg-75 text-center mx-lg-auto'>
            <div className='mb-5 mb-md-10'>
              <MotionInView variants={varFadeInUp}>
                <h1 className='display-4'>
                  About Jentomed Specialist Hospital
                </h1>
              </MotionInView>
              <MotionInView variants={varFadeInUp}>
                <p className='lead'>
                  Jentomed Specialist Hospital is a multi-disciplinary private
                  healthcare facility focusing on the best possible clinical
                  outcomes for our patients and their families.
                </p>
              </MotionInView>
            </div>
          </div>

          <div className='row gx-3'>
            <div className='col mb-3'>
              <MotionInView variants={varFadeInUp}>
                <div
                  className='bg-img-start'
                  style={{
                    backgroundImage:
                      'url(https://res.cloudinary.com/thebrickng/image/upload/v1657288395/jentomed-assets/WhatsApp_Image_2022-07-03_at_10.02.07_AM_zp3lw8.jpg)',
                    height: '15rem',
                  }}
                />
              </MotionInView>
            </div>

            <div className='col-3 d-none d-md-block mb-3'>
              <MotionInView variants={varFadeInUp}>
                <div
                  className='bg-img-start'
                  style={{
                    backgroundImage:
                      'url(https://res.cloudinary.com/thebrickng/image/upload/v1657288396/jentomed-assets/WhatsApp_Image_2022-07-03_at_10.02.07_AM_3_q8cn5b.jpg)',
                    height: '15rem',
                  }}
                />
              </MotionInView>
            </div>

            <div className='col mb-3'>
              <MotionInView variants={varFadeInUp}>
                <div
                  className='bg-img-start'
                  style={{
                    backgroundImage:
                      'url(https://res.cloudinary.com/thebrickng/image/upload/v1657288396/jentomed-assets/WhatsApp_Image_2022-07-03_at_10.02.06_AM_1_brkz56.jpg)',
                    height: '15rem',
                  }}
                />
              </MotionInView>
            </div>
            <div className='w-100'></div>
            <div className='col mb-3 mb-md-0'>
              <MotionInView variants={varFadeInUp}>
                <div
                  className='bg-img-start'
                  style={{
                    backgroundImage:
                      'url(https://res.cloudinary.com/thebrickng/image/upload/v1657288398/jentomed-assets/WhatsApp_Image_2022-07-03_at_10.02.06_AM_2_xjtq9h.jpg)',
                    height: '15rem',
                  }}
                />
              </MotionInView>
            </div>

            <div className='col-4 d-none d-md-block mb-3 mb-md-0'>
              <MotionInView variants={varFadeInUp}>
                <div
                  className='bg-img-start'
                  style={{
                    backgroundImage:
                      'url(https://res.cloudinary.com/thebrickng/image/upload/v1657288391/jentomed-assets/WhatsApp_Image_2022-07-03_at_10.02.07_AM_1_kgj4fh.jpg)',
                    height: '15rem',
                  }}
                />
              </MotionInView>
            </div>

            <div className='col'>
              <MotionInView variants={varFadeInUp}>
                <div
                  className='bg-img-start'
                  style={{
                    backgroundImage:
                      'url(https://res.cloudinary.com/thebrickng/image/upload/v1657288386/jentomed-assets/WhatsApp_Image_2022-07-03_at_10.02.06_AM_4_hrwr0v.jpg)',
                    height: '15rem',
                  }}
                />
              </MotionInView>
            </div>
          </div>
        </div>

        <div className='container content-space-2 content-space-lg-3'>
          <div className='row justify-content-lg-center'>
            <div className='col-sm-4 col-lg-3 mb-7 mb-sm-0'>
              <div className='text-center'>
                <h2 className='display-4'>7</h2>
                <p className='small'>years in business</p>
              </div>
            </div>

            <div className='col-sm-4 col-lg-3 mb-7 mb-sm-0'>
              <div className='text-center'>
                <h2 className='display-4'>3,5k+</h2>
                <p className='small'>copies sold</p>
              </div>
            </div>

            <div className='col-sm-4 col-lg-3'>
              <div className='text-center'>
                <h2 className='display-4'>85%</h2>
                <p className='small'>happy customers</p>
              </div>
            </div>
          </div>
        </div>

        <div className='border-top mx-auto' style={{ maxWidth: '25rem' }}></div>

        <div className='container content-space-2 content-space-lg-3'>
          <div className='row justify-content-lg-between'>
            <div className='col-lg-4 mb-5 mb-lg-0'>
              <h2>Our story</h2>
            </div>

            <div className='col-lg-6'>
              <p>About jentomed content</p>
            </div>
          </div>
          <div className='text-center mt-10'>
            <div className='card card-info-link card-sm'>
              <div className='card-body'>
                Ready to book an appointment with us?
                <Link className='card-link ms-2' to={PATH.appointment}>
                  Book now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
