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

async function query(ev,hostId={hostId:'622f3402e36c59e6164fac46'}) {
    let reservations = await httpService.get('reservation',hostId)
    console.log(reservations)

}

// async function query(filterBy, exploreFilterBy) {
//     // let staysfromlocalstorage = await storageService.query(STORAGE_KEY)
//     let reservations = await httpService.get('reservation')
    
//     return reservations
// 

async function getById(stayId) {

}

async function addReservation(reservation) {
    const addReservation = await httpService.post('reservation', reservation)
    return addReservation
}


