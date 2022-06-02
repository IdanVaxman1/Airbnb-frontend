import { httpService } from './http.service'
// import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from './socket.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
}

window.userService = userService

async function login(userCred) {
    const user = await httpService.post('auth/login', userCred)
    if (user) {
        // socketService.login(user._id)
        return saveLocalUser(user)
    }
    else console.log('user not found')
}
async function signup(user) {
    const newUser = await httpService.post('auth/signup', user)
    // socketService.login(user._id)
    return saveLocalUser(newUser)
}
async function logout() {
    const isOut = await httpService.post('auth/logout')
    if (isOut) {
        localStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
        // socketService.logout()
    }
    else console.log('how can one fail to logout??')


}

function saveLocalUser(user) {
    localStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}






