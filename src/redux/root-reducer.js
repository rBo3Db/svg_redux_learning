import {ActionTypes} from './actions';

// {
//     name: 'Левое Переднее Крыло',
//     id: 'left',
//     isHighlighted: false,
// }, 'Левая Передняя Дверь'

const initialState = {
    damagedDetails : [],
    failedAction: {
        type: 'none',
        detailDame: '',
    }
}

const isDetailExist = (detailsArray, detailId) => {
    return detailsArray.some((item) => {
        return item.id === detailId;
    })
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.ADD_DETAIL_SUCCESS: {
            if (isDetailExist(state.damagedDetails, action.detailId)) {
                return state;
            } else {
                const detail = {
                    name: action.detailName,
                    id: action.detailId,
                    isError: false,
                }
                return {
                    ...state,
                    damagedDetails : state.damagedDetails.concat(detail)
                }
            }
        };
        case ActionTypes.ADD_DETAIL_FAILURE: {
            if (isDetailExist(state.damagedDetails, action.detailId)) {
                return state;
            } else {
                return {
                    ...state,
                    failedAction: {
                        type: 'add',
                        detailDame: action.detailName,
                    }
                }
            }
        }
        case ActionTypes.REMOVE_DETAIL_SUCCESS: {
            return {
                ...state,
                damagedDetails: state.damagedDetails.filter(detail => {
                    return detail !== action.detail;
                })
            }
        }
        case ActionTypes.REMOVE_DETAIL_FAILURE: {
            return {
                ...state,
                failedAction: {
                    type: 'remove',
                    detailDame: action.detailName,
                }
            }
        }
        case ActionTypes.CLEAR_FAIL_LIST: {
            return {
                ...state,
                failedAction: {
                    type: 'none',
                    detailDame: ''
                }
            }
        }
        default: {
            return state;
        }
            
    }

}
