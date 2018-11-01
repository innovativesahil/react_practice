import React from 'react';
import swal from 'sweetalert2';
import {} from 'reactstrap';

class CustomAlert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    showSimple(){
        swal(
            'Hello there!',
            'This a basic Sweet Alert',
            'info'
          )
    }
    
    render() { 
        return ( 
            <div className = "container">
                <div className = "row">
                    <div className="col-lg-3 col-md-6"><button className = "btn btn-primary" onClick = {this.showSimple}>Simple</button></div>
                    <div className="col-lg-3 col-md-6"><button className = "btn btn-info" onClick = {this.showIt}>Simple</button></div>
                    <div className="col-lg-3 col-md-6"><button className = "btn btn-info" onClick = {this.showIt}>Simple</button></div>
                    <div className="col-lg-3 col-md-6"><button className = "btn btn-info" onClick = {this.showIt}>Simple</button></div>
                </div>
            </div>
         );
    }
}
 
export default CustomAlert;