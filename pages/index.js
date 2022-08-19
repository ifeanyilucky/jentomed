import HomeHero from '../components/Home/HomeHero';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import JentomedExperience from '../components/Home/JentomedExperience';
import OurServices from '../components/Home/OurServices';
import Reviews from '../components/Home/Reviews';
import { MotionInView, varFadeInUp } from '../components/animate';
import Meta from '../components/Meta';

export default function Home() {
  return (
    <main id='content' role='main'>
      <Meta title='Home' />
      <div className='position-relative overflow-hidden'>
        <HomeHero />
        <div
          className='col-md-10 position-absolute top-0 start-0 zi-n1 gradient-y-three-sm-primary h-100'
          style={{ backgroundSize: 'calc(1000px + (100vw - 1000px) / 2)' }}
        />
      </div>
      <WhyChooseUs />
      <div className='content-space-b-2 content-space-b-lg-3'>
        <JentomedExperience />
      </div>

      <OurServices />
      <div className='overflow-hidden'>
        <MotionInView variants={varFadeInUp}>
          <div className='w-md-75 w-lg-50 text-center mx-md-auto mb-7'>
            <h2>Reviews</h2>
            <p>From our happy patients. Be the next one.</p>
          </div>
        </MotionInView>
        <MotionInView variants={varFadeInUp}>
          <Reviews />
        </MotionInView>
        <div className='container content-space-2 content-space-lg-3'>
          <div className='row'>
            <div className='col-sm-4 mb-3 mb-sm-0'>
              <MotionInView variants={varFadeInUp}>
                <div className='text-center'>
                  <small className='text-cap text-primary'>
                    &mdash; address
                  </small>
                  <h4 className='display-5'>Head office</h4>
                  <p>
                    No 20, Abayomi Akimosa Crescent, Idi-Ishin, Jericho, Ibadan.
                  </p>
                </div>
              </MotionInView>
            </div>

            <div className='col-sm-4 mb-3 mb-sm-0'>
              <MotionInView variants={varFadeInUp}>
                <div className='text-center'>
                  <small className='text-cap text-primary'>
                    &mdash; Online support
                  </small>
                  <h4 className='display-4'>24/7</h4>
                  <p>jentomed1@gmail.com</p>
                </div>
              </MotionInView>
            </div>

            <div className='col-sm-4'>
              <MotionInView variants={varFadeInUp}>
                <div className='text-center'>
                  <small className='text-cap text-primary'>
                    &mdash; Contact us
                  </small>
                  <h4 className='display-4'>Contact us</h4>
                  <p>08026161721, 08159222390</p>
                </div>
              </MotionInView>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
