import React from "react";
import Grid from '@material-ui/core/Grid';
import { MDBCard, MDBContainer, MDBInputGroup, MDBBtn } from 'mdbreact'
import './home.css'
import { OutlinedTextFields, ButtonPage, Paper, Chips, RecipeReviewCard } from "../../../Componets"
import { fontWeight } from "@material-ui/system";
import firebase from './../../../Config/Firebase/Firebase'

class UserHome extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            Resturants:[]

        }
    }
    componentDidMount(){
        let {Resturants} = this.state;
        firebase.firestore().collection("users").where("account","==","Resturant").get().then((res)=>{
            res.forEach((res)=>{
                console.log(res.data());
                Resturants.push(res.data())
                this.setState({
                    Resturants:Resturants,
                })
            })
        })
    }
    render() {
        return (
            <div>
                <div style={{ backgroundColor: 'pink', height: "200px" }}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Paper style={{ margin: "5px" }} >
                                <div className="d-flex bd-highlight example-parent">
                                    <div className="p-2 w-100 bd-highlight col-example">
                                        <OutlinedTextFields label='Favourite Resturant ' style={{ width: '100%' }} />
                                    </div>
                                    <ButtonPage style={{ height: '53px', marginRight: "px", marginTop: "23px", width: "300px", fontSize: "15px", fontWeight: 'bold' }} className="btn2" color='unique'  >Find Resturent </ButtonPage>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>




                </div>

                <div style={{ textAlign: "center" }}>
                    <Chips catogary='Items' />
                    <Chips catogary='Items' />
                    <Chips catogary='Items' />
                    <Chips catogary='Items' />
                    <Chips catogary='Items' />
                    <Chips catogary='Items' />
                    <Chips catogary='Items' />


                </div>

                <div style={{ padding: "30px" }}>
                    {
                        this.state.Resturants.map((val,i)=>{
                            return(
                    <RecipeReviewCard name={val.name} file={val.file}/>
                          
                            )
                        })
                    }



                </div>

            </div>

        )

    }
}


export default UserHome

