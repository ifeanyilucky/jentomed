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
  }, []);
  return (
    <nav className='navbar navbar-expand-lg navbar-end navbar-absolute-top navbar-light'>
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

        {/* <button className='navbar-toggler' type='button' onClick={handleOpen}>
          {open ? (
            <span className='navbar-toggler'>
              <Icon icon='bytesize:close' />
            </span>
          ) : (
            <span className='navbar-toggler-default'>
              <Icon icon='quill:hamburger' />
            </span>
          )}
        </button> */}

        <div
          className={
            open ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'
          }
          id='navbarNavDropdown'
        >
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
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
          <div className='my-2 my-lg-0'>
            <Link href={PATH.appointment}>
              <a>
                <button className='btn btn-primary my-2 my-sm-0'>
                  Appointment
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
