import React from 'react';
import { Alert } from 'reactstrap';

const BootstrapAlert = (props) => {
  return (
    <div>

    {/* Bootstrap alert with different classes for different colors */}
      <Alert color="primary">
        This is a primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="secondary">
        This is a secondary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="success">
        This is a success alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="danger">
        This is a danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="warning">
        This is a warning alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="info">
        This is a info alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="light">
        This is a light alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="dark">
        This is a dark alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>

        {/* Bootstrap alert with heading and body */}
      <Alert color="success">
        <h4 className="alert-heading">Well done!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This example text is going
          to run a bit longer so that you can see how spacing within an alert works with this kind
          of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
        </p>
      </Alert>

      {/* A dismissable Bootstrap alert. It shows according to the props sent in the class 
        isOpen : true or false ==>  shows or hides the alert 
        toggle : toggle takes in a method which is fired when the X Button is clicked*/}
      <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
        I am an alert and I can be dismissed!
      </Alert>

      {/* an uncontrolled component can provide the functionality wanted without the need to manage/control the state of the component.
         UncontrolledAlert does not require isOpen nor toggle props to work. */}
        <UncontrolledAlert color="info">
            I am an alert and I can be dismissed!
        </UncontrolledAlert>

        {/* Fade can be disbaled using fade=false. */}
        <UncontrolledAlert color="info" fade = 'false'>
            I am an alert and I can be dismissed!
        </UncontrolledAlert>
    </div>
  );
};

export default BootstrapAlert;