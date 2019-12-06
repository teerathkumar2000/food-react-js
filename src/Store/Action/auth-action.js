import firebase from './../../Config/Firebase/Firebase'




const SignupUser = (data, path) => {
    console.log(data, '==>dataUser')
    return dispatch => {
        if (data.password === data.confrimpassword) {
            console.log(data, 'indide')
            data.account = "User"
            firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then((res) => {
                firebase.firestore().collection('users').doc(res.user.uid).set(data).then(
                    firebase.auth().currentUser.sendEmailVerification().then(function () {
                        dispatch({ type: 'signupUser' })
                        console.log(`Email Sent ==>`)
                        path.push('/')
                    }))
            })
        }
    }
}
const ResSignup = (data, path) => {
    console.log(data, '==>dataRes')
    return dispatch => {
        if (data.password === data.confrimpassword) {
            console.log(data, 'indideRes')
            data.account = "Resturant"
            firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then((res) => {
                firebase.firestore().collection('users').doc(res.user.uid).set(data).then(
                    firebase.auth().currentUser.sendEmailVerification().then(function () {
                        dispatch({ type: 'ResSignup' })
                        console.log(`Email Sent ==>`)
                        path.push('/')
                    }))


            })
        }
    }
}






const LoginFunc = (data, path) => {

    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(data.email, data.password).then(resolve => {
            console.log(resolve.user)
            if (resolve.user.emailVerified === true) {
                firebase.firestore().collection('users').doc(resolve.user.uid).get().then(res => {
                    let checkData = res.data()
                    console.log(checkData)
                    localStorage.setItem('user', JSON.stringify(checkData))
                    if (checkData.account == 'Resturant') {
                        dispatch({
                            type: 'Login',
                            payload: checkData
                        })
                        path.push('/resturant')
                    } else {
                        path.push('/dashboard')
                        dispatch({
                            type: 'Login',
                            payload: checkData
                        })

                    }
                })

            }
            
            else {
                path.push('/verify-email')
            }


        }).catch((err) => {
            alert(err.message)
        })
    }
}




// Logout

const Logout = (path) => {

    return dispatch => {
        firebase.auth().signOut().then(function () {
            dispatch({ type: 'logout' })
            path.push('/')
        }, function (error) {
            console.error('Sign Out Error', error);
        });

    }

}




export {
    SignupUser,
    ResSignup,
    Logout,
    LoginFunc
}