import Link from 'next/link';
import { MotionInView, varFadeInUp } from '../animate';
import { PATH } from '../paths';

export default function WhyChooseUs() {
  const why = [
    {
      head: 'Accurate health check',
      desc: `Best and authentic health care facilities for accurate check up.`,
    },

    {
      head: 'We listen',
      desc: 'Our specialists will listen to your needs and evaluate your condition from every angle to make the very best healthcare plan for you..',
    },
    {
      head: 'Easy access to care',
      desc: 'At Jentomed Specialist Hospital, every aspect of your care is coordinated and teams of experts work together to provide exactly the care you need.',
    },
  ];
  return (
    <>
      <div
        className='container content-space-2 content-space-b-lg-3'
        id='scrollToContent'
      >
        <MotionInView variants={varFadeInUp}>
          <div className='w-md-75 w-lg-50 text-center mx-md-auto mb-7'>
            <h2>Why choose us?</h2>
          </div>
        </MotionInView>

        <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 mb-5 text-center'>
          {why.map((y, index) => (
            <div className='col mb-3' key={index}>
              <MotionInView variants={varFadeInUp}>
                <div className='card-body'>
                  <h4 className='card-title text-inherit'>{y.head}</h4>
                  <p className='card-subtitle text-body'>{y.desc}</p>
                </div>
              </MotionInView>
            </div>
          ))}
        </div>
        <MotionInView variants={varFadeInUp}>
          <div className='text-center'>
            <Link href={PATH.appointment}>
              <a className='btn btn-outline-primary'>
                Book an appointment now
                <i className='bi-chevron-right small ms-1'></i>
              </a>
            </Link>
          </div>
        </MotionInView>
      </div>
    </>
  );
}
