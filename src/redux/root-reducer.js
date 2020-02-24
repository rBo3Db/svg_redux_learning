import {ActionTypes} from './actions';

// {
//     name: 'Левое Переднее Крыло',
//     id: 'left',
//     isHighlighted: false,
// }, 'Левая Передняя Дверь'

const initialState = {
    damagedDetails : []
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        // case ActionTypes.ADD_DETAIL: {
        //     const detail = {
        //         name: action.detailName,
        //         id: action.detailId,
        //     }
        //     return {
        //         ...state,
        //         damagedDetails : state.damagedDetails.concat(detail)
        //     }
        // }
        case ActionTypes.ADD_DETAIL_SUCCESS: {
            console.log(action);
            // if (!state.damagedDetails.includes(action.detail)) {
                const detail = {
                    name: action.detailName,
                    id: action.detailId,
                    isError: false,
                }
                return {
                    ...state,
                    damagedDetails : state.damagedDetails.concat(detail)
                }
            // } else {
            //     return state;
            // };
        };
        case ActionTypes.ADD_DETAIL_FAILURE: {
            console.log(action);
            // if (!state.damagedDetails.includes(action.detail)) {
                const detail = {
                    name: action.detailName,
                    id: action.detailId,
                    isError: true,
                }
                return {
                    ...state,
                    damagedDetails : state.damagedDetails.concat(detail)
                }
            // } else {
            //     return state;
            // };
        }
        case ActionTypes.REMOVE_DETAIL_SUCCESS: {
            return {
                ...state,
                damagedDetails: state.damagedDetails.filter(detail => {
                    return detail !== action.detail;
                })
            }
        }
        default: {
            return state;
        }
            
    }

}
