const INITIAL_STATE = {
    isLargeFilterShown: false,
    isSmallFilterShown: true,
    isLogoWhite: false

}

export function headerReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'showLargeFilter':
            console.log('im here')
            state.isLargeFilterShown = true
            state.isSmallFilterShown = false
            // state.isSmallFilterShown = false
            return { ...state }
        case 'showSmallFilter':
            state.isLargeFilterShown = false
            state.isSmallFilterShown = true
            return { ...state }
        case 'changeLogoColor':
            state.isLogoWhite = action.isWhite
            console.log('is logo white in reducer?',state.action)
            return { ...state }
        default:
            return state;
    }
}

