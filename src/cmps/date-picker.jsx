import React, { Component } from "react"
import { DateRangePicker } from "react-dates"
import moment from "moment";
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'


export class DateRangeSelector extends Component {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: null
  }

  componentDidMount(){
    if(this.props.place==='reserve'){
      this.setState({...this.state,endDate:this.props.startDate,startDate:this.props.endDate})
    }
  }

  handleDateChange = ({ startDate, endDate }) => {
    if(this.props.place==='filter') this.setState({ startDate, endDate },()=>this.props.handleDate({startDate, endDate}))
    else this.setState({ startDate, endDate })
  }

  handleFocusChange = (focusedInput) => this.setState({ focusedInput })

  render = () => {
    return <section className="date-range-selector">
      <DateRangePicker
        endDate={this.state.endDate}
        endDateId="endDate"
        focusedInput={this.state.focusedInput}
        // isOutsideRange={() => null}
        onDatesChange={this.handleDateChange}
        onFocusChange={this.handleFocusChange}
        startDate={this.state.startDate}
        startDateId="startDate"
      />
    </section>
  }
}