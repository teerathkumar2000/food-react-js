const initialState = {
    name: 'auth-reducer'
}


const AuthReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ResSignup':
            return state

        case 'signupUser':
            return state
            
        case 'loginRes':
            return state
        default: return state
    }

}

export default AuthReducer