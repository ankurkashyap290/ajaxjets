/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';
import './layout.scss';

const getScrollNode = element => {
  return (
    element.ownerDocument.scrollingElement ||
    element.ownerDocument.documentElement
  );
};

const isScrolled = element => {
  const scrollNode = getScrollNode(element);
  return scrollNode.scrollTop > 0;
};

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.siteContainer = React.createRef();
    this.state = {
      scrolled: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const element = this.siteContainer.current;
    this.setState({
      scrolled: isScrolled(element)
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const element = this.siteContainer.current;
    this.setState({
      scrolled: isScrolled(element)
    });
  }

  render() {
    let className = 'site-container';
    if (this.props.className) className += ` ${this.props.className}`;
    if (this.state.scrolled) className += ' navbar-scrolled';
    const {
      page,
      sliderHeading,
      sliderDesc,
      buttonText,
      dedicatedToSafety,
      backgroundImage,
      carousel
    } = this.props;
    return (
      <div className={className} ref={this.siteContainer} id='page-top'>
        <Header
          page={page}
          sliderDesc={sliderDesc}
          sliderHeading={sliderHeading}
          buttonText={buttonText}
          backgroundImage={backgroundImage}
          carousel={carousel}
        />
        <main className='mainContainer'>{this.props.children}</main>
        <Footer dedicatedToSafety={dedicatedToSafety} />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
