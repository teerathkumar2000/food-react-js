import React from "react";
import { OutlinedTextFields, Paper, ButtonPage } from "../../index"
import Grid from '@material-ui/core/Grid';
import {Navbar1} from '../../Navbar/Navbar'


export default class ADDCetogary extends React.Component {
    constructor() {
        super()
        this.state = {
           type :"",

        }
    }

    render() {
        return (
            <div>
               <Navbar1/>

                <div className="paper">

                    <Grid justify='center' container spacing={3}>
                        <Grid item xs={12} sm={12} md={8} lg={5}>
                            <Paper >
                                <div >
                                </div>
                                <h1 style={{textAlign:'center', fontWeight: 'bold'}}>Add Item</h1>
                                <div className="input">
                                    < OutlinedTextFields name='text' type='text' label="Add Product" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                                </div>
                                <div className="Loginbtn">
                                    <ButtonPage style={{ width: "200px" }} className="Login" >ADD Cetogary</ButtonPage>
                                </div>

                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}
