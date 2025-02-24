import React from "react";
import { Form, Button } from "react-bootstrap";
import CustomerDetails from "./customerDetails";
import QuoteForm from "./quoteForm";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
export default class IndexPage extends React.Component {
  state = {
    validated: false,
    setValidated: false,
    startDate: new Date(),
    showModal: false,
    quoteData: null
  };

  handleSubmit = event => {
    const form = event.currentTarget;
    // const { startDate } = this.state;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      this.setState({ validated: true, showModal: false });
    } else {
      const tempQuoteData = {
        legName: "One way",
        selectedAircraft: form.elements.aircraft.value,
        fromLocation: form.elements.fromLocation.value,
        toLocation: form.elements.toLocation.value,
        date: moment(form.elements.startDate.value).format("DD-MM-YYYY"),
        time: form.elements.time.value,
        adults: form.elements.adults.value,
        children: form.elements.children.value,
        infants: form.elements.infants.value
      };
      this.setState({
        showModal: true,
        validated: false,
        quoteData: [{ ...tempQuoteData }]
      });
      this.refs.onewayForm.reset();
    }
  };

  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { validated, showModal, quoteData } = this.state;

    return (
      <div className='container  mt-3'>
        <Form validated={validated} onSubmit={this.handleSubmit} ref='onewayForm'>
          <QuoteForm aircraft='aircraft' fromLocation='fromLocation' toLocation='toLocation' date='startDate' selectedTime='time' adults='adults' children='children' infants='infants' />
          <div style={{ textAlign: "center" }}>
            <Button className='sendButton' type='submit'>
              Get A Quote
            </Button>
          </div>
        </Form>
        <CustomerDetails showModal={showModal} onClose={this.handleModalClose} quoteData={quoteData} type='One Way' />
      </div>
    );
  }
}
