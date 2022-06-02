import { httpService } from './http.service.js'

export const reservationService = {
    query,
    addReservation
}
window.cs = reservationService;

async function query(ev,hostId={hostId:'6298796e61a78e164238c02e'}) {
    console.log('hostId from service',hostId)
    let reservations = await httpService.get('reservation',hostId)
    
    return reservations
    console.log(reservations)

}

async function addReservation(reservation) {
    const addReservation = await httpService.post('reservation', reservation)
    return addReservation
}


