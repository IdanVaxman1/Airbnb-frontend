import React, { Component } from "react";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'


export class DateRangeSelector extends Component {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: null
  }
  

  handleDateChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate })
    console.log(this.state.startDate)
  }
    
  handleFocusChange = (focusedInput) => this.setState({ focusedInput })

  render = () => {
    console.log(this.state)

    return <DateRangePicker
      endDate={this.state.endDate}
      endDateId="endDate"
      focusedInput={this.state.focusedInput}
      isOutsideRange={() => null}
      onDatesChange={this.handleDateChange}
      onFocusChange={this.handleFocusChange}
      startDate={this.state.startDate}
      startDateId="startDate"
    />
  }
}