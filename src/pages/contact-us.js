import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from '../../appConfig';
const contactUsBackgroundImage = require('../images/bg-images/falcon-50-es.jpg');

export default class IndexPage extends React.Component {
  state = { validated: false, setValidated: false, showThankyouModal: false };

  handleSubmit = event => {
    const form = event.currentTarget;
    let customerMessage = null;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      this.setState({ validated: true });
    } else {
      customerMessage = {
        name: form.elements.name.value,
        email: form.elements.email.value,
        subject: 'Request An Aircraft And Aviation Management Proposal',
        message: form.elements.message.value
      };

      this.setState({
        showModal: true,
        validated: false,
        showThankyouModal: true
      });
      this.refs.contactusForm.reset();
    }
    axios
      .post(`${API_URL}contact-us`, {
        customerMessage
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleThankyouModalClose = () => {
    this.setState({ showThankyouModal: false });
  };

  render() {
    const { validated, showThankyouModal } = this.state;
    return (
      <Layout
        page='contactUs'
        sliderHeading='Contact Us'
        sliderDesc=' Ask us for an Aircraft and Aviation Management Proposal'
        dedicatedToSafety
        backgroundImage={contactUsBackgroundImage}
      >
        <SEO title='Contact Us' />
        <div className='contactUs'>
          <section>
            <div className='contactDetails container'>
              <p className='text-muted'>
                Let us show you how letting AJAX JETS managing your asset can
                transform your private jet owner and flying experience.
                <br />
                Please call 617-943-5387 or submit your enquiry below.
              </p>
            </div>
          </section>
          <section>
            <div className='contactForm container'>
              <Form
                validated={validated}
                onSubmit={this.handleSubmit}
                ref='contactusForm'
              >
                <Form.Group controlId='name'>
                  <Form.Label className='text-muted'>
                    Your Name<span style={{ color: '#dc3545' }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter your name'
                    required
                  />
                </Form.Group>
                <Form.Group controlId='email'>
                  <Form.Label className='text-muted'>
                    Your Email<span style={{ color: '#dc3545' }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='abc@example.com'
                    required
                  />
                </Form.Group>

                <Form.Group controlId='subject'>
                  <Form.Label className='text-muted'>Subject</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Request An Aircraft And Aviation Management Proposal'
                    disabled
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId='message'>
                  <Form.Label className='text-muted'>
                    Your Message<span style={{ color: '#dc3545' }}>*</span>
                  </Form.Label>
                  <Form.Control
                    as='textarea'
                    rows='5'
                    placeholder='Enter your message'
                    required
                  />
                </Form.Group>
                <div style={{ textAlign: 'center' }}>
                  <Button
                    variant='secondary'
                    type='submit'
                    className='sendButton'
                  >
                    Send
                  </Button>
                </div>
              </Form>{' '}
            </div>
          </section>
        </div>

        <Modal
          show={showThankyouModal}
          aria-labelledby='contained-modal-title-vcenter'
          centered
          onHide={this.handleThankyouModalClose}
        >
          <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title-vcenter'>
              We’re On It!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              {' '}
              Thank you for your interest in Ajax Jets. This is to confirm that
              we have received your request for information/quote. Someone from
              our team will be in touch with you shortly.
            </p>
          </Modal.Body>
        </Modal>
      </Layout>
    );
  }
}
