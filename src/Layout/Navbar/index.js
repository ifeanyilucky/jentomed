import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { NavConfig } from './navconfig';
import { PATH } from '../../router/paths';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
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
                {/* <img
                  className='navbar-brand-logo'
                  src='../assets/svg/logos/logo.svg'
                  alt='Logo'
                /> */}
                <h2>Jentomed</h2>
              </RouterLink>

              <button
                className='navbar-toggler'
                type='button'
                onClick={handleOpen}
              >
                {open ? (
                  <span className='navbar-toggler-default'>
                    <Icon icon='quill:hamburger' />
                  </span>
                ) : (
                  <span className='navbar-toggler-toggled'>
                    <Icon icon='iconoir:cancel' />
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
                      <RouterLink className='nav-link' to={item.link}>
                        {item.title}
                      </RouterLink>
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
