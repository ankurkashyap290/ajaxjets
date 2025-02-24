import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { privateJets } from '../../appConfig';
import JetCard from '../components/jetCard';
import { Button } from 'react-bootstrap';

const privateJet = require('../images/bg-images/privateJets.jpg');

export default class IndexPage extends React.Component {
  renderPrivateJetsList = jets => {
    return (
      <div className='row'>
        {jets.map((item, index) => {
          return (
            <div className='col-lg-4 col-md-4 jetCard' key={`jetCard_${index}`}>
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
        page='privateJets'
        sliderHeading='Charter Our Jets'
        sliderDesc='Nationwide, Floating Fleet of Midsize and Super Mids'
        dedicatedToSafety={true}
        backgroundImage={privateJet}
      >
        <SEO title='Private Jets' />
        <div className='mainPrivateJets'>
          <section className='page-section titleHeader'>
            <div className='container'>Charter Our Jets</div>
          </section>
          <section>
            <div className='contentSection container'>
              <p className='text-muted mb-0 adviceDesc'>
                AJAX JETS is your premier charter source for business and
                leisure travel. Our team will find the perfect aircraft to fit
                your travel needs, so you have complete control over your travel
                experience.
              </p>
              <p className='text-muted mb-0 adviceDesc'>
                When you book with AJAX, you’re booking with the owner of the
                aircraft, and your quote and trip sheet come directly from the
                air carrier, so you know you’re getting the very lowest price
                from the supplier who cares about you and your satisfaction.
                Call our charter team now: 617-943-5387
              </p>
            </div>
          </section>

          <section>
            <div className='buttonSection'>
              <Button href='/request-a-quote' className='button'>
                <h3>Get A Quote</h3>
              </Button>
            </div>
          </section>

          {privateJets.map((item, index) => {
            return (
              <div className='privateJetSection' key={index}>
                <section className='page-section titleHeader'>
                  <div className='container'>
                    {item.title}
                    <span className='jetsCount'>{item.jets.length}</span>
                  </div>
                </section>
                <section
                  className='privateJets'
                  style={{ paddingBottom: '4%' }}
                >
                  <div className='container'>
                    {this.renderPrivateJetsList(item.jets)}
                  </div>
                </section>
              </div>
            );
          })}
        </div>
      </Layout>
    );
  }
}
