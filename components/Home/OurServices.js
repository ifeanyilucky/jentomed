import Link from 'next/link';
import { MotionInView, varFadeInUp } from '../animate';
import { PATH } from '../paths';

export default function OurServices() {
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
  ];
  return (
    <>
      <div className='container content-space-b-2 content-space-b-lg-3'>
        <div className='w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9'>
          <h2>We do more than save lives</h2>
          <p>
            With the state of the art equipment and the exceptional expertise of
            our professional staff, we provide prompt, reliable and the highest
            quality services to our clients and the clients of referring health
            professionals in real time.
          </p>
        </div>

        <div className='row gx-3'>
          {services.map((s, index) => (
            <div key={index} className='col-sm-6 col-lg-4 mb-3'>
              <MotionInView variants={varFadeInUp}>
                <div
                  className='card card-stretched-vertical card-transition shadow-none bg-img-start gradient-y-overlay-lg-dark gradient-x-overlay-lg-dark'
                  style={{
                    backgroundImage: `linear-gradient(to top,var(--tw-gradient-stops))`,
                    backgroundImage: `url(${s.image})`,
                    minHeight: '15rem',
                  }}
                >
                  <div className='card-body'>
                    <div className='card-footer'>
                      <h3 className='text-white mb-0'>{s.title}</h3>
                      <span className='d-block card-subtitle text-white'>
                        {s.desc}
                      </span>
                    </div>
                  </div>
                </div>
              </MotionInView>
            </div>
          ))}
        </div>
        <MotionInView variants={varFadeInUp}>
          <div className='text-center'>
            <Link href={PATH.services}>
              <a className='btn btn-outline-primary'>
                Find out more
                <i className='bi-chevron-right small ms-1'></i>
              </a>
            </Link>
          </div>
        </MotionInView>
      </div>
    </>
  );
}
