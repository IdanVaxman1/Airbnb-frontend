import {userService} from '../../userService.js'
export function loadUsers() {
    return (dispatch) => {
        const users=userService.query()
        dispatch({ type: 'LOAD_USERS', users })
    }
}
export function removeUser(id) {
    return (dispatch) => {
        userService.removeUser(id)
        dispatch({ type: 'DELETE_USER', id })
    }
}
export function addUser(user) {
    return (dispatch) => {
        const added=userService.saveUser(user)
        dispatch({ type: 'ADD_USER', user:added })
    }
}