import React from 'react';
import Layout from './layout';
import SEO from './seo';
import { jetImages } from '../../appConfig';
import { Carousel } from 'react-responsive-carousel';
import { Button } from 'react-bootstrap';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import wyvernLogo from '../images/wyvern-01.jpg';
import arguLogo from '../images/ARGU-Gold.jpeg';
import SeatsIcon from '../images/airline_seat_recline_extra-24px.svg';

const JetDescription = ({ pageContext: { fleet } }) => {
  const found = jetImages.find(item => item.title === fleet.title);
  const slides = [...found.imgs];
  const bgImage = found.bgImage;
  const title = fleet.title.split('and');
  return (
    <Layout
      page='jetDescription'
      sliderHeading={`${fleet.title}`}
      sliderDesc=''
      backgroundImage={bgImage}
      dedicatedToSafety
    >
      <SEO title='Jet Description' />
      <div className='jetDescription'>
        <section className='page-section titleHeader'>
          {fleet.title.includes('and') ? (
            <div className='container '>
              {title[0]}
              <br />
              {title[1]}
            </div>
          ) : (
            <div className='container '> {title}</div>
          )}
        </section>
        <section>
          <div className='sliderSection container'>
            <div className='row'>
              <div className='col-lg-6 col-md-6 '>
                <Carousel
                  autoPlay
                  infiniteLoop={true}
                  showIndicators={false}
                  className='carouselCustomization'
                  dynamicHeight={true}
                >
                  {slides.map((item, index) => (
                    <div className='carouselSection' key={`carousel_${index}`}>
                      <img src={item} alt='carousel' className='carouselImg' />
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className='col-lg-6 text-muted col-md-6 '>
                {fleet.desc}

                <p style={{ marginTop: '16px' }}> {fleet.priceHeading}</p>
                <ul>
                  {' '}
                  <li>{fleet.priceDetails}</li>
                </ul>

                <p> {fleet.flightSpecsHeading}</p>
                <ul>
                  {fleet.flightSpecsDetails.map((specs, index) => (
                    <li key={`specs_${index}`}>{specs}</li>
                  ))}
                </ul>

                {fleet.quoteHeading}
              </div>
            </div>
          </div>
        </section>
        <section>
          <div
            className='sliderSection container'
            style={{ paddingBottom: '4%', paddingTop: '0px' }}
          >
            <div className='row'>
              <div className='col-lg-6 col-md-6 fleetDesc'>
                <h3 className='h4 mb-2'>Safety and Compliance </h3>
                <p className='text-muted mb-0 adviceDesc'>
                  All AJAX flights pass diligence background check from ARG/US
                  and Wyvern
                </p>
                <div>
                  <img src={wyvernLogo} alt='wyvernLogo' className='logoImg' />
                  <img src={arguLogo} alt='arguLogo' className='logoImg' />
                </div>
              </div>

              <div className='col-lg-6 col-md-6 fleetDesc'>
                <h3 className='h4 mb-2'>
                  {' '}
                  {fleet.title.includes('and') ? (
                    <span>
                      {title[0]} And
                      <br />
                      {title[1]}
                    </span>
                  ) : (
                    <span> {title}</span>
                  )}
                  &nbsp; Features
                </h3>

                {fleet.wifi ? (
                  <div className='wifi'>
                    <i className='fa fa-wifi iconSize' aria-hidden='true'></i>
                    <span style={{ paddingLeft: '20px', fontSize: '1.125rem' }}>
                      {' '}
                      Wi-Fi
                    </span>
                  </div>
                ) : null}
                <div className='seats'>
                  <img src={SeatsIcon} alt='seatIcon' className='seatIcon' />
                  <span style={{ paddingLeft: '45px', fontSize: '1.125rem' }}>
                    {fleet.seats}
                  </span>
                </div>
                <div>
                  <Button href='/request-a-quote' className='button'>
                    Get A Quote
                  </Button>
                  <Button href='/contact-us' className='button'>
                    Request An Aircraft And Aviation Management Proposal
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default JetDescription;
