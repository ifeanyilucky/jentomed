import Link from 'next/link';
import { PATH } from '../components/paths';
import { config } from '../config';
import { MotionInView, varFadeInUp } from '../components/animate';
import Meta from '../components/Meta';

export default function Services() {
  const services = [
    {
      title: 'Surgical Specialities',
      desc: 'We provide one of the most extensive and experienced surgical service in Nigeria',
      image:
        'https://res.cloudinary.com/thebrickng/image/upload/v1657398760/jentomed-assets/surgical_uv7d8h.webp',
    },
    {
      title: 'Paediatrics',
      desc: 'We offer a complete service for child evaluation, vaccination, screening, treatment and follow-up of acute illnesses; as well as primary and secondary care of chronic illnesses.',
      image:
        'https://res.cloudinary.com/thebrickng/image/upload/v1657399171/jentomed-assets/paediatrics_xvrg5k.jpg',
    },
    {
      title: 'Obsterics & Gynaecology',
      desc: 'We offer comprehensive services for the reproductive health and gynaecological needs of women',
      image:
        'https://res.cloudinary.com/thebrickng/image/upload/v1657399177/jentomed-assets/gynacology_wjarai.jpg',
    },
    {
      title: 'Geriatrics',
      desc: 'We offer special geriatric services for older adults to promote good health, prevent disease, treat afflictions, and manage disabilities.',
      image:
        'https://res.cloudinary.com/thebrickng/image/upload/v1657399181/jentomed-assets/Geriatric_Care_3_c2n2jn.jpg',
    },
    {
      title: 'Dentistry',
      desc: 'We provide comprehensive treatment and skilled dental services.',
      image:
        'https://res.cloudinary.com/thebrickng/image/upload/v1657399184/jentomed-assets/images_1_juauev.jpg',
    },
    {
      title: 'Physiotherapy',
      desc: 'Jentomed offers wholesome rehabilitation services to assist our patients to improve function and  quality of life. ',
      image:
        'https://res.cloudinary.com/thebrickng/image/upload/v1657399683/jentomed-assets/istockphoto-1321088960-170667a_ejcpeb.jpg',
    },
    {
      title: 'Family Medicine',
      desc: 'As your primary care provider, Jentomed Specialist Hospital family medicine doctors form deep and meaningful partnerships with their patients by delivering important preventative care, helping patients manage conditions or offering support and guidance when health symptoms arise.',
    },
    {
      title: 'Internal Medicine',
      desc: `Whether you are just starting adulthood or entering your golden year,s you want a compassionate doctor who can guide you better health. Internal medicine doctors in the Jentomed Specialist Hospital offer a wide range f services, including preventive care, management of chronic conditions and nonsurgical medical treatments.`,
    },

    {
      title: 'Fertility Services',
      desc: 'When you are ready to start a family, any obstacle to getting pregnant can seem devastating. Fertility specialists in the Jentomed Specialist Hospital can help you address infertility challenges using safe, evidence-based methods.',
    },
    {
      title: 'Diagnostic Services',
      desc: 'Jentomed Specialist Hospital offer testing services in all medical specialties, from routine testing to esoteric testing including advanced and often proprietary genetic testing solutions. ',
    },
  ];
  const { tel1 } = config();

  return (
    <>
      <Meta title='Our medical services' />
      <div className='container content-space-t-3 content-space-t-lg-5'>
        <div className='w-lg-65 text-center mx-lg-auto mb-5 mb-md-9'>
          <MotionInView variants={varFadeInUp}>
            <h1>Our services</h1>
            <p className='text-muted'>
              Our mission is to provide the highest quality of Healthcare
              services by bringing together the right medical components with a
              view to maintaining our position as the best private healthcare
              provider in Nigeria.
            </p>
          </MotionInView>
        </div>

        <div className='row gx-3 gx-lg-4'>
          <div className='col-5 align-self-end'>
            <MotionInView variants={varFadeInUp}>
              <img
                className='img-fluid rounded-2'
                src='https://res.cloudinary.com/thebrickng/image/upload/v1657288395/jentomed-assets/WhatsApp_Image_2022-07-03_at_10.02.07_AM_zp3lw8.jpg'
                alt='Image Description'
              />
            </MotionInView>
          </div>

          <div className='col-7'>
            <MotionInView variants={varFadeInUp}>
              <div className='ms-lg-4'>
                <img
                  className='img-fluid rounded-2'
                  src='https://res.cloudinary.com/thebrickng/image/upload/v1657288398/jentomed-assets/WhatsApp_Image_2022-07-03_at_10.02.06_AM_2_xjtq9h.jpg'
                  alt='Image Description'
                />
              </div>
            </MotionInView>
          </div>
        </div>
      </div>

      <div className='container content-space-2 content-space-lg-3'>
        <MotionInView variants={varFadeInUp}>
          <div className='w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9'>
            <span className='text-cap'>Allied health services</span>
            <h2>
              Our services are tailored to provide the best all round medical
              care for our patients
            </h2>
          </div>
        </MotionInView>

        <div className='row justify-content-lg-center'>
          {services.map((s, index) => (
            <div className='col-md-6 col-lg-5 mb-3 mb-md-5 mb-lg-7' key={index}>
              <MotionInView variants={varFadeInUp}>
                <div className='d-flex ps-md-5'>
                  <div className='flex-grow-1 ms-3'>
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              </MotionInView>
            </div>
          ))}
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 mb-3 mb-lg-0'>
            <MotionInView variants={varFadeInUp}>
              <div className='card bg-primary h-100 overflow-hidden'>
                <div className='card-body'>
                  <div className='w-65 pe-2'>
                    <h2 className='card-title text-white'>Emergencies</h2>
                    <p className='card-text text-white'>
                      We provide 24/7 emergency and. Simply call the number
                      below.
                    </p>
                    <a
                      className='btn btn-light btn-sm btn-transition'
                      href={`tel:${tel1}`}
                    >
                      {tel1}
                    </a>
                  </div>

                  <div className='position-absolute end-0 bottom-0 w-50 mb-n3 me-n7'>
                    <img
                      className='card-img'
                      src='https://res.cloudinary.com/thebrickng/image/upload/v1657404187/jentomed-assets/physiotherapy_nnpvf0.png'
                      alt='Image Description'
                    />
                  </div>
                </div>
              </div>
            </MotionInView>
          </div>

          <div className='col-lg-6'>
            <MotionInView variants={varFadeInUp}>
              <div className='card bg-warning h-100 overflow-hidden'>
                <div className='card-body'>
                  <div className='w-65 pe-2'>
                    <h2 className='card-title text-white'>
                      Book an appointment
                    </h2>
                    <p className='card-text text-white'>
                      Our medical doctors are available seven days a week. to
                      book an appointment online click the button below.
                    </p>
                    <Link href={PATH.appointment}>
                      <a className='btn btn-light btn-sm btn-transition'>
                        Book appointment
                      </a>
                    </Link>
                  </div>

                  <div className='position-absolute end-0 bottom-0 w-50 mb-n3 me-n7'>
                    <img
                      className='card-img'
                      src='https://res.cloudinary.com/thebrickng/image/upload/v1657404195/jentomed-assets/appointment_nd0dw9.png'
                      alt='jentomed-hospital'
                    />
                  </div>
                </div>
              </div>
            </MotionInView>
          </div>
        </div>
      </div>
    </>
  );
}
