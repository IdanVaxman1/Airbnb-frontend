const INITIAL_STATE = {
    ReservationConfirmed: null
}

export function reservationReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_RESERVATION':
            console.log('reservation reducer',action.reservation)
            state.ReservationConfirmed = action.reservation
            return { ReservationConfirmed:state.ReservationConfirmed }
        default:
            return state;
    }
}