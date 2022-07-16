import { Link as RouterLink } from 'react-router-dom';
import { PATH } from '../../router/paths';

export default function Footer() {
  return (
    <>
      <footer className='bg-dark'>
        <div className='container pb-1 pb-lg-5'>
          <div className='border-top border-white-10 my-7' />

          <div className='row mb-7'>
            <div className='col-sm mb-3 mb-sm-0'>
              <ul className='list-inline list-separator list-separator-light mb-0'>
                <li className='list-inline-item'>
                  <RouterLink
                    className='link-sm link-light'
                    to={PATH.appointment}
                  >
                    Appointment
                  </RouterLink>
                </li>
                <li className='list-inline-item'>
                  <RouterLink
                    className='link-sm link-light'
                    to={PATH.appointment}
                  >
                    About us
                  </RouterLink>
                </li>
                <li className='list-inline-item'>
                  <RouterLink
                    className='link-sm link-light'
                    to={PATH.appointment}
                  >
                    Contact us
                  </RouterLink>
                </li>
              </ul>
            </div>

            <div className='col-sm-auto'>
              <ul className='list-inline mb-0'>
                <li className='list-inline-item'>
                  <a className='btn btn-soft-light btn-xs btn-icon' href='#'>
                    <i className='bi-facebook'></i>
                  </a>
                </li>

                <li className='list-inline-item'>
                  <a className='btn btn-soft-light btn-xs btn-icon' href='#'>
                    <i className='bi-google'></i>
                  </a>
                </li>

                <li className='list-inline-item'>
                  <a className='btn btn-soft-light btn-xs btn-icon' href='#'>
                    <i className='bi-twitter'></i>
                  </a>
                </li>

                <li className='list-inline-item'>
                  <a className='btn btn-soft-light btn-xs btn-icon' href='#'>
                    <i className='bi-github'></i>
                  </a>
                </li>

                <li className='list-inline-item'>
                  <div className='btn-group'>
                    <button
                      type='button'
                      className='btn btn-soft-light btn-xs dropdown-toggle'
                      id='footerSelectLanguage'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                      data-bs-dropdown-animation
                    >
                      <span className='d-flex align-items-center'>
                        <img
                          className='avatar avatar-xss avatar-circle me-2'
                          src='./assets/vendor/flag-icon-css/flags/1x1/us.svg'
                          alt='Image description'
                          width='16'
                        />
                        <span>English (US)</span>
                      </span>
                    </button>

                    <div
                      className='dropdown-menu'
                      aria-labelledby='footerSelectLanguage'
                    >
                      <a
                        className='dropdown-item d-flex align-items-center active'
                        href='#'
                      >
                        <img
                          className='avatar avatar-xss avatar-circle me-2'
                          src='./assets/vendor/flag-icon-css/flags/1x1/us.svg'
                          alt='Image description'
                          width='16'
                        />
                        <span>English (US)</span>
                      </a>
                      <a
                        className='dropdown-item d-flex align-items-center'
                        href='#'
                      >
                        <img
                          className='avatar avatar-xss avatar-circle me-2'
                          src='./assets/vendor/flag-icon-css/flags/1x1/de.svg'
                          alt='Image description'
                          width='16'
                        />
                        <span>Deutsch</span>
                      </a>
                      <a
                        className='dropdown-item d-flex align-items-center'
                        href='#'
                      >
                        <img
                          className='avatar avatar-xss avatar-circle me-2'
                          src='./assets/vendor/flag-icon-css/flags/1x1/es.svg'
                          alt='Image description'
                          width='16'
                        />
                        <span>Español</span>
                      </a>
                      <a
                        className='dropdown-item d-flex align-items-center'
                        href='#'
                      >
                        <img
                          className='avatar avatar-xss avatar-circle me-2'
                          src='./assets/vendor/flag-icon-css/flags/1x1/cn.svg'
                          alt='Image description'
                          width='16'
                        />
                        <span>中文 (繁體)</span>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className='w-md-85 text-lg-center mx-lg-auto'>
            <p className='text-white-50 small'>
              Copyright &copy; 2022 Jentomed Specialist Hospital. All Rights
              Reserved.
            </p>
            <p className='text-white-50 small'>
              “We are open all day, every day, all year round”.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
