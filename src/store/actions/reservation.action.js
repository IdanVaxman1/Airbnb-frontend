export function ReservationConfirmed(reservation) {
    return (dispatch) => {
        console.log('reservation in action',reservation)
        dispatch({ type: 'SET_RESERVATION', reservation })
    }
}