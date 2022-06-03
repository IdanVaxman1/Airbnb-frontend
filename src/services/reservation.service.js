import { httpService } from './http.service.js'

export const reservationService = {
    query,
    addReservation,
    removeReservation
}
window.cs = reservationService;

async function query(ev,Id) {

    console.log('hostId from service',Id)
    let reservations = await httpService.get('reservation',Id)
    
    return reservations
    console.log(reservations)

}

async function addReservation(reservation) {
    const addReservation = await httpService.post('reservation', reservation)
    return addReservation
}

async function removeReservation(Id) {
    const deletedReservation = await httpService.delete('reservation', Id)
    return deletedReservation
}


