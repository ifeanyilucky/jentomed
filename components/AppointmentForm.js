import { useState, useRef, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker, { TimePicker } from 'sassy-datepicker';
import axios from 'axios';
// import 'react-datepicker/dist/react-datepicker.css';

export default function AppointmentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    reset,
    control,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      tel: '',
      date: '',
      time: '',
    },
  });

  const { date } = getValues();
  const [sampleDate, setSampleDate] = useState(new Date());
  const [sampleTime, setSampleTime] = useState({
    minutes: 0,
    hours: 0,
  });

  const onClickOutside = () => {
    setDateOpen(false);
  };

  const [dateOpen, setDateOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current === !ref.current.contains(e.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutside]);

  const [formState, setFormState] = useState({
    success: false,
    error: false,
    loading: false,
  });
  const appointmentSubmit = async (values) => {
    setFormState({ loading: true });
    await axios
      .post('/api/appointment', values)
      .then((res) => {
        console.log(res);
        setFormState({ success: true, loading: false });
      })
      .catch((err) => {
        console.log(err);
        setFormState({ error: true, loading: false });
      });

    console.log(values);
    // reset();
  };
  const { success, error, loading } = formState;
  return (
    <>
      {success === true ? (
        <div className='container mt-5'>
          <div className='alert alert-success' role='alert'>
            <h5 className='alert-head'>Thank you</h5>
            <p>We have recieved your message</p>
          </div>
        </div>
      ) : null}

      <div className='card-body'>
        <form onSubmit={handleSubmit(appointmentSubmit)}>
          <div className='row gx-3'>
            <div className='col-sm-6'>
              <div className='mb-3'>
                <label className='form-label' for='hireUsFormFirstName'>
                  First name
                </label>
                <input
                  type='text'
                  className='form-control form-control-lg'
                  multiple
                  {...register('firstName')}
                />
              </div>
            </div>

            <div className='col-sm-6'>
              <div className='mb-3'>
                <label className='form-label' for='hireUsFormLasttName'>
                  Last name
                </label>
                <input
                  type='text'
                  className='form-control form-control-lg'
                  aria-label='Last name'
                  {...register('lastName')}
                />
              </div>
            </div>
          </div>

          <div className='row gx-3'>
            <div className='col-sm-6'>
              <div className='mb-3'>
                <label className='form-label' htmlFor='hireUsFormWorkEmail'>
                  Email address
                </label>
                <input
                  type='email'
                  className='form-control form-control-lg'
                  name='email'
                  {...register('email')}
                />
              </div>
            </div>

            <div className='col-sm-6'>
              <div className='mb-3'>
                <label className='form-label' htmlFor='hireUsFormPhone'>
                  Phone number
                </label>
                <input
                  type='tel'
                  className='form-control form-control-lg'
                  name='hireUsFormNamePhone'
                  id='tel'
                  {...register('tel')}
                />
              </div>
            </div>
          </div>
          <div className='row gx-3'>
            <div className='col-sm-6'>
              <label className='form-label' htmlFor='hireUsFormDetails'>
                Preferred date
              </label>
              <div class='dropdown'>
                <button
                  className='btn btn-outline dropdown-toggle w-100'
                  type='button'
                  id='dropdownMenu2'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded={dateOpen ? 'false' : 'true'}
                  onClick={() => {
                    if (dateOpen === false) setDateOpen(true);
                    else setDateOpen(false);
                  }}
                >
                  {!date ? 'Pick a date' : date}
                </button>
                <div
                  ref={ref}
                  className={dateOpen ? 'dropdown-menu show' : 'dropdown-menu'}
                  aria-labelledby='dropdownMenu2'
                >
                  <div class='dropdown-item'>
                    <DatePicker
                      onChange={(newDate) => {
                        setValue('date', newDate.toDateString());
                        setDateOpen(false);
                      }}
                      minDate={new Date(2021, 10, 16)}
                      selected={sampleDate}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-6'>
              <div>
                <label className='form-label' for='hireUsFormDetails'>
                  Preferred time
                </label>
              </div>
              <TimePicker
                onChange={(newTime) => {
                  setValue('time', newTime);
                }}
                selected={sampleTime}
              />
            </div>
          </div>

          <div className='mb-3'>
            <label className='form-label' for='hireUsFormDetails'>
              Symptoms/Note
            </label>
            <textarea
              className='form-control form-control-lg'
              name='details'
              rows='4'
              {...register('message')}
            />
          </div>

          <div className='d-grid'>
            <button type='submit' className='btn btn-primary btn-lg'>
              Send inquiry
            </button>
          </div>

          <div className='text-center'>
            <p className='form-text'>We'll get back to you..</p>
          </div>
        </form>
      </div>
    </>
  );
}
