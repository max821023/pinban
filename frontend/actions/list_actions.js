import * as ListAPIUtil from '../util/list_api_util';

export const RECEIVE_LIST = 'RECEIVE_LIST';
export const RECEIVE_LIST_ERRORS = 'RECEIVE_LIST_ERRORS';

const receiveList = (list) => {
  return {
    type: RECEIVE_LIST,
    list
  };
};

const receiveListErrors = (errors) => {
  return {
    type: RECEIVE_LIST_ERRORS,
    errors
  };
};

export const createList = (list) => dispatch => {
  return ListAPIUtil.createList(list)
    .then(list => {
      dispatch(receiveList(list)),
      errors => dispatch(receiveListErrors(errors.responseJSON))
    })
};

export const updateList = (list) => (dispatch) => {
  return ListAPIUtil.updateList(list)
    .then((list) => {
    dispatch(receiveList(list)),
      (errors) => dispatch(receiveListErrors(errors.responseJSON));
  });
};