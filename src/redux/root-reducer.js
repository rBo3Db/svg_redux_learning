import {ActionTypes} from './actions'
const initialState = {
    damagedDetails : []
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.ADD_DETAIL_SUCCESS :
            return {
                ...state,
                damagedDetails : damagedDetails.concat(action.detail)
            }
        
    }
}
// ActionTypes.ADD_DETAIL_SUCCESS
// ActionTypes.ADD_DETAIL_FAILURE
