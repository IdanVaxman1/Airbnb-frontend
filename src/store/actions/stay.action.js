export function changeFilter(filterBy) {
    return (dispatch) => {
        //filter reaches here
        dispatch({ type: 'SET_FILTER', filterBy })
    }
}