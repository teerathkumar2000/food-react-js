import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import { DropdownPage } from '../../Input/Input'
import { Navbar1 } from '../../Navbar/Navbar'
import firebase from '../../../Config/Firebase/Firebase'
import {AddProduct} from './../../../Store/Action/main-action'
import {connect} from 'react-redux'



 class AddProducts extends React.Component {
    constructor() {
        super()
        this.state = {
            catogary: "",
            items: "",
            price: "",
            img: '',
            deliveryprise: "",

        }
    }


    // saveData = () => {
    //     this.props.SignupUser(this.state, this.props.history)
    // }

    imageFunc = async (e) => {
        console.log(e.target.files[0])
        let imagename = e.target.files[0].name
        let ref = firebase.storage().ref('/').child("image/" + imagename)
        await ref.put(e.target.files[0])
        ref.getDownloadURL().then(url =>{
            console.log(url)
          this.setState({
            file: url,
    
          })
        }
        )
        .catch((error)=>{
            console.log(error)
        })
      }

componentDidMount(){
    let getData = JSON.parse(localStorage.getItem("user"))
    console.log(getData)
    if(getData){
     this.setState({
       currentUser:getData.email
     })
    }
}
    render() {
console.log(this.state)
console.log(this.props.AddProduct)
        return (
            <div >
                <Navbar1 />
                <div>
                    <MDBContainer style={{ paddingTop: "40px", }}>
                        <MDBRow center>
                            <MDBCol md="5">
                                <MDBCard >
                                    <MDBCardBody  >

                                        <form>

                                            <div className="pink-text" >
                                                <p className="h4 text-center py-2">Add Product</p>
                                                <DropdownPage list={[{ name: 'burger' }, { name: 'biryani' }, { name: 'pizza' }]} label='Catogary' onChange={(e) => this.setState({ catogary: e.target.value, disable1: false })} />
                                                < MDBInput type='text' label="Item Name" value={this.state.items} onChange={(e) => this.setState({ items: e.target.value })} />
                                                < MDBInput type='text' label="price" value={this.state.price} onChange={(e) => this.setState({ price: e.target.value })} />
                                                < MDBInput type='file'
                                                         onChange={(e)=>this.imageFunc(e)} />
                                                < MDBInput type='text' label="Delivary price" value={this.state.deliveryprise} onChange={(e) => this.setState({ deliveryprise: e.target.value })} />
                                            </div>
                                            <div className="text-center mt-4">
                <MDBBtn
                 style={{
                     backgroundColor:"#c270e5",
                     color:"white"
                    }}
                    color="#c90044"
                    className="mb-3"
                    type="button"
                    onClick={()=>this.props.AddProduct(this.state)}
                    >
                  Add
                </MDBBtn>
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

const mapDispatchToProps = dispatch => {
    return {
        AddProduct: (data) => dispatch(AddProduct(data))
    }


}

export default connect(null,mapDispatchToProps)(AddProducts);