import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

const ButtonPage = (props) => {
    return (
        <Fragment>

            <MDBBtn onClick={() => props.click()} color="pink" style={props.style} >{props.children}</MDBBtn>
            {/* <MDBBtn color="purple">Purple</MDBBtn> */}
            {/* <MDBBtn color="elegant">Elegant</MDBBtn>
      <MDBBtn color="unique">Unique</MDBBtn>
      <MDBBtn color="deep-purple">Deep-purple</MDBBtn>
      <MDBBtn color="indigo">Indigo</MDBBtn>
      <MDBBtn color="light-blue">Light blue</MDBBtn>
      <MDBBtn color="cyan">Cyan</MDBBtn>
      <MDBBtn color="dark-green">Dark-green</MDBBtn>
      <MDBBtn color="light-green">Light-green</MDBBtn>
      <MDBBtn color="yellow">Yellow</MDBBtn>
      <MDBBtn color="amber">Amber</MDBBtn>
      <MDBBtn color="deep-orange">Deep-orange</MDBBtn>
      <MDBBtn color="brown">Brown</MDBBtn>
      <MDBBtn color="blue-grey">Blue-grey</MDBBtn>
      <MDBBtn color="mdb-color">MDB</MDBBtn> */}
        </Fragment>
    );
}

export default ButtonPage;