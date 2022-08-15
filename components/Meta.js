import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Meta({ title }) {
  const router = useRouter();

  return (
    <Head>
      <meta charSet='utf-8' />
      <title>{title} - We're healthcare professionals.</title>
      <meta
        name='description'
        content="We're committed to the best quality of life through preventive and clinical medicine"
      />

      <meta name='theme-color' content='#000000' />

      <meta name='og:type' content='article' />
      <meta
        name='og:title'
        content="We're committed to the best quality of life through preventive and clinical medicine"
      />

      <meta name='og:url' content='https://jentomed.com' />
      <meta
        name='og:description'
        content="We're committed to the best quality of life through preventive and clinical medicine"
      />
      <meta
        name='og:image'
        content='https://res.cloudinary.com/thebrickng/image/upload/v1657288394/jentomed-assets/WhatsApp_Image_2022-07-03_at_10.35.14_AM_cairhb.jpg'
      />
    </Head>
  );
}
