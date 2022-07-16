import { MotionInView, varFadeInUp } from '../animate';

export default function OurServices() {
  const services = [
    {
      title: 'Surgical Specialities',
      image:
        'https://res.cloudinary.com/thebrickng/image/upload/v1657398760/jentomed-assets/surgical_uv7d8h.webp',
    },
    {
      title: 'Paediatrics',
      image:
        'https://res.cloudinary.com/thebrickng/image/upload/v1657399171/jentomed-assets/paediatrics_xvrg5k.jpg',
    },
    {
      title: 'Obsterics & Gynaecology',
      image:
        'https://res.cloudinary.com/thebrickng/image/upload/v1657399177/jentomed-assets/gynacology_wjarai.jpg',
    },
    {
      title: 'Geriatrics',
      image:
        'https://res.cloudinary.com/thebrickng/image/upload/v1657399181/jentomed-assets/Geriatric_Care_3_c2n2jn.jpg',
    },
    {
      title: 'Dentistry',
      image:
        'https://res.cloudinary.com/thebrickng/image/upload/v1657399184/jentomed-assets/images_1_juauev.jpg',
    },
    {
      title: 'Physiotherapy',
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
        <div className='tab-content' id='houseHeroTabContent'>
          <div className='efade show active' aria-labelledby='forSale-tab'>
            <div className='row gx-3'>
              {services.map((s, index) => (
                <div key={index} className='col-sm-6 col-lg-4 mb-3'>
                  <MotionInView variants={varFadeInUp}>
                    <div
                      className='card card-stretched-vertical card-transition shadow-none bg-img-start gradient-y-overlay-lg-dark'
                      style={{
                        backgroundImage: `url(${s.image})`,
                        minHeight: '15rem',
                      }}
                    >
                      <div className='card-body'>
                        <div className='card-footer'>
                          <h3 className='text-white mb-0'>{s.title}</h3>
                          <span className='d-block text-white'>
                            brief description here
                          </span>
                        </div>
                      </div>
                    </div>
                  </MotionInView>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
