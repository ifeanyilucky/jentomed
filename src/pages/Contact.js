import { config } from '../config';
import Page from '../components/Page';

export default function Contact() {
  const { address, email, tel1, tel2 } = config();
  return (
    <Page title='Contact us'>
      <main id='content' role='main'>
        <div className='container content-space-t-3 content-space-t-lg-5 content-space-b-2'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='row'>
                <div className='col-sm-6'>
                  <h5 className='mb-1'>Call us:</h5>
                  <p>{tel1}</p>
                  <p>{tel2}</p>
                </div>

                <div className='col-sm-6'>
                  <h5 className='mb-1'>Email us:</h5>
                  <p>{email}</p>
                </div>

                <div className='col-sm-6'>
                  <h5 className='mb-1'>Address:</h5>
                  <p>{address}</p>
                </div>
              </div>
            </div>

            <div className='col-md-6 col-sm-12 '>
              <div className='ps-lg-5'>
                <div className='card'>
                  <div className='card-header border-bottom text-center'>
                    <h3 className='card-header-title'>General inquiries</h3>
                  </div>

                  <div className='card-body'>
                    <form>
                      <div className='row gx-3'>
                        <div className='col-sm-6'>
                          <div className='mb-3'>
                            <label
                              className='form-label'
                              for='hireUsFormFirstName'
                            >
                              First name
                            </label>
                            <input
                              type='text'
                              className='form-control form-control-lg'
                              name='hireUsFormNameFirstName'
                              id='hireUsFormFirstName'
                              placeholder='First name'
                              aria-label='First name'
                            />
                          </div>
                        </div>

                        <div className='col-sm-6'>
                          <div className='mb-3'>
                            <label
                              className='form-label'
                              for='hireUsFormLasttName'
                            >
                              Last name
                            </label>
                            <input
                              type='text'
                              className='form-control form-control-lg'
                              name='hireUsFormNameLastName'
                              id='hireUsFormLasttName'
                              placeholder='Last name'
                              aria-label='Last name'
                            />
                          </div>
                        </div>
                      </div>

                      <div className='row gx-3'>
                        <div className='col-sm-6'>
                          <div className='mb-3'>
                            <label
                              className='form-label'
                              for='hireUsFormWorkEmail'
                            >
                              Email address
                            </label>
                            <input
                              type='email'
                              className='form-control form-control-lg'
                              name='hireUsFormNameWorkEmail'
                              id='hireUsFormWorkEmail'
                              placeholder='email@site.com'
                              aria-label='email@site.com'
                            />
                          </div>
                        </div>

                        <div className='col-sm-6'>
                          <div className='mb-3'>
                            <label className='form-label' for='hireUsFormPhone'>
                              Phone{' '}
                              <span className='form-label-secondary'></span>
                            </label>
                            <input
                              type='text'
                              className='form-control form-control-lg'
                              name='hireUsFormNamePhone'
                              id='hireUsFormPhone'
                              placeholder='+x(xxx)xxx-xx-xx'
                              aria-label='+x(xxx)xxx-xx-xx'
                            />
                          </div>
                        </div>
                      </div>

                      <div className='mb-3'>
                        <label className='form-label' for='hireUsFormDetails'>
                          Details
                        </label>
                        <textarea
                          className='form-control form-control-lg'
                          name='hireUsFormNameDetails'
                          id='hireUsFormDetails'
                          placeholder='A short description of enquiry'
                          aria-label='A short description of enquiry'
                          rows='4'
                        />
                      </div>

                      <div className='d-grid'>
                        <button
                          type='submit'
                          className='btn btn-primary btn-lg'
                        >
                          Send inquiry
                        </button>
                      </div>

                      <div className='text-center'>
                        <p className='form-text'>We'll get back to you..</p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Page>
  );
}
