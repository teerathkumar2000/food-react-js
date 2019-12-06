import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import ButtonPage from '../../../Componets/Button/Button'
import { NavbarPage } from "../../../Componets/Navbar/Navbar"
import { DropdownPage } from '../../../Componets/Input/Input'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'

import { SignupUser } from '../../../Store/Action/auth-action'




class Sign extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            age: "",
            email: "",
            password: "",
            confrimpassword: "",
            gender: '',
            disable1: true,
            disable2: true,
            disable3: true,
            disable4: true,
            disable5: true,
            disable6: true,

        }
    }

    // 
    saveData = () => {

        this.props.SignupUser(this.state, this.props.history)

    }




    render() {

        return (
            <div >
                <div>
                    <NavbarPage />
                    <MDBContainer style={{ paddingTop: "40px", }}>
                        <MDBRow center>
                            <MDBCol md="5">
                                <MDBCard >
                                    <MDBCardBody  >

                                        <form>

                                            <p className="h4 text-center py-4">Sign up User</p>
                                            <div className="pink-text" >

                                                < MDBInput icon="user" type='text' label="Frist Name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value, disable1: false })} />
                                                < MDBInput icon="male" type='text' label="Age" disabled={this.state.disable1} value={this.state.age} onChange={(e) => this.setState({ age: e.target.value, disable2: false })} />
                                                <DropdownPage list={[{ name: 'Male' }, { name: 'Female' }]} disabled={this.state.disable2} label='Select Gender' onChange={(e) => this.setState({ gender: e.target.value, disable3: false })} />
                                                < MDBInput icon="envelope" type='text' label="Email" disabled={this.state.disable3} value={this.state.email} onChange={(e) => this.setState({ email: e.target.value, disable4: false })} />
                                                < MDBInput icon="lock" type='password' label="Password" disabled={this.state.disable4} value={this.state.password} onChange={(e) => this.setState({ password: e.target.value, disable5: false })} />
                                                < MDBInput icon="lock" type='password' label="Confrim Password" disabled={this.state.disable5} value={this.state.confrimpassword} onChange={(e) => this.setState({ confrimpassword: e.target.value, disable6: false })} />
                                            </div>
                                            <div className="text-center py-4 mt-3">
                                                <ButtonPage click={this.saveData} >Sign Up</ButtonPage>
                                            </div>
                                            <div style={{ textAlign: "center" }}>Already A Account?
                                                <Link to='/' className="blue-text ml-1">Login</Link>
                                            </div>
                                        </form>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => {
    console.log(state.AuthReducer.name, '==>check')
    return {
        name: state.AuthReducer.name
    }
}


const mapDispatchToProps = dispatch => {
    return {
        SignupUser: (val, path) => dispatch(SignupUser(val, path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sign);