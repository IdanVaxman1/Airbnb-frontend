
export function showLargeFilter(isShown) {
    return (dispatch) => {
        dispatch({ type: 'showLargeFilter', isShown })
    } 
  }
export function showSmallFilter(isShown) {
    return (dispatch) => {
        dispatch({ type: 'showSmallFilter', isShown })
    } 
  }

