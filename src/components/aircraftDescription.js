import React from 'react';
import Layout from './layout';
import SEO from './seo';
import { aircraftImages } from '../../appConfig';
import { Carousel } from 'react-responsive-carousel';
import { Button } from 'react-bootstrap';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const AircraftDescription = ({ pageContext: { aircraft } }) => {
  const found = aircraftImages.find(item => item.title === aircraft.title);
  const slides = [...found.imgs];
  const bgImage = found.bgImage;

  const title = aircraft.title.split('and');
  return (
    <Layout
      page='aircraftDescription'
      sliderHeading={`${aircraft.title}`}
      sliderDesc=''
      backgroundImage={bgImage}
      dedicatedToSafety
    >
      <SEO title='Aircraft Description' />
      <div className='aircraftDescription'>
        <section>
          <div className='page-section titleHeader'>
            {aircraft.title.includes('and') ? (
              <div className='container '>
                {title[0]} And
                <br />
                {title[1]}
              </div>
            ) : (
              <div className='container '> {title}</div>
            )}
          </div>
          <div className='sliderSection container'>
            <div className='row'>
              <div className='col-lg-6 col-md-6 '>
                <div className='row'>
                  <div className='col-lg-12 col-md-12 text-muted aircraftDesc'>
                    {aircraft.desc}

                    <p style={{ marginTop: '16px' }}>
                      {' '}
                      {aircraft.priceHeading}
                    </p>
                    <ul>
                      {' '}
                      <li>{aircraft.priceDetails}</li>
                    </ul>

                    <p> {aircraft.flightSpecsHeading}</p>
                    <ul>
                      {aircraft.flightSpecsDetails.map((specs, index) => (
                        <li key={`specs_${index}`}>{specs}</li>
                      ))}
                    </ul>

                    {aircraft.quoteHeading}
                    <div>
                      <Button href='/request-a-quote' className='button'>
                        {aircraft.title} Quote
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6 fleetDesc'>
                <Carousel
                  autoPlay
                  showIndicators={false}
                  className='carouselCustomization'
                  dynamicHeight={true}
                  infiniteLoop={true}
                >
                  {slides.map((item, index) => (
                    <div className='carouselSection' key={`carousel_${index}`}>
                      <img src={item} alt='carousel' className='carouselImg' />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
          <section
            className='page-section'
            style={{ background: '#fff', marginTop: '2.3%' }}
          >
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6 col-md-6 aircraftMaintenance'>
                  <h3 className='h4 mb-2 aircraftHeadingFont'>
                    Aircraft Management
                  </h3>
                  <p className='text-muted mb-0 aircraftDesc '>
                    {aircraft.aircraftManagement}
                  </p>
                </div>
                <div className='col-lg-6 col-md-6 aircraftMaintenance'>
                  <h3 className='h4 mb-2 aircraftHeadingFont'>
                    Aircraft Maintenance
                  </h3>
                  <p className='text-muted mb-0 aircraftDesc'>
                    {aircraft.aircraftMaintenance}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className='page-section acquisitionHeading'>
            <div className='container '>Aircraft Acquisition</div>
          </section>
          <div className='container ' style={{ paddingBottom: '3%' }}>
            <p className='text-muted aircraftDesc'>
              {aircraft.aircraftAcquisition}
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default AircraftDescription;
