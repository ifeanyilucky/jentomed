import { forwardRef } from 'react';
import { Helmet } from 'react-helmet-async';

const Page = forwardRef(
  ({ children, title = '', meta = '', description = '', ...other }, ref) => {
    return (
      <>
        <Helmet prioritizeSeoTags>
          <title>
            {!title
              ? 'Jentomed Specialist Hospital is a multi-disciplinary private healthcare facility focusing on the best possible clinical outcomes for our patients and their families.'
              : `${title} - Jentomed Specialist Hospital`}
          </title>
          <meta name={`${meta}`} value='notImportant' />
          <meta name='description' content={`${description}`} />
          <link rel='canonical' href='https://www.jentomed.com' />
          <meta
            property='og:title'
            content={`${title} - Jentomed Specialist Hospital`}
          />
          <meta property='og:url' content='https://www.jentomed.com' />
          <meta property='og:description' content={description} />
          <meta
            property='og:image'
            content='/static/images/jentomed-logo.jpg'
          />
        </Helmet>
        <div ref={ref}>{children}</div>
      </>
    );
  }
);

export default Page;
