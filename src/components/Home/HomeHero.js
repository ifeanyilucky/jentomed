import { Link as RouterLink } from 'react-router-dom';
import { PATH } from '../../router/paths';
import { varFadeInRight, MotionInView } from '../animate';
import { config } from '../../config';

export default function HomeHero() {
  const { tel1 } = config();
  return (
    <>
      <div className='container'>
        <div className='position-relative content-space-t-3 content-space-t-md-0 content-space-t-lg-3 content-space-b-2 content-space-b-md-3 content-space-b-xl-5'>
          <div className='row position-relative zi-2 mt-md-n5'>
            <MotionInView variants={varFadeInRight}>
              <div className='col-md-8 mb-7 mb-md-0'>
                <div className='w-md-75 mb-7'>
                  <h1 className='display-4'>We're healthcare professionals.</h1>
                  <p className='text'>
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
      </div>
    </>
  );
}
