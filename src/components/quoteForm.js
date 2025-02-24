import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { time } from "../../appConfig";

import "react-datepicker/dist/react-datepicker.css";

export default class IndexPage extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    const { aircraft, fromLocation, toLocation, date, selectedTime, adults, children, infants } = this.props;
    return (
      <Form.Row>
        <Col lg={2} sm={12} md={12}>
          <Form.Group controlId={aircraft}>
            <Form.Control as='select' name='aircraft' required placeholder='Select aircraft'>
              <option value=''>Select Aircraft</option>
              <option value='Falcon 900'>Falcon 900</option>
              <option value='Falcon 50EX/50'>Falcon 50EX/50</option>
              <option value='Hawker 800XP'>Hawker 800XP</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col lg={2} sm={12} md={12}>
          <Form.Group controlId={fromLocation}>
            <Form.Control placeholder='From' required />
          </Form.Group>
        </Col>
        <Col lg={2} sm={12} md={12}>
          <Form.Group controlId={toLocation}>
            <Form.Control name='toLocation' placeholder='To' required />
          </Form.Group>
        </Col>
        <Col lg={2} sm={12} md={12}>
          <Form.Group controlId={date} as={Row}>
            <input type='hidden' id={date} value={this.state.startDate.toUTCString()} />
            <DatePicker selected={this.state.startDate} onChange={this.handleChange} className='text-muted datePicker' minDate={new Date()} />
          </Form.Group>
        </Col>
        <Col lg={1} sm={12} md={12}>
          <Form.Group controlId={selectedTime}>
            <Form.Control as='select' required>
              <option value=''>Time</option>
              {time.map((elem, index) => (
                <option key={index} value={elem}>
                  {elem}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col lg={1} sm={12} md={12}>
          <Form.Group controlId={adults}>
            <Form.Control placeholder='Adults' required />
          </Form.Group>
        </Col>
        <Col lg={1} sm={12} md={12}>
          <Form.Group controlId={children}>
            <Form.Control placeholder='Children' required />
          </Form.Group>
        </Col>
        <Col lg={1} sm={12} md={12}>
          <Form.Group controlId={infants}>
            <Form.Control placeholder='Infants' required />
          </Form.Group>
        </Col>
      </Form.Row>
    );
  }
}
