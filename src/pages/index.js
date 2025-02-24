import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Scroller from '../components/scroller';

const backgroundImage = require('../images/bg-images/falcon-900-exterior-large-photo.jpg');

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
    this.state = {
      modalShow: false,
      modalCurrent: 0
    };
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });
  }

  render() {
    return (
      <Layout
        page='home'
        sliderHeading='Your Friend With Jets'
        sliderDesc='Floating fleet of Super Midsize, Midsize and Heavy Jets in the Americas and the Caribbean'
        buttonText='Get A Quote'
        backgroundImage={backgroundImage}
      >
        <SEO title='Private Jets' />
        <section className='page-section services'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-6 privateCharter'>
                <div>
                  <a href='/private-jets'>
                    <div className='row'>
                      <div className='privateCharterSection'>
                        <h3 className='h4 mb-2'>Private Charter</h3>
                        <p className='text-muted mb-0 textDesc'>
                          Book flights on aircraft that we own with great terms
                          and substantial savings. AJAX Jets offers a fixed rate
                          supermid jet card and on-demand one way charter
                        </p>
                      </div>
                      <div className='privateCharterIcon'>
                        <i className='fa fa-user text-primary mb-4 ajax-icon'></i>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className='col-lg-6 col-md-6 col-sm-6 aircraftManagementHome'>
                <div>
                  <a href='/aircraft-management'>
                    <div className='row'>
                      <div className='privateCharterSection'>
                        <h3 className='h4 mb-2'>Aircraft Management </h3>
                        <p className='text-muted mb-0 textDesc'>
                          Let us show you how letting AJAX JETS managing your
                          asset can transform your private jet ownership
                          experience. If you own – or would like to own – a
                          Falcon or Hawker, we would like to talk with you. Call
                          our owner services team at 617-943-5387 or email
                          management@AJAXJETS.com
                        </p>
                      </div>
                      <div className='privateCharterIcon'>
                        <i className='fa fa-plane text-primary mb-4 ajax-icon'></i>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export const imageData = graphql`
  query {
    images: allFile(
      filter: { relativePath: { glob: "portfolio/fullsize/*.jpg" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
