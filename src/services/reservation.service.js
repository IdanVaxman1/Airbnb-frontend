import { storageService } from './async-storage.service.js'
import { dataService } from './stay.data.js'
import { utilService } from './util.service.js'
import { httpService } from './http.service.js'

const STORAGE_KEY = 'stay'

export const reservationService = {
    query,
    getById,
    getTopRated,
    getRandomStayId,
    addReservation
}
window.cs = reservationService;

async function query(filterBy, exploreFilterBy) {
    // let staysfromlocalstorage = await storageService.query(STORAGE_KEY)
    let reservations = await httpService.get('reservation')
    
    return reservations
}
async function getById(stayId) {
    return storageService.get(STORAGE_KEY, stayId)
    // return await httpService.get(`stay/${stayId}`)
}

async function addReservation(reservation) {
    const addReservation = await httpService.post('reservation', reservation)
    return addReservation
}


function getTopRated() {
    return dataService.getTopRated()
}

async function getRandomStayId() {
    const stays = await storageService.query()
    const idx = utilService.getRandomIntInclusive(0, stays.length - 1)
    return stays[idx]._id
}