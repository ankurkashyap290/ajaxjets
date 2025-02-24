import React from 'react';
import wyvernLogo from '../images/wyvern-01.jpg';
import arguLogo from '../images/ARGU-Gold.jpeg';

class Footer extends React.Component {
  render() {
    const { dedicatedToSafety } = this.props;
    return (
      <div className='siteFooter'>
        <footer className='py-5'>
          <div className='container'>
            <div className='row '>
              <div className='col-lg-4'>
                <h2 className='mt-0 footerHeading'>About Us</h2>
                <p className='text-muted'>
                  AJAX JETS is an asset management company representing jet
                  owners, and sales agent for Part 135 Operating Certificates
                  who maintain operational control at all times.
                </p>
                <p className='text-muted md-5'>
                  167 Washington Street, Norwell MA 02061
                </p>
                <div className='text-muted footerText'>
                  <a href='mailto:info@AJAXJETS.com '>info@AJAXJETS.com </a>
                </div>
                <div className='text-muted footerText'>617-943-5387</div>
              </div>
              <div className='col-lg-4 col-xs-2' />
              {dedicatedToSafety ? (
                <div className='col-lg-4 col-xs-8'>
                  <h2 className='mt-0 footerHeading'>Dedicated to Safety</h2>
                  <div>
                    <img
                      src={wyvernLogo}
                      alt='wyvernLogo'
                      className='footerLogoImg'
                    />
                    <img
                      src={arguLogo}
                      alt='arguLogo'
                      className='footerLogoImg'
                    />
                  </div>
                </div>
              ) : (
                <div className='col-lg-4 col-xs-8' />
              )}
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
