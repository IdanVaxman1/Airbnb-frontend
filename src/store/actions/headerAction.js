
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
export function LogoChangeToWhite(isWhite) {
    return (dispatch) => {
      console.log('isWhite?',isWhite)
        dispatch({ type: 'changeLogoColor', isWhite })
    } 
  }


