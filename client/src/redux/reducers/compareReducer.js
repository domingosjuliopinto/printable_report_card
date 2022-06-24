import ACTIONS from '../actions/'

const compare = []

const compareReducer = (state = compare, action) => {
    switch(action.type){
        case ACTIONS.GET_ALL_STUDENTS:
            return action.payload
        default:
            return state
    }
}

export default compareReducer