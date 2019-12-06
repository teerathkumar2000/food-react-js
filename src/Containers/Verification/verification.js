import React from 'react'
import Paper from '../../Componets/Paper/Paper'

class Verifaction extends React.Component {
    // componentDidMount(){
    //     firebase.auth().onAuthStateChanged(function(user) {
    //         if (user) {
    //             if(user.emailVerified===true){

    //             }
    //         } else {
    //         }
    //       });
    // }
    render() {
        return (
            <div>
                <Paper style={{ marginTop: "40px" }}>

                    <div>

                        <h1 style={{ textAlign: 'center', marginTop: "40px" }}>Verify Your Email</h1>
                    </div>
                </Paper>

            </div>
        )
    }
}
export default Verifaction