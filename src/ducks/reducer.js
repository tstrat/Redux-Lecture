import Login from "../components/Content/Login";

const INITIAL_STATE = {
    user: ''
}

const LOGIN_USER = "LOGIN_USER";
const UPDATE_USER = "UPDATE_USER";

export default function reducer(state = INITIAL_STATE, action){
    switch(action.type){
        case LOGIN_USER: 
            return Object.assign({}, state, {user: action.payload})
        case UPDATE_USER:
            return Object.assign({}, state, {user: action.payload})
        default:
            return state
    }
}

export function loginUser(name){
    return {
        type: LOGIN_USER,
        payload: name
    }
}

export function updateName(name){
    return {
        type: UPDATE_USER,
        payload: name
    }
}