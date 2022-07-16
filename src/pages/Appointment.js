import AppointmentForm from '../components/AppointmentForm';
export default function Appointment() {
  return (
    <>
      <main id='content' role='main'>
        <div className='container content-space-t-3 content-space-t-lg-5 content-space-b-2'>
          <div className='row'>
            <div className='col-md-8 col-sm-12 mx-auto'>
              <div className='ps-lg-5'>
                <div className='card'>
                  <div className='card-header border-bottom text-center'>
                    <h3 className='card-header-title'>Book an appointment</h3>
                  </div>

                  <AppointmentForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
