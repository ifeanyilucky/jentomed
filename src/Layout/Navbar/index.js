import { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { NavConfig } from './navconfig';
import { PATH } from '../../router/paths';
import { varFadeInDown, varFadeOutUp } from '../../components/animate';

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
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
  }, [pathname]);
  return (
    <>
      <header
        id='header'
        className='navbar navbar-expand-lg navbar-end navbar-absolute-top navbar-light'
      >
        <div className='container'>
          <div className='container'>
            <nav className='js-mega-menu navbar-nav-wrap'>
              <RouterLink className='navbar-brand' to={PATH.home}>
                <img
                  className='navbar-brand-logo'
                  src='/static/images/jentomed-logo.jpg'
                  alt='Logo'
                />
              </RouterLink>

              <button
                className='navbar-toggler'
                type='button'
                onClick={handleOpen}
              >
                {open ? (
                  <span className='navbar-toggler'>
                    <Icon icon='bytesize:close' />
                  </span>
                ) : (
                  <span className='navbar-toggler-default'>
                    <Icon icon='quill:hamburger' />
                  </span>
                )}
              </button>

              <div
                className={
                  open
                    ? 'collapse navbar-collapse show'
                    : 'collapse navbar-collapse'
                }
                id='navbarNavDropdown'
              >
                <ul className='navbar-nav'>
                  {NavConfig.map((item) => (
                    <li className='nav-item'>
                      <motion.div
                        variants={variants}
                        animate={open ? 'open' : 'closed'}
                      >
                        <RouterLink className='nav-link' to={item.link}>
                          {item.title}
                        </RouterLink>{' '}
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
