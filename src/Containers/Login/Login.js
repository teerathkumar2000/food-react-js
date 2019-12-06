import React from "react";
import { OutlinedTextFields, Paper, ButtonPage } from "../../Componets"
import Grid from '@material-ui/core/Grid';
import { MDBModalFooter } from 'mdbreact';
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { LoginFunc } from '../../Store/Action/auth-action'

import './Login.css'
class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",

        }
    }


    login = () => {
        console.log(this.state, '==')

        this.props.LoginFunc(this.state, this.props.history)


    }

    render() {
        return (
            <div>
                {/* <MDBNavbar color="mdb-color" dark>
                    <MDBNavbarBrand href="#">
                        <img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" alt="" />
                    </MDBNavbarBrand>
                </MDBNavbar> */}

                <div className="paper">

                    <Grid justify='center' container spacing={3}>
                        <Grid item xs={12} sm={12} md={8} lg={5}>
                            <Paper >
                                <div >
                                    <h3 className="adminlogin">Login</h3>
                                </div>
                                <div className="input">
                                    < OutlinedTextFields name='Email' type='email' label="Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                                    < OutlinedTextFields name='Password' type='password' label="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                                </div>
                                <div className="Loginbtn">
                                    <ButtonPage click={this.login} style={{ width: "30%" }} className="Login" >Login</ButtonPage>
                                </div>
                                <MDBModalFooter className="mx-5 pt-3 mb-1">
                                    {/* <p className="font-small grey-text d-flex justify-content-end"> */}
                                    Sign An Account?
                                      <Link to='/home' className="blue-text ml-1">Sign Up</Link>
                                    {/* </p> */}
                                </MDBModalFooter>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        LoginFunc: (val, path) => dispatch(LoginFunc(val, path))
    }


}




export default connect(null, mapDispatchToProps)(Login)