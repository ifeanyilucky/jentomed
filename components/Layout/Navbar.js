import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
// import { Icon } from '@iconify/react';
import { NavConfig } from './navconfig';
import { PATH } from '../paths';
import { varFadeInDown, varFadeOutUp } from '../../components/animate';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { asPath } = useRouter();
  console.log(asPath);
  const handleOpen = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  const variants = {
    open: varFadeInDown.animate,
  };
  useEffect(() => {
    setOpen(false);
  }, [asPath]);
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-white'>
        <div className='container'>
          <Link href={PATH.home}>
            <a className='navbar-brand'>
              <img
                className='navbar-brand-logo'
                src='/images/jentomed-logo.jpg'
                alt='Logo'
              />
            </a>
          </Link>

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarCollapse'
            aria-controls='navbarCollapse'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={handleOpen}
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className={
              open
                ? 'collapse navbar-collapse show'
                : 'collapse navbar-collapse'
            }
            id='navbarCollapse'
          >
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarCollapse'
              aria-controls='navbarCollapse'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <i className='fe fe-x'></i>
            </button>

            <ul className='navbar-nav ms-auto'>
              {NavConfig.map((item) => (
                <li className='nav-item'>
                  <motion.div
                    variants={variants}
                    animate={open ? 'open' : 'closed'}
                  >
                    <Link href={item.link}>
                      <a
                        className={
                          asPath === item.link
                            ? 'active nav-link font-weight-bolder'
                            : 'nav-link'
                        }
                      >
                        {item.title}
                      </a>
                    </Link>{' '}
                  </motion.div>
                </li>
              ))}
            </ul>

            <Link href={PATH.appointment}>
              <a className='navbar-btn btn btn-sm btn-primary lift ms-auto'>
                Appointment
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
