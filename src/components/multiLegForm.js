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
    totalLegs: 2,
    quoteData: null
  };

  handleSubmit = event => {
    const form = event.currentTarget;
    const { totalLegs } = this.state;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      this.setState({ validated: true, showModal: false });
    } else {
      let i = 1;
      let tempQuoteData = [];
      for (i = 1; i <= totalLegs; i++) {
        const tempData = {
          legName: `Leg ${i}`,
          selectedAircraft: form.elements[`aircraft_leg${i}`].value,
          fromLocation: form.elements[`fromLocation_leg${i}`].value,
          toLocation: form.elements[`toLocation_leg${i}`].value,
          date: moment(form.elements[`startDate_leg${i}`].value).format("DD-MM-YYYY"),
          time: form.elements[`time_leg${i}`].value,
          adults: form.elements[`adults_leg${i}`].value,
          children: form.elements[`children_leg${i}`].value,
          infants: form.elements[`infants_leg${i}`].value
        };
        tempQuoteData.push(tempData);
      }

      this.setState({
        showModal: true,
        validated: false,
        quoteData: [...tempQuoteData]
      });
      this.refs.multilegForm.reset();
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

  handleAddLeg = () => {
    const { totalLegs } = this.state;
    this.setState({ totalLegs: totalLegs + 1 });
  };

  handleRemoveLeg = () => {
    const { totalLegs } = this.state;
    this.setState({ totalLegs: totalLegs - 1 });
  };

  renderQuoteForm = () => {
    let i = 1;
    const legArray = [];
    const { totalLegs } = this.state;
    for (i = 1; i <= totalLegs; i++) {
      legArray.push(
        <div key={`multileg_leg${i}`}>
          <div className='text-muted formSeparation'>Leg {i}</div>
          <div className='container'>
            <QuoteForm aircraft={`aircraft_leg${i}`} fromLocation={`fromLocation_leg${i}`} toLocation={`toLocation_leg${i}`} date={`startDate_leg${i}`} selectedTime={`time_leg${i}`} adults={`adults_leg${i}`} children={`children_leg${i}`} infants={`infants_leg${i}`} />
          </div>
        </div>
      );
    }
    return legArray;
  };

  render() {
    const { validated, totalLegs, showModal, quoteData } = this.state;

    return (
      <div className=' container mt-3'>
        <Form validated={validated} onSubmit={this.handleSubmit} ref='multilegForm'>
          {this.renderQuoteForm()}

          <div style={{ textAlign: "center" }}>
            {totalLegs > 2 ? (
              <Button variant='secondary' className='sendButton' style={{ marginRight: "10px" }} onClick={this.handleRemoveLeg}>
                Remove A Leg
              </Button>
            ) : null}
            <Button variant='secondary' className='sendButton' style={{ marginRight: "10px" }} onClick={this.handleAddLeg}>
              Add A Leg
            </Button>
            <Button variant='secondary' className='sendButton' type='submit'>
              Get A Quote
            </Button>
          </div>
        </Form>{" "}
        <CustomerDetails showModal={showModal} onClose={this.handleModalClose} quoteData={quoteData} type='Multi Leg' />
      </div>
    );
  }
}
