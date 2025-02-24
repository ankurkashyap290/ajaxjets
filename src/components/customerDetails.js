import React from 'react';
import { Form, Button, Row, Col, Modal } from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from '../../appConfig';

export default class IndexPage extends React.Component {
  state = {
    validated: false,
    setValidated: false,
    showThankyouModal: false
  };

  handleSubmit = event => {
    const { quoteData, type, onClose } = this.props;

    let customerData = null;
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      this.setState({ validated: true, showModal: false });
    } else {
      customerData = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        phoneNo: form.elements.phoneNo.value,
        currentlyTravel: form.elements.currentlyTravel.value,
        flyPrivately: form.elements.flyPrivately.value
      };
      this.setState({
        validated: false,
        showThankyouModal: true
      });
      this.refs.customerDetailForm.reset();
    }
    axios
      .post(`${API_URL}send-email`, {
        quoteData,
        type,
        customerData
      })
      .then(function(response) {
        console.log(response);
        onClose();
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
    const { showModal, onClose } = this.props;

    return (
      <div className='container  mt-3'>
        <Modal
          show={showModal}
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          centered
          onHide={onClose}
        >
          <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title-vcenter'>
              Enter Your Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              validated={validated}
              onSubmit={this.handleSubmit}
              ref='customerDetailForm'
            >
              <Form.Group as={Row} controlId='firstName'>
                <Form.Label className='text-muted' column sm='4'>
                  First Name
                </Form.Label>
                <Col sm='8'>
                  <Form.Control placeholder='First Name' required />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId='lastName'>
                <Form.Label className='text-muted' column sm='4'>
                  Last Name
                </Form.Label>
                <Col sm='8'>
                  <Form.Control placeholder='Last Name' required />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId='email'>
                <Form.Label className='text-muted' column sm='4'>
                  Your Email Address
                </Form.Label>
                <Col sm='8'>
                  <Form.Control placeholder='abc@example.com' required />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId='phoneNo'>
                <Form.Label className='text-muted' column sm='4'>
                  Phone Number
                </Form.Label>
                <Col sm='8'>
                  <Form.Control placeholder='Phone Number' required />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId='currentlyTravel'>
                <Form.Label className='text-muted' column sm='4'>
                  How do you currently travel?
                </Form.Label>
                <Col sm='8'>
                  <Form.Control as='select' required>
                    <option value=''>Select Aircraft</option>
                    <option value='Jet Card/ Fractional'>
                      Jet Card/ Fractional
                    </option>
                    <option value='Charter'>Charter</option>
                    <option value='Commercial'>Commercial</option>
                  </Form.Control>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId='flyPrivately'>
                <Form.Label className='text-muted' column sm='4'>
                  How many hours do you fly privately per year?
                </Form.Label>
                <Col sm='8'>
                  <Form.Control as='select' required>
                    <option value=''>Select hours</option>
                    <option value='over 100 hours'>over 100 hours</option>
                    <option value='50-75 hours'>50-75 hours</option>
                    <option value='25-49 hours'>25-49 hours</option>
                    <option value='10-24 hours'>10-24 hours</option>
                    <option value='1-9 hours'>1-9 hours</option>
                    <option value='Zero'>Zero</option>
                    <option value='I do not fly privately'>
                      I do not fly privately
                    </option>
                  </Form.Control>
                </Col>
              </Form.Group>
              <div style={{ textAlign: 'center' }}>
                <Button variant='primary' type='submit' className='sendButton'>
                  Submit Request
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
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
              Thank you for your interest in Ajax Jets. This is to confirm that
              we have received your request for information/quote. Someone from
              our team will be in touch with you shortly.
            </p>
            {/* <p>
              If you have any questions, don’t hesitate to contact us:
              <br />
              <a href='mailto:charter@privateflite.com'>
                charter@privateflite.com
              </a>
              <br />
              <a href='tel:+1-781-916-9544'>+1-781-916-9544</a>
            </p> */}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
