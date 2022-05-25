export function changeFilter(filterBy) {
    return (dispatch) => {
        console.log('action',filterBy)
        dispatch({ type: 'SET_FILTER', filterBy })
    }
}