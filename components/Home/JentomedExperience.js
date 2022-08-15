import { MotionInView, varFadeInUp, varFadeInRight } from '../animate';

export default function JentomedExperience() {
  return (
    <>
      <div className='position-relative '>
        <div className='container content-space-lg-3'>
          <div className='row align-items-center'>
            <div className='col-12 col-lg-9 mb-7 mb-md-0'>
              <MotionInView variants={varFadeInUp}>
                <div className='w-md-65 mb-7'>
                  <h2 className='h1'>Jentomed Experience</h2>
                  <p>
                    At Jentomed Specialist Hospital, everything we do is
                    centered around one simple principle – ‘putting the patient
                    first’ at the times. When waiting to see the doctor, are
                    they relaxed and comfortable? If the need arose, would they
                    want to visit us again ? Would they readily recommend our
                    services to others? All our people, processes and facilities
                    are trained, designed and structured respectively to ensure
                    that our patients answer a strong “YES!” to those questions
                    each and every time.
                  </p>
                </div>
              </MotionInView>

              <div className='row'>
                <div className='col-md-4 mb-3 mb-md-0'>
                  <MotionInView variants={varFadeInUp}>
                    <div className='card h-100'>
                      <div className='card-body'>
                        <span className='svg-icon text-primary mb-3'>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M6.5 3C5.67157 3 5 3.67157 5 4.5V6H3.5C2.67157 6 2 6.67157 2 7.5C2 8.32843 2.67157 9 3.5 9H5V19.5C5 20.3284 5.67157 21 6.5 21C7.32843 21 8 20.3284 8 19.5V9H20.5C21.3284 9 22 8.32843 22 7.5C22 6.67157 21.3284 6 20.5 6H8V4.5C8 3.67157 7.32843 3 6.5 3Z'
                              fill='#035A4B'
                            />
                            <path
                              opacity='0.3'
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M20.5 11H10V17.5C10 18.3284 10.6716 19 11.5 19H15.5C17.3546 19 19.0277 18.2233 20.2119 16.9775C20.1436 16.9922 20.0727 17 20 17C19.4477 17 19 16.5523 19 16V13C19 12.4477 19.4477 12 20 12C20.5523 12 21 12.4477 21 13V15.9657C21.6334 14.9626 22 13.7741 22 12.5C22 11.6716 21.3284 11 20.5 11Z'
                              fill='#035A4B'
                            />
                          </svg>
                        </span>
                        <h4 className='card-title'>Our medical centre</h4>
                        <p className='card-text small'>
                          Our centre is a general and specialist medical and
                          surgical centre. We provide in-house specialist
                          services in endoscopy, surgery and oncology (both
                          surgical and non-surgical). A wide range of external
                          consultants spanning different areas of medical
                          practice also work with us.
                        </p>
                      </div>
                    </div>
                  </MotionInView>
                </div>

                <div className='col-md-4 mb-3 mb-md-0'>
                  <MotionInView variants={varFadeInUp}>
                    <div className='card h-100'>
                      <div className='card-body'>
                        <span className='svg-icon text-primary mb-3'>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M21.7 18.9L18.6 15.8C17.9 16.9 16.9 17.9 15.8 18.6L18.9 21.7C19.3 22.1 19.9 22.1 20.3 21.7L21.7 20.3C22.1 19.9 22.1 19.3 21.7 18.9Z'
                              fill='#035A4B'
                            />
                            <path
                              opacity='0.3'
                              d='M11 20C6 20 2 16 2 11C2 6 6 2 11 2C16 2 20 6 20 11C20 16 16 20 11 20ZM11 4C7.1 4 4 7.1 4 11C4 14.9 7.1 18 11 18C14.9 18 18 14.9 18 11C18 7.1 14.9 4 11 4ZM8 11C8 9.3 9.3 8 11 8C11.6 8 12 7.6 12 7C12 6.4 11.6 6 11 6C8.2 6 6 8.2 6 11C6 11.6 6.4 12 7 12C7.6 12 8 11.6 8 11Z'
                              fill='#035A4B'
                            />
                          </svg>
                        </span>
                        <h4 className='card-title'>Our technology</h4>
                        <p className='card-text'>
                          We place a premium on acquiring the very latest
                          technology once such is considered capable of
                          assisting in better quality service delivery.
                        </p>
                      </div>
                    </div>
                  </MotionInView>
                </div>

                <div className='col-md-4'>
                  <MotionInView variants={varFadeInUp}>
                    <div className='card h-100'>
                      <div className='card-body'>
                        <span className='svg-icon text-primary mb-3'>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              opacity='0.3'
                              d='M18 22H6C5.4 22 5 21.6 5 21V8C6.6 6.4 7.4 5.6 9 4H15C16.6 5.6 17.4 6.4 19 8V21C19 21.6 18.6 22 18 22ZM12 5.5C11.2 5.5 10.5 6.2 10.5 7C10.5 7.8 11.2 8.5 12 8.5C12.8 8.5 13.5 7.8 13.5 7C13.5 6.2 12.8 5.5 12 5.5Z'
                              fill='#035A4B'
                            />
                            <path
                              d='M12 7C11.4 7 11 6.6 11 6V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V6C13 6.6 12.6 7 12 7ZM15.1 10.6C15.1 10.5 15.1 10.4 15 10.3C14.9 10.2 14.8 10.2 14.7 10.2C14.6 10.2 14.5 10.2 14.4 10.3C14.3 10.4 14.3 10.5 14.2 10.6L9 19.1C8.9 19.2 8.89999 19.3 8.89999 19.4C8.89999 19.5 8.9 19.6 9 19.7C9.1 19.8 9.2 19.8 9.3 19.8C9.5 19.8 9.6 19.7 9.8 19.5L15 11.1C15 10.8 15.1 10.7 15.1 10.6ZM11 11.6C10.9 11.3 10.8 11.1 10.6 10.8C10.4 10.6 10.2 10.4 10 10.3C9.8 10.2 9.50001 10.1 9.10001 10.1C8.60001 10.1 8.3 10.2 8 10.4C7.7 10.6 7.49999 10.9 7.39999 11.2C7.29999 11.6 7.2 12 7.2 12.6C7.2 13.1 7.3 13.5 7.5 13.9C7.7 14.3 7.9 14.5 8.2 14.7C8.5 14.9 8.8 14.9 9.2 14.9C9.8 14.9 10.3 14.7 10.6 14.3C11 13.9 11.1 13.3 11.1 12.5C11.1 12.3 11.1 11.9 11 11.6ZM9.8 13.8C9.7 14.1 9.5 14.2 9.2 14.2C9 14.2 8.8 14.1 8.7 14C8.6 13.9 8.5 13.7 8.5 13.5C8.5 13.3 8.39999 13 8.39999 12.6C8.39999 12.2 8.4 11.9 8.5 11.7C8.5 11.5 8.6 11.3 8.7 11.2C8.8 11.1 9 11 9.2 11C9.5 11 9.7 11.1 9.8 11.4C9.9 11.7 10 12 10 12.6C10 13.2 9.9 13.6 9.8 13.8ZM16.5 16.1C16.4 15.8 16.3 15.6 16.1 15.4C15.9 15.2 15.7 15 15.5 14.9C15.3 14.8 15 14.7 14.6 14.7C13.9 14.7 13.4 14.9 13.1 15.3C12.8 15.7 12.6 16.3 12.6 17.1C12.6 17.6 12.7 18 12.9 18.4C13.1 18.7 13.3 19 13.6 19.2C13.9 19.4 14.2 19.5 14.6 19.5C15.2 19.5 15.7 19.3 16 18.9C16.4 18.5 16.5 17.9 16.5 17.1C16.7 16.8 16.6 16.4 16.5 16.1ZM15.3 18.4C15.2 18.7 15 18.8 14.7 18.8C14.4 18.8 14.2 18.7 14.1 18.4C14 18.1 13.9 17.7 13.9 17.2C13.9 16.8 13.9 16.5 14 16.3C14.1 16.1 14.1 15.9 14.2 15.8C14.3 15.7 14.5 15.6 14.7 15.6C15 15.6 15.2 15.7 15.3 16C15.4 16.2 15.5 16.6 15.5 17.2C15.5 17.7 15.4 18.1 15.3 18.4Z'
                              fill='#035A4B'
                            />
                          </svg>
                        </span>
                        <h4 className='card-title'>Our facilities</h4>
                        <p className='card-text'>
                          Jentomed spares no efforts in ensuring the presence of
                          general and specialised facilities that match or even
                          surpass international standards.
                        </p>
                      </div>
                    </div>
                  </MotionInView>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='banner-half-middle-x bg-img-start d-none d-md-block'
          style={{
            backgroundImage:
              'url(https://res.cloudinary.com/thebrickng/image/upload/v1657288893/jentomed-assets/portrait-african-american-woman-working-as-doctor_482257-10153_dlfnma.webp)',
          }}
        />
      </div>
    </>
  );
}
