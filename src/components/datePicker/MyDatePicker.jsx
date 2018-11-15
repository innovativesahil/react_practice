import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
class MyDatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(newDate) {
        this.setState({
            startDate: newDate
        });
    }
    render() {
        return (
            <DatePicker
                placeholderText="YYYY/MM/DD"
                className="form-control"
                dateFormat="YYYY/MM/DD"
                minDate={moment()}
                selected={this.state.startDate}
                onChange={this.handleChange}
                todayButton={"Today"}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select">
                    <div style={{ color: 'red', padding: '5px' }}>
                        Choose starting date
                    </div>
            </DatePicker>
        );
    }
}

export default MyDatePicker;