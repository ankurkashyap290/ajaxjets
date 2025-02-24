import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import JetCard from '../components/jetCard';
import { Button } from 'react-bootstrap';
import { aircraftManagement } from '../../appConfig';
import wyvernLogo from '../images/wyvern-01.jpg';
import arguLogo from '../images/ARGU-Gold.jpeg';

const aircraftManagemnetBackgroundImage = require('../images/bg-images/aircraftManagement.jpg');

export default class IndexPage extends React.Component {
  renderPrivateJetsList = jets => {
    return (
      <div className='row'>
        {jets.map((item, index) => {
          return (
            <div className='col-lg-4 col-md-4 jetCard' key={`airmgt_${index}`}>
              <JetCard
                img={item.img}
                title={item.title}
                wifi={item.wifi}
                seats={item.seats}
                flightNo={item.flightNo}
              />
            </div>
          );
        })}
      </div>
    );
  };
  render() {
    return (
      <Layout
        page='aircraftManagement'
        sliderHeading='Aircraft Management and Acquisitions'
        sliderDesc=''
        dedicatedToSafety
        backgroundImage={aircraftManagemnetBackgroundImage}
      >
        <SEO title='Aircraft Management' />
        <div className='aircraftManagement'>
          <section className='titleHeader'>
            <div className='container safetyAndCompliance'>
              AIRCRAFT MANAGEMENT AND ACQUISITIONS
            </div>
          </section>
          <section>
            <div className='contentSection  container'>
              <ul className='listIcon'>
                <li className='text-muted mb-0 managementDesc' key='content1'>
                  <i className='fa fa-plane fa-rotate-270'></i>&nbsp; We’ll take
                  charge as your complete flight operations department. We’ll
                  ensure your aircraft is maintained and ready when needed, 24 x
                  7 x 365.
                </li>
                <li className='text-muted mb-0 managementDesc' key='content2'>
                  <i className='fa fa-plane fa-rotate-270'></i>&nbsp; We handle
                  all flight planning and operations, permitting & customs
                  clearance, fuel, landing fees, along with employing and
                  training pilots, crew scheduling and travel.
                </li>
                <li className='text-muted mb-0 managementDesc' key='content3'>
                  <i className='fa fa-plane fa-rotate-270'></i>&nbsp; Our
                  concierge department will manage all of your travel
                  arrangements, including baggage handling, gourmet catering,
                  ground transportation and flight following.
                </li>

                <li className='text-muted mb-0 managementDesc' key='content4'>
                  <i className='fa fa-plane fa-rotate-270'></i>&nbsp; Your asset
                  will enter our Charter Management program whereby it is
                  dedicated to charter as a cash generating asset. Whenever you
                  want to fly, you’ll use your own jet, or you can “flex up or
                  flex down” into one of our other Falcon 900, Falcon 50EX,
                  Falcon 50 or Hawker 800XP jets, for the most mission
                  flexibility.
                </li>
                <li className='text-muted mb-0 managementDesc' key='content5'>
                  <i className='fa fa-plane fa-rotate-270'></i>&nbsp; Your asset
                  will be rated ARG/US Gold, with experienced pilots who pass
                  ARG/US and Wyvern due diligence reporting, and exceed FAA
                  standards.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div className='buttonSection'>
              <Button href='/contact-us' className='button'>
                <h3>Request An Aircraft And Aviation Management Proposal</h3>
              </Button>
            </div>
          </section>

          {aircraftManagement.map((item, index) => {
            return (
              <div key={`airmgt1-${index}-${item.flightNo}`}>
                <section className='page-section titleHeader safetyAndCompliance'>
                  <div className='container'>
                    {item.title}
                    <span className='jetsCount'>{item.jets.length}</span>
                  </div>
                </section>
                <section className='privateJets'>
                  <div className='container'>
                    {this.renderPrivateJetsList(item.jets)}
                  </div>
                </section>
              </div>
            );
          })}

          <section className='page-section titleHeader'>
            <div className='container safetyAndCompliance'>
              Safety and Compliance
            </div>
          </section>
          <section style={{ paddingBottom: '4%' }}>
            <div className='contentSection  container'>
              <p className='text-muted mb-0 managementDesc'>
                All AJAX flights pass diligence background check from ARG/US and
                Wyvern
              </p>
              <div style={{ paddingLeft: '20px' }}>
                <img src={wyvernLogo} alt='wyvernLogo' className='logoImg' />
                <img src={arguLogo} alt='arguLogo' className='logoImg' />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}
