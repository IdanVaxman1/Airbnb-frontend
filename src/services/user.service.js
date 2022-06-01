import { storageService } from './async-storage.service'
// import { httpService } from './http.service'
// import { store } from '../store/store'
// import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from './socket.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
    getUsers,
    getById,
}

window.userService = userService


function getUsers() {
    return storageService.queryUser('user')
    // return httpService.get(`user`)
}

// function onUserUpdate(user) {
//     showSuccessMsg(`This user ${user.fullname} just got updated from socket, new score: ${user.score}`)
//     store.dispatch({ type: 'SET_WATCHED_USER', user })
// }

async function getById(userId) {
    const user = await storageService.get('user', userId)
    // const user = await httpService.get(`user/${userId}`)
    // gWatchedUser = user;

    // socketService.emit(SOCKET_EMIT_USER_WATCH, userId)
    // socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
    // socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)

    return user
}

async function login(userCred) {
    const users = await storageService.queryUser('user')
    const user = users.find(user => user.username === userCred.username && user.password === userCred.password)
    // const user = await httpService.post('auth/login', userCred)
    if (user) {
        // socketService.login(user._id)
        return saveLocalUser(user)
    }
    else console.log('user not found')
}
async function signup(user) {
    const newUser= await storageService.post('user', user)
    // const user = await httpService.post('auth/signup', userCred)
    // socketService.login(user._id)
    return saveLocalUser(user)
}
async function logout() {
    localStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    // socketService.logout()
    // return await httpService.post('auth/logout')
}

function saveLocalUser(user) {
    localStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}






