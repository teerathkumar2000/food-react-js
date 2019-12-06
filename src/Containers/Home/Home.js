import React from "react";
import { NavbarPage } from '../../Componets/Navbar/Navbar'
import Paper from '../../Componets/Paper/Paper'
import Grid from '@material-ui/core/Grid';
import ButtonPage from '../../Componets/Button/Button'
import './login.css'
import { Link } from "react-router-dom"

export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
        }
    }
    render() {
        return (
            <div >
                <NavbarPage />
                <div style={{ paddingTop: "120px" }}>
                    <Grid justify='center' container spacing={1}>
                        <Grid item xs={12} sm={12} md={8} lg={5}>
                            <Paper  >
                                <div style={{ textAlign: "center", width: "80%" }}  >
                                    <img src="https://images.template.net/wp-content/uploads/2016/12/07104307/Vector-Design-Restarurant-Logo.jpg" width="250px" height="140" alt="" />
                                </div>
                                <div style={{ textAlign: "center", paddingTop: "10px" }}>
                                    <ButtonPage click={() => this.props.history.push('/userSign')} style={{ width: "80%" }} color="mdb-color" >User Login</ButtonPage>
                                    <ButtonPage click={() => this.props.history.push('/Sign-Resturant')} style={{ width: "80%" }} color="mdb-color" >Restarurant Register</ButtonPage>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}
