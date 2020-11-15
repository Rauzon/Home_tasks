type ActionType = ReturnType<typeof loadingAC>
export type LoadingStateType = typeof initState


const initState = {
    isLoading: false
};

export const loadingReducer = (state: LoadingStateType = initState, action: ActionType): LoadingStateType => {
    switch (action.type) {
        case 'SET_IS_LOADING': {
            return {...state, isLoading: action.isLoading};
        }
        default:
            return state;
    }
};


export const loadingAC = (isLoading: boolean) => {
    return {type: 'SET_IS_LOADING', isLoading}
};