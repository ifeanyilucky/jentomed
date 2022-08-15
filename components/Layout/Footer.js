import Link from 'next/link';
import { PATH } from '../paths';

export default function Footer() {
  return (
    <footer className='bg-dark'>
      <div className='container pb-1 pb-lg-5'>
        <div className='border-top border-white-10 my-7' />

        <div className='row mb-7'>
          <div className='col-sm mx-auto mb-3 mb-sm-0 text-center'>
            <ul className='list-inline list-separator list-separator-light mb-0'>
              <li className='list-inline-item'>
                <Link href={PATH.appointment}>
                  <a>Appointment</a>
                </Link>
              </li>
              <li className='list-inline-item'>
                <Link href={PATH.about}>
                  <a>About us</a>
                </Link>
              </li>
              <li className='list-inline-item'>
                <Link href={PATH.services}>
                  <a>Services</a>
                </Link>
              </li>
              <li className='list-inline-item'>
                <Link href={PATH.about}>
                  <a>Contact us</a>
                </Link>
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
  );
}
