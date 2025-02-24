import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Tabs, Tab } from 'react-bootstrap';
import OneWayForm from '../components/oneWayForm';
import RoundTripForm from '../components/roundTripForm';
import MultiLegForm from '../components/multiLegForm';
const requestAQuoteBackgroundImage = require('../images/bg-images/falcon-50-es.jpg');

export default class IndexPage extends React.Component {
  state = { validated: false, setValidated: false };

  handleSubmit = event => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
  };

  render() {
    return (
      <Layout
        page='requestAQuote'
        sliderHeading='Get A Quote'
        sliderDesc=' Ask us for a Quote '
        dedicatedToSafety
        backgroundImage={requestAQuoteBackgroundImage}
      >
        <SEO title='Request A Quote' />
        <div className='requestAQuote'>
          <section>
            <div className='requestForm container'>
              <Tabs
                defaultActiveKey='oneWay'
                style={{ textTransform: 'uppercase' }}
              >
                <Tab eventKey='oneWay' title='One Way'>
                  <OneWayForm />
                </Tab>
                <Tab eventKey='roundTrip' title='Round Trip'>
                  <RoundTripForm />
                </Tab>
                <Tab eventKey='multiLeg' title='Multi Leg'>
                  <MultiLegForm />
                </Tab>
              </Tabs>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}
