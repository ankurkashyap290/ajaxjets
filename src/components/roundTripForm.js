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
      const tempOutboundQuoteData = {
        legName: "Outbound",
        selectedAircraft: form.elements.outboundAircraft.value,
        fromLocation: form.elements.outboundFromLocation.value,
        toLocation: form.elements.outboundToLocation.value,
        date: moment(form.elements.outboundStartDate.value).format("DD-MM-YYYY"),
        time: form.elements.outboundTime.value,
        adults: form.elements.outboundAdults.value,
        children: form.elements.outboundChildren.value,
        infants: form.elements.outboundInfants.value
      };
      const tempInboundQuoteData = {
        legName: "Inbound",
        selectedAircraft: form.elements.inboundAircraft.value,
        fromLocation: form.elements.inboundFromLocation.value,
        toLocation: form.elements.inboundToLocation.value,
        date: moment(form.elements.inboundStartDate.value).format("DD-MM-YYYY"),
        time: form.elements.inboundTime.value,
        adults: form.elements.inboundAdults.value,
        children: form.elements.inboundChildren.value,
        infants: form.elements.inboundInfants.value
      };

      this.setState({
        showModal: true,
        validated: false,

        quoteData: [tempOutboundQuoteData, tempInboundQuoteData]
      });
      this.refs.roundtripForm.reset();
    }
  };
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { validated, showModal, quoteData } = this.state;
    return (
      <div className='container  mt-3'>
        <Form validated={validated} onSubmit={this.handleSubmit} ref='roundtripForm'>
          <div className='text-muted formSeparation'>Outbound</div>
          <div className='container'>
            <QuoteForm aircraft='outboundAircraft' fromLocation='outboundFromLocation' toLocation='outboundToLocation' date='outboundStartDate' selectedTime='outboundTime' adults='outboundAdults' children='outboundChildren' infants='outboundInfants' />
          </div>
          <div className='text-muted formSeparation'>Inbound</div>
          <div className='container'>
            <QuoteForm aircraft='inboundAircraft' fromLocation='inboundFromLocation' toLocation='inboundToLocation' date='inboundStartDate' selectedTime='inboundTime' adults='inboundAdults' children='inboundChildren' infants='inboundInfants' />
            <div style={{ textAlign: "center" }}>
              <Button variant='secondary' className='sendButton' type='submit'>
                Get A Quote
              </Button>
            </div>
          </div>
        </Form>

        <CustomerDetails showModal={showModal} onClose={this.handleModalClose} quoteData={quoteData} type='Round Trip' />
      </div>
    );
  }
}
