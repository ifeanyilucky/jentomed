import Link from 'next/link';
import { PATH } from '../paths';

export default function Reviews() {
  return (
    <>
      <div className='container'>
        <div className='row justify-content-center align-items-md-center mb-7'>
          <div className='col-12 col-md-6 col-lg-6 mb-5 mb-md-0 me-md-n9'>
            <div className='card'>
              <div className='card-body'>
                <span className='svg-icon text-primary mb-3'>
                  <svg
                    width='36'
                    height='36'
                    viewBox='0 0 36 36'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M13.5001 5.84998C9.0001 7.64998 5.4001 12.15 5.4001 16.2C5.4001 17.1 5.4001 18 5.8501 18.45C6.7501 17.55 8.1001 17.1 9.9001 17.1C13.5001 17.1 16.6501 19.8 16.6501 23.85C16.6501 27.9 13.5001 30.6 9.9001 30.6C6.3001 31.05 4.5001 29.7 3.1501 27.45C1.8001 25.2 1.3501 22.05 1.3501 20.25C1.3501 13.05 4.9501 7.19998 12.6001 3.59998L13.5001 5.84998ZM31.9501 5.84998C27.4501 7.64998 23.8501 12.15 23.8501 16.2C23.8501 17.1 23.8501 18 24.3001 18.45C25.2001 17.55 26.5501 17.1 28.3501 17.1C31.9501 17.1 35.1001 19.8 35.1001 23.85C35.1001 27.9 31.9501 30.6 28.3501 30.6C25.2001 30.6 23.4001 29.25 22.0501 27C19.8001 25.2 19.8001 22.05 19.8001 20.25C19.8001 13.05 23.4001 7.19998 31.0501 3.59998L31.9501 5.84998Z'
                      fill='#377dff'
                    />
                  </svg>
                </span>

                <figure>
                  <blockquote className='blockquote blockquote-sm blockquote-left-border'>
                    "Wow!!!.. They are the best so far, they've got the best
                    doctors and nurses I have ever encountered in Lagos,
                    Nigeria(very friendly and cheerful personalities who would
                    make you relax throughout your time of consultation and
                    treatment). The reception was Top-Notch, thanks to Dr.
                    Julius..."
                  </blockquote>

                  <figcaption className='blockquote-footer'>
                    <div className='d-flex align-items-center'>
                      <div className='flex-shrink-0'>
                        <img
                          className='avatar avatar-circle'
                          src='/static/images/patient.jpg'
                          alt='Image Description'
                        />
                      </div>
                      <div className='flex-grow-1 ms-3'>
                        Christina Kray
                        <span className='blockquote-footer-source'>
                          Happy customer
                        </span>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          <div className='col-md-6 mt-n9 mt-md-0'>
            <img
              className='img-fluid'
              src='https://jentoscopes.com.ng/wp-content/uploads/2019/06/DSC_1048-2-e1560358223250.jpg'
              alt='Image Description'
            />
          </div>
        </div>

        <div className='text-center'>
          <h3>See what other people are saying</h3>

          <div className='d-flex justify-content-center align-items-center gap-1 mb-4'>
            <img
              src='https://res.cloudinary.com/thebrick-realty/image/upload/v1657359713/thebrick.com.ng/assets/star_qcaphg.svg'
              alt='Review rating'
              width='16'
            />
            <img
              src='https://res.cloudinary.com/thebrick-realty/image/upload/v1657359713/thebrick.com.ng/assets/star_qcaphg.svg'
              alt='Review rating'
              width='16'
            />
            <img
              src='https://res.cloudinary.com/thebrick-realty/image/upload/v1657359713/thebrick.com.ng/assets/star_qcaphg.svg'
              alt='Review rating'
              width='16'
            />
            <img
              src='https://res.cloudinary.com/thebrick-realty/image/upload/v1657359713/thebrick.com.ng/assets/star_qcaphg.svg'
              alt='Review rating'
              width='16'
            />
            <img
              src='https://res.cloudinary.com/thebrick-realty/image/upload/v1657359713/thebrick.com.ng/assets/star_qcaphg.svg'
              alt='Review rating'
              width='16'
            />
            <h4 className='ms-2 mb-0'>4.85 / 5.0</h4>
          </div>

          <Link href={PATH.appointment}>
            <a className='btn btn-primary px-5'>
              Book an appointment{' '}
              <i className='bi-chevron-right small ms-1'></i>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
