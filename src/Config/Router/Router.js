
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Login, Home, Sign, SignRes, ButtonAppBar, ResturantHome, Detailpage, Verifaction } from '../../Containers';
import { ADDCetogary } from '../../Componets'
import { AddProduct } from '../../Componets'
import { Myaccount } from '../../Componets'
import { EditInfo } from '../../Componets'


class BasicRouter extends React.Component {

    render() {
        return (
            <Router>
                <Route exact path="/" component={Login} />
                <Route path="/Home" component={Home} />
                <Route path="/userSign" component={Sign} />
                <Route path="/Sign-Resturant" component={SignRes} />
                <Route path="/dashboard" component={ButtonAppBar} />
                <Route path="/resturant" component={ResturantHome} />
                <Route path="/addcatogary" component={ADDCetogary} />
                <Route path="/addproduct" component={AddProduct} />
                <Route path="/myAccount" component={Myaccount} />
                <Route path="/detailpage" component={Detailpage} />
                <Route path="/verify-email" component={Verifaction} />
                <Route path="/editinfo" component={EditInfo} />










            </Router>
        )
    }
}

export default BasicRouter









