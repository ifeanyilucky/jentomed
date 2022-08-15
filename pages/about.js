import Link from 'next/link';
import { PATH } from '../components/paths';
import { motion } from 'framer-motion';
import { varFadeInUp, MotionInView } from '../components/animate';
import Meta from '../components/Meta';

export default function About() {
  return (
    <main id='content' role='main'>
      <Meta title='About us' />
      <div className='container content-space-t-3 content-space-t-lg-5'>
        <div className='w-lg-75 text-center mx-lg-auto'>
          <div className='mb-5 mb-md-10'>
            <MotionInView variants={varFadeInUp}>
              <h1 className='display-4'>About Jentomed Specialist Hospital</h1>
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

      <div className='border-top mx-auto' style={{ maxWidth: '25rem' }} />

      <div className='container content-space-2 content-space-lg-3'>
        <div
          className='row justify-content-lg-between'
          style={{ alignItems: 'center', justifyContent: 'space-between' }}
        >
          <div className='col-lg-5 mb-5 mb-lg-0'>
            <img
              src='/images/dr-julius.jpg'
              alt='Dr. Julius Ijitola'
              width='100%'
              style={{ borderRadius: '15px' }}
            />
          </div>

          <div className='col-lg-6'>
            <p>
              JENTOMED Specialist Hospital is located at 20, Abayomi Akinmosa
              Crescent, Idi-Ishin, Jericho, Ibadan in a serene environment with
              high-powered security personnel. The healthcare facility is being
              managed by renowned specialists/consultants in all fields of
              health care.
            </p>
            <p>
              JENTOMED Specialist Hospital is staffed with seasoned well-trained
              healthcare workers.
            </p>
            <p>
              Our objective is in the pursuit of world class specialist health
              care.
            </p>
            <p>
              It is a specialist hospital that offers care in Family Medicine,
              Internal Medicine, Surgical Specialities, Obstetrics &
              Gynaecology, Fertility Services, Geriatrics, Dentistry,
              Physiotherapy, and Diagnostic Services.
            </p>
            <p>
              {' '}
              We attend to emergency and non-emergency cases irrespective of the
              time (day and night). It is one of the very few super specialty
              private healthcare centres in Ibadan in particular and in Nigeria
              in general.
            </p>
          </div>
        </div>
        <div
          style={{
            marginTop: '6rem',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <h3 className='display-6 mb-3'>Trusted Specialists</h3>

          <div className='row justify-content-lg-between'>
            <div className='col-lg-6 mb-5 mb-lg-0'>
              <p>
                JENTOMED Specialist Hospital is known for its excellent
                standards and the high quality of services (Family Medicine,
                Internal Medicine, Surgical Specialities, Obstetrics &
                Gynaecology, Fertility Services, Geriatrics, Dentistry,
                Physiotherapy, and Diagnostic Services) that we provide.
              </p>
              <p>
                We regularly welcome fellow clinicians from around the world who
                come to our centre in Ibadan to have deeper insight into the
                management of patients.
              </p>
              <p>
                We are pacesetters in our field, with skilled employees who are
                motivated to deliver the best medical treatment outcomes for all
                our patients.
              </p>
              <p>We value patients' privacy and comfort.</p>
              <p>
                JENTOMED Specialist Hospital uses a compartmented hospital
                information system and digital patient record management. Our
                commitment is to ensure that patients can receive their
                treatments in discretion, knowing their medical records are
                confidential.
              </p>
              <p>
                We are known for our compassionate care. Our high-care
                connection with each patient starts from the very first
                interaction, and extends beyond our facilities and across
                Nigeria’s borders.
              </p>
            </div>
            <div className='col-lg-6'>
              <img
                src='/images/dr-julius.jpg'
                alt='Dr. Julius Ijitola'
                width='100%'
                style={{ borderRadius: '15px' }}
              />
            </div>
          </div>
        </div>
        <div className='text-center mt-10'>
          <div className='card card-info-link card-sm'>
            <div className='card-body'>
              Ready to book an appointment with us?
              <Link className='card-link ms-2' href={PATH.appointment}>
                <a>Book now</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
