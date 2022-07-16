import { useRoutes, Outlet } from 'react-router-dom';
import Layout from '../Layout';

// PAGES
import Home from '../pages/Home';
import About from '../pages/About';
import Appointment from '../pages/Appointment';
import Contact from '../pages/Contact';
import Services from '../pages/Services';

export default function Route() {
  return useRoutes([
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/contact', element: <Contact /> },
        { path: '/appointment', element: <Appointment /> },
        { path: '/about', element: <About /> },
        { path: '/services', element: <Services /> },
      ],
    },
  ]);
}
