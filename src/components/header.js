import React from 'react';
import Scrollspy from 'react-scrollspy';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Scroller from './scroller';
import logo from '../images/ajax-jets-logo.svg';
import { pageTitle } from '../../appConfig';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
  }

  render() {
    const {
      page,
      sliderHeading,
      sliderDesc,
      buttonText,
      backgroundImage
    } = this.props;
    const title = sliderHeading.split('and');

    return (
      <>
        <Navbar
          className='navbar navbar-expand-lg navbar-light fixed-top py-3'
          id='mainNav'
          expand='lg'
          collapseOnSelect
        >
          <div className='container'>
            <a className='navbar-brand js-scroll-trigger' href='/'>
              <img src={logo} alt='logo' className='logoImageSize' />
            </a>
            <Navbar.Toggle aria-controls='navbarResponsive' />
            <Navbar.Collapse id='navbarResponsive'>
              <Nav className='navbar-nav ml-auto my-2 my-lg-0'>
                <Scrollspy
                  className='navbar-nav'
                  items={['about', 'services', 'portfolio', 'contact']}
                  currentClassName='active'
                  rootEl={'#mainNav'}
                  offset={-75}
                >
                  <li className='nav-item' key='home'>
                    <Nav.Link className={'js-scroll-trigger'} href='/'>
                      Home
                    </Nav.Link>
                  </li>
                  <li className='nav-item' key='aboutUs'>
                    <Nav.Link className={'js-scroll-trigger'} href='/about-us'>
                      About Us
                    </Nav.Link>
                  </li>
                  <li className='nav-item' key='ourAircraft'>
                    <Nav.Link
                      className={'js-scroll-trigger'}
                      href='/our-aircraft'
                    >
                      Our Aircraft
                    </Nav.Link>
                  </li>
                  <li className='nav-item' key='privateCharter'>
                    <Nav.Link
                      className={'js-scroll-trigger'}
                      href='/private-jets'
                    >
                      Private Charter
                    </Nav.Link>
                  </li>
                  <li className='nav-item' key='aircraftManagement'>
                    <Nav.Link
                      className={'js-scroll-trigger'}
                      href='/aircraft-management'
                    >
                      Aircraft Management & Acquisitions
                    </Nav.Link>
                  </li>
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <header
          className={`masthead ${pageTitle[page]}`}
          style={{
            backgroundImage: `url('${backgroundImage}')`
          }}
        >
          <div className='headContainer'>
            <div style={{ height: ' 100%' }}>
              <div className='row h-100 align-items-center justify-content-center '>
                <div className='col-lg-10  homePageBorder text-center'>
                  <div className='heading'>
                    {sliderHeading.includes('and') ? (
                      <h1 className='text-uppercase text-white font-weight-bold sliderHeading'>
                        {title[0]}
                        <br />
                        {title[1]}
                      </h1>
                    ) : (
                      <h1 className='text-uppercase text-white font-weight-bold sliderHeading'>
                        {' '}
                        {title}{' '}
                      </h1>
                    )}
                  </div>
                  <div>
                    <p
                      className='text-white sliderDesc '
                      style={{ fontWeight: '500 !important' }}
                    >
                      <span className='requestAQuoteBorder contactUsBorder'>
                        {' '}
                        {sliderDesc}
                      </span>
                    </p>
                    {buttonText ? (
                      <Button href='/request-a-quote' className='button'>
                        {buttonText}
                      </Button>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
