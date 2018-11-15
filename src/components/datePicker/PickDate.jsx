import React, { Component } from 'react';

import swal from 'sweetalert2';
import "react-datepicker/dist/react-datepicker.css";

class PickDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ing_start_date: '',
            disable_view: false,
            startdate_err: false,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    verifyIngStartDate = (e) => {
        console.log("On blur. Ingestion start date", this.state.ing_start_date);
        var q = new Date();
        var m = q.getMonth();
        var d = q.getDate();
        var y = q.getFullYear();
        console.log("d m y for today is ", d, m, y);
        var todayDate = new Date(y, m, d);
        var dateParts = this.state.ing_start_date.split("-");
        var enteredDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
        if (enteredDate < todayDate) {
            swal(
                'Error',
                'Ingestion start date cannot be before today',
                'error'
            )

            this.setState({ ing_start_date: '' })
        }

        this.setState({ startdate_err: false })
        var i_m = enteredDate.getMonth();
        var i_y = enteredDate.getFullYear();
        var i_d = enteredDate.getDate();
        var lastday = function (y, m) {
            return new Date(y, m + 1, 0).getDate();
        }

    }

    onIngstartDate = (e) => {
        console.log(e);
        console.log(e.target);
        this.setState({
            [e.target.name]: e.target.value,
            startdate_err: false
        })
    }


    handleChange(date) {
        this.setState({
            ing_start_date: date
        });
    }

    render() {
        return (

            <div className="container" >
                <div className="row">
                    <div className="col-md-4">
                        <label style={{ color: '#000000' }}>Ingestion Start Date <span className="red_star">*</span></label>
                        <input type="date" className={"form-control " + (this.state.startdate_err ? "err" : "")}
                            disabled={this.state.disable_view} id="ing_start_date"
                            style = {{ paddingBottom : '10px', }}
                            value={this.state.ing_start_date}
                            onChange={(e) => { this.onIngstartDate(e) }}
                            onBlur={(e) => { this.verifyIngStartDate(e) }}
                            name="ing_start_date" required="required"></input>
                        {this.state.startdate_err ? <small style={{ 'color': '#a94442' }}>This field is required</small> : null}
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default PickDate;