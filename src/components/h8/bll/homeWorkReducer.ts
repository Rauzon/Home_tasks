

export const homeWorkReducer = (state: any, action: any): any => {

    switch (action.type) {
        case "sort": {
            const copyState = [...state]
            if (action.payload === 'up') {
                copyState.sort((a, b) => a.name.localeCompare(b.name))
            }
            if (action.payload === 'down') {
                copyState.sort((a, b) => -(a.name.localeCompare(b.name)))
            }
            return copyState
        }
        case "check": {
            const copyState = [...state]

            return copyState.filter((person) => person.age >= action.payload)
        }

        default:
            return state
    }
};