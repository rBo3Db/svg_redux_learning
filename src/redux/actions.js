export const ActionTypes = {
    ADD_DETAIL: 'ADD_DETAIL',
    ADD_DETAIL_SUCCESS: 'ADD_DETAIL_SUCCESS',
    ADD_DETAIL_FAILURE: 'ADD_DETAIL_FAILURE',
  }

export const addDetail = (detail) => {
    return {
        type: ActionTypes.ADD_DETAIL,
        detail
    }
}
export const addDetailSuccess = (detail) => {
    return {
        type: ActionTypes.ADD_DETAIL_SUCCESS,
        detail
    }
}
export const addDetailFailure = () => {
    return {
        type: ActionTypes.ADD_DETAIL_FAILURE
    }
}

export default function addDetailAsync(detail) {
    return dispatch => {
      dispatch(addDetail(detail))
      return new Promise((resolve, reject) => {
                setTimeout(() => {
                    Math.round(Math.random()) ? resolve() : reject(new Error())
                }, responseTime)
            })
                .then(detail => {
                    dispatch(addDetailSuccess(detail));
                })
                .catch(error => dispatch(addDetailFailure()));
    }
  }
