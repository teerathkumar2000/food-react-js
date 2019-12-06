import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { MDBNavbar, MDBNavbarBrand, } from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

import {
  MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBIcon
} from "mdbreact";
import { Link } from "react-router-dom"

class NavbarPage extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
      <MDBNavbar color="pink" style={{ marginTop: "0px" }} >
        <MDBNavbarBrand href="#">
          <img src="https://images.template.net/wp-content/uploads/2016/12/07104307/Vector-Design-Restarurant-Logo.jpg" height="30" alt="" />
        </MDBNavbarBrand>


      </MDBNavbar>
    );
  }
}





const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar color='secondary' position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Fast Food
          </Typography>
          <Button color="inherit" style={{ padding: "20px" }}>Profile</Button>
          <Button color="inherit" style={{ padding: "20px" }}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}









class Navbar1 extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
      <div>
        <MDBNavbar color="pink" dark expand="lg" style={{ marginTop: "px" }}>
          <MDBNavbarBrand>
            <strong className="white-text">MDBNavbar</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink >
                  <MDBIcon />SET LOCATION</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink >
                  <Link to='/addcatogary'style={{color: 'White'}} >
                    <MDBIcon />ADD CATEGORY
                </Link>
                </MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink  >
                  <Link to='/addproduct' style={{color: 'White'}} >

                    <MDBIcon />ADD PRODUCT
                </Link>
                </MDBNavLink>
                {/* <MDBNavLink  to="#!"> ADD PRODUCT
                <MDBIcon  />
                </MDBNavLink> */}
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user" className="mr-1" />Profile
                </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default" right>
                    <MDBDropdownItem >

                      <Link to='/myAccount' >

                       My Account
                        </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem href="#!">Log out</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>

        <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
      </div>
    );
  }
}






export {
  NavbarPage,
  ButtonAppBar,
  Navbar1
}