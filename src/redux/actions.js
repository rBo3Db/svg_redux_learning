export const ActionTypes = {
    ADD_DETAIL: 'ADD_DETAIL',
    ADD_DETAIL_SUCCESS: 'ADD_DETAIL_SUCCESS',
    ADD_DETAIL_FAILURE: 'ADD_DETAIL_FAILURE',
    ADD_DETAIL_ASYNC: 'ADD_DETAIL_ASYNC',
    REMOVE_DETAIL: 'REMOVE_DETAIL',
    REMOVE_DETAIL_SUCCESS: 'REMOVE_DETAIL_SUCCESS',
    REMOVE_DETAIL_FAILURE: 'REMOVE_DETAIL_FAILURE',
  }

export const addDetail = (detailName, detailId) => {
    return {
        type: ActionTypes.ADD_DETAIL,
        detailName,
        detailId,
    }
}
export const addDetailSuccess = (detailName, detailId) => {
    return {
        type: ActionTypes.ADD_DETAIL_SUCCESS,
        detailName,
        detailId
    }
}
export const addDetailFailure = (detailName, detailId) => {
    return {
        type: ActionTypes.ADD_DETAIL_FAILURE,
        detailName,
        detailId
    }
}

export const deleteDetail = (detail) => {
    return {
        type: ActionTypes.REMOVE_DETAIL,
        detail,
    }
};
export const deleteDetailSuccess = (detail) => {
    return {
        type: ActionTypes.REMOVE_DETAIL_SUCCESS,
        detail,
    }
}
export const deleteDetailFailure = (detail) => {
    return {
        type: ActionTypes.REMOVE_DETAIL_FAILURE,
        detail,
    }
}

export function addDetailAsync(detailName, detailId) {
    return (dispatch) => {
        dispatch(addDetail(detailName, detailId))
        console.log(detailName, detailId)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                Math.round(Math.random()) ? resolve({detailName, detailId}) : reject({detailName, detailId})
            }, 100)
        })
            .then(({detailName, detailId}) => {
                dispatch(addDetailSuccess(detailName, detailId));
            })
            .catch(({detailName, detailId}) => dispatch(addDetailFailure(detailName, detailId)));
    }
  }

export function removeDetailAsync(detail) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                Math.round(Math.random()) ? resolve(detail) : reject(new Error())
            }, 100)
        })
            .then(detail => {
                dispatch(deleteDetailSuccess(detail));
            })
            .catch(error => dispatch(deleteDetailFailure()));
    }
}
