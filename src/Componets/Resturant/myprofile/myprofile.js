import React from "react";

import { OutlinedTextFields, Paper, ButtonPage } from "../../index"
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import { borderRadius } from "@material-ui/system";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import {Link} from 'react-router-dom'
export default class Myaccount extends React.Component {
    constructor() {
        super()
        this.state = {
            type: "",

        }
    }

    render() {
        return (
            <div>


                <div className="paper">

                    <Grid justify='center' container spacing={3}>
                        <Grid item xs={12} sm={12} md={6} lg={5}>
                            <Paper >
                                <div >
                                </div>
                                {/* <img src= 'https://image.shutterstock.com/image-photo/spring-blossom-over-wood-background-260nw-196722200.jpg'> */}
                                {/* </img> */}
                                <div >
                                <div style={{ textAlign: "center" }}>
                                    <h1>my name</h1>
                                </div>
                                <div style={{ textAlign: "center" }} >
                                    <ButtonPage style={{ color: "white", backgroundColor: "white", borderRadius: "10px" }}>
                                        Delivary Time 40
                                          <ArrowDownwardIcon fontSize="inherit" />
                                    </ButtonPage>
                                </div>
                                <div  >
                                    <Link  to='/editinfo'>
                                    <Fab color="secondary" aria-label="edit" >
                                        <EditIcon />
                                    </Fab>
                                    </Link>
                                </div>
                                </div>
                                {/* <ButtonPage style={{textAlign: "center"}} >
                                    save
                                    </ButtonPage> */}

                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )










    }








}


