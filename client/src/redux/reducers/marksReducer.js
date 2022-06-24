import ACTIONS from '../actions/'

const initialState = {
    sem3: [],
    sem4: []
}

const marksReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTIONS.GET_SEM3:
            return {
                ...state,
                sem3: action.payload.sem3
            }
        case ACTIONS.GET_SEM4:
            return {
                ...state,
                sem4: action.payload.sem4
            }
        default:
            return state
    }
}

export default marksReducer