import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { ourAircraft } from '../../appConfig';
import OurAircraftCard from '../components/ourAircraftCard';

const aircraftImage = require('../images/bg-images/Falcon-90-Exte.jpg');

export default class IndexPage extends React.Component {
  renderOurAircraftList = jets => {
    return (
      <div className='row'>
        {jets.map((item, index) => {
          return (
            <div
              className='col-lg-4 col-md-4 jetCard'
              key={`aircraftCard_${index}`}
            >
              <OurAircraftCard
                img={item.img}
                title={item.title}
                desc={item.desc}
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
        page='ourAircraft'
        sliderHeading='Our Aircraft'
        sliderDesc=''
        dedicatedToSafety={true}
        backgroundImage={aircraftImage}
      >
        <SEO title='Our Aircraft' />
        <div className='mainOurAircraft'>
          {ourAircraft.map((item, index) => {
            return (
              <div className='aircraftSection' key={index}>
                <section className='page-section titleHeader'>
                  <div className='container'>{item.title}</div>
                </section>
                <section
                  className='privateJets'
                  style={{ paddingBottom: '4%' }}
                >
                  <div className='container'>
                    {this.renderOurAircraftList(item.jets)}
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
