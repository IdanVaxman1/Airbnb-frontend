import { storageService } from './async-storage.service.js'
import { dataService } from './stay.data.js'
import { utilService } from './util.service.js'
import { httpService } from './http.service.js'

export const reservationService = {
    query,
    getById,
    addReservation
}
window.cs = reservationService;

async function query(ev,hostId={hostId:'6298796e61a78e164238c02e'}) {
    console.log('hostId from service',hostId)
    let reservations = await httpService.get('reservation',hostId)
    
    return reservations
    console.log(reservations)

}

// async function query(filterBy, exploreFilterBy) {
//     // let staysfromlocalstorage = await storageService.query(STORAGE_KEY)
//     let reservations = await httpService.get('reservation')
    
//     return reservations
// }

async function getById(stayId) {

}

async function addReservation(reservation) {
    const addReservation = await httpService.post('reservation', reservation)
    return addReservation
}


