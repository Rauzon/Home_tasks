type InitStateType = {
    color: ThemeType,
}

const initState:InitStateType = {
    color: 'dark',
};

export const themeReducer = (state:InitStateType = initState, action: ActionCreatorsType):InitStateType => {
    switch (action.type) {
        case "SET_THEME": {
            return {...state, color: action.color};
        }
        default: return state;
    }
};

type ActionCreatorsType = ReturnType<typeof changeThemeAC>

export type ThemeType = 'red'|'dark'|'some'|'blue'|'green';

export const changeThemeAC = (color:ThemeType) => {
    return {
        type: "SET_THEME",
        color
    } as const
};