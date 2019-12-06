import React from "react";

import { OutlinedTextFields, Paper, ButtonPage } from "../../index"
import Grid from '@material-ui/core/Grid';


export default class EditInfo extends React.Component {
    constructor() {
        super()
        this.state = {
            type: "",

        }
    }

    render() {
        return (
            <div>




                <Grid justify='center' container spacing={1}  >
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Paper style={{ textAlign: "center", marginTop: '40px' }}>
                            <h1>EDIt Info</h1>
                            < OutlinedTextFields type='text' label="Text" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                            < OutlinedTextFields type='file' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                            <ButtonPage >save</ButtonPage>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )










    }








}


