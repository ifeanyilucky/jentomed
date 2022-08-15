import { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { config } from '../config';
import {
  MotionInView,
  varFadeInUp,
  varFadeInLeft,
  varFadeInRight,
} from '../components/animate';
import Meta from '../components/Meta';

export default function Contact() {
  const { formState, register, handleSubmit, setValue, getValues } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      tel: '',
      email: '',
      message: '',
    },
  });
  const { address, email, tel1, tel2 } = config();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const contactSubmit = async (values) => {
    console.log(values);
    setLoading(true);
    await axios
      .post('/api/contact', values)
      .then((res) => {
        setLoading(false);
        console.log(res);
        setError(false);
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
        setSuccess(false);
      });
  };
  return (
    <main id='content' role='main'>
      <Meta title='Contact us' />
      <div className='container content-space-t-3 content-space-t-lg-5 content-space-b-2'>
        <div className='row'>
          <div className='col-md-6'>
            <MotionInView variants={varFadeInLeft}>
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
            </MotionInView>
          </div>

          <div className='col-md-6 col-sm-12 '>
            {success === true ? (
              <MotionInView variants={varFadeInUp}>
                <div className='alert alert-success' role='alert'>
                  <svg
                    className='bi flex-shrink-0 me-2'
                    width='24'
                    height='24'
                    role='img'
                    aria-label='Success:'
                  >
                    <use xlinkHref='#check-circle-fill' />
                  </svg>

                  <h4 className='alert-heading'>
                    Thank you for getting in touch!
                  </h4>
                  <hr />
                  <p>
                    We appreciate you contacting us at Jentomed Specialist
                    Hospital. We will get back in touch with you soon! Have a
                    great day!
                  </p>
                </div>
              </MotionInView>
            ) : (
              <MotionInView variants={varFadeInRight}>
                <div className='ps-lg-5'>
                  {error ? (
                    <div className='alert alert-danger' role='alert'>
                      Network error! try again.
                    </div>
                  ) : (
                    ''
                  )}

                  <div className='card'>
                    <div className='card-header border-bottom text-center'>
                      <h3 className='card-header-title'>General inquiries</h3>
                    </div>

                    <div className='card-body'>
                      <form onSubmit={handleSubmit(contactSubmit)}>
                        <div className='row gx-3'>
                          <div className='col-sm-6'>
                            <div className='mb-3'>
                              <label
                                className='form-label'
                                htmlFor='hireUsFormFirstName'
                              >
                                First name
                              </label>
                              <input
                                type='text'
                                className='form-control form-control-lg'
                                {...register('firstName')}
                                required
                              />
                            </div>
                          </div>

                          <div className='col-sm-6'>
                            <div className='mb-3'>
                              <label className='form-label'>Last name</label>
                              <input
                                type='text'
                                className='form-control form-control-lg'
                                {...register('lastName')}
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className='row gx-3'>
                          <div className='col-sm-6'>
                            <div className='mb-3'>
                              <label
                                className='form-label'
                                htmlFor='hireUsFormWorkEmail'
                              >
                                Email address
                              </label>
                              <input
                                type='email'
                                className='form-control form-control-lg'
                                name='email'
                                {...register('email')}
                                required
                              />
                            </div>
                          </div>

                          <div className='col-sm-6'>
                            <div className='mb-3'>
                              <label
                                className='form-label'
                                for='hireUsFormPhone'
                              >
                                Phone{' '}
                                <span className='form-label-secondary'></span>
                              </label>
                              <input
                                type='tel'
                                className='form-control form-control-lg'
                                name='tel'
                                {...register('tel')}
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className='mb-3'>
                          <label
                            className='form-label'
                            htmlFor='hireUsFormDetails'
                          >
                            Details
                          </label>
                          <textarea
                            className='form-control form-control-lg'
                            name='hireUsFormNameDetails'
                            id='message'
                            rows='4'
                            {...register('message')}
                            required
                          />
                        </div>

                        <div className='d-grid'>
                          <button
                            type='submit'
                            className='btn btn-primary btn-lg'
                          >
                            {loading ? (
                              <span
                                className='spinner-border spinner-border-sm'
                                role='status'
                                aria-hidden='true'
                              />
                            ) : (
                              ' Submit'
                            )}
                          </button>
                        </div>

                        <div className='text-center'>
                          <p className='form-text'>We'll get back to you..</p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </MotionInView>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
