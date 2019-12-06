import React from 'react'
import {ButtonAppBar} from '../../Componets/Navbar/Navbar'
import NavTabs from '../../Componets/Tabs/tabs'
// import Home from '../User/HomeUser/Home'
// import Chips from '../../Componets/chips/chips'


class Dashboard extends React.Component {

    render() {
        return (
            <div>
               <ButtonAppBar />
               <NavTabs />
                {/* <Home />  */}
               
            </div>
        )
    }
}

export default Dashboard

