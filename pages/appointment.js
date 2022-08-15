import AppointmentForm from '../components/AppointmentForm';
import { varFadeInUp, MotionInView } from '../components/animate';
import Meta from '../components/Meta';

export default function Appointment() {
  return (
    <main id='content' role='main'>
      <Meta title='Book an appointment' />
      <div className='container content-space-t-3 content-space-t-lg-5 content-space-b-2'>
        <div className='row'>
          <div className='col-md-8 col-sm-12 mx-auto'>
            <div className='ps-lg-5'>
              <MotionInView variants={varFadeInUp}>
                <div className='card'>
                  <div className='card-header border-bottom text-center'>
                    <h3 className='card-header-title'>Book an appointment</h3>
                  </div>
                  <AppointmentForm />
                </div>
              </MotionInView>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
