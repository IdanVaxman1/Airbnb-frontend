export function changeFilter(filterBy) {
    return (dispatch) => {
        console.log(filterBy)
        dispatch({ type: 'SET_FILTER', filterBy })
    }
}