const INITIAL_STATE = {
    isLargeFilterShown: false,
    isSmallFilterShown: true

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
        default:
            return state;
    }
}