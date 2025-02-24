import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { privateJets } from '../../appConfig';
import JetCard from '../components/jetCard';

const aboutUsBackgroundImage = require('../images/bg-images/falcon-50-es.jpg');

export default class IndexPage extends React.Component {
  renderPrivateJetsList = jets => {
    return (
      <div className='row'>
        {jets.map((item, index) => {
          return (
            <div className='col-lg-4 col-md-4 jetCard' key={`jets_${index}`}>
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
        page='aboutUs'
        sliderHeading='About Us'
        sliderDesc=''
        dedicatedToSafety
        backgroundImage={aboutUsBackgroundImage}
      >
        <SEO title='About Us' />
        <div className='aboutUs'>
          <section>
            <section className='page-section titleHeader'>
              <div className='container'>About Us</div>
            </section>
            <div className='aboutUsSection container'>
              <p className='text-muted  aboutUsDesc'>
                AJAX Jets is a boutique aircraft management and charter company
                designed to align with your lifestyle and financial objectives.
                AJAX Jets provides specialized services to private aircraft
                owners and flyers throughout the world.
              </p>
              <p className='text-muted aboutUsDesc'>We currently manage:</p>
            </div>

            <div className=' container'>
              <div className='text-muted aboutUsCards'>
                <div className='mainPrivateJets'>
                  {privateJets.map((item, index) => {
                    return (
                      <div className='privateJetSection' key={index}>
                        <section className='privateJets'>
                          {this.renderPrivateJetsList(item.jets)}
                        </section>
                      </div>
                    );
                  })}
                </div>
              </div>
              <p className='text-muted aboutUsDesc'>
                {' '}
                Private air travelers today want to fly one-way – without
                dealing with a middle man and hefty repositioning (dead head)
                fees. Aircraft owners want the predictable cash flow that our
                Charter Management program delivers. If you fly, or want to fly,
                on Falcons or Hawkers, AJAX Jets is here to make your life
                simpler.
              </p>
              <p
                className='text-muted manageHeading'
                style={{
                  paddingBottom: '4%'
                }}
              >
                Justin Sullivan
                <br />
                Chief Executive Officer
              </p>
              <p
                className='text-muted manageHeading'
                style={{
                  paddingBottom: '4%'
                }}
              >
                Edward Weiler
                <br />
                Chief Financial Officer
              </p>
              <p
                className='text-muted manageHeading'
                style={{
                  paddingBottom: '4%'
                }}
              >
                Nicholas Conte
                <br />
                EVP and Head of Charter Sales nicholas@ajaxjets.com
              </p>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}
