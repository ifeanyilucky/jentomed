import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';

export default function AppointmentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    control,
  } = useForm();

  const convertToBase64 = (file) => {
    const reader = new FileReader();

    reader.onloadend = () => {};
  };

  const appointmentSubmit = async (values) => {
    // await axios
    //   .post('http://localhost:3200/api/v1/static/playground', formdata, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   })
    //   .then((res) => console.log(res));

    console.log(values);
    reset();
  };
  return (
    <>
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
                  name='hireUsFormNameFirstName'
                  id='hireUsFormFirstName'
                  placeholder='First name'
                  multiple
                  aria-label='First name'
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
                  name='hireUsFormNameLastName'
                  id='hireUsFormLasttName'
                  placeholder='Last name'
                  aria-label='Last name'
                  {...register('lastName')}
                />
              </div>
            </div>
          </div>

          <div className='row gx-3'>
            <div className='col-sm-6'>
              <div className='mb-3'>
                <label className='form-label' for='hireUsFormWorkEmail'>
                  Email address
                </label>
                <input
                  type='email'
                  className='form-control form-control-lg'
                  name='hireUsFormNameWorkEmail'
                  id='hireUsFormWorkEmail'
                  placeholder='email@site.com'
                  aria-label='email@site.com'
                  {...register('email')}
                />
              </div>
            </div>

            <div className='col-sm-6'>
              <div className='mb-3'>
                <label className='form-label' for='hireUsFormPhone'>
                  Phone <span className='form-label-secondary'>(Optional)</span>
                </label>
                <input
                  type='text'
                  className='form-control form-control-lg'
                  name='hireUsFormNamePhone'
                  id='hireUsFormPhone'
                  placeholder='+x(xxx)xxx-xx-xx'
                  aria-label='+x(xxx)xxx-xx-xx'
                  {...register('tel')}
                />
              </div>
            </div>
          </div>

          <DatePicker
            allowSameDay
            {...register('date')}
            placeholderText='Select appointment date'
            onSelect={(date) => {
              setValue('date', date);
            }}
            showTimeSelect
          />

          <div className='my-6'>
            <input type='file' on name='picture' />
          </div>

          <div className='mb-3'>
            <label className='form-label' for='hireUsFormDetails'>
              Symptoms/Note
            </label>
            <textarea
              className='form-control form-control-lg'
              name='hireUsFormNameDetails'
              id='hireUsFormDetails'
              placeholder='Tell us about your ...'
              aria-label='Tell us about your ...'
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
