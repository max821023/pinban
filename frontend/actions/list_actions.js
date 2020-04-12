import * as ListAPIUtil from '../util/list_api_util';

export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const RECEIVE_LIST_ERRORS = 'RECEIVE_LIST_ERRORS';
export const REMOVE_LIST = 'REMOVE_LIST';

const receiveList = (list) => {
  return {
    type: RECEIVE_LIST,
    list
  };
};

const receiveLists = (lists) => {
  return {
    type: RECEIVE_LISTS,
    lists
  }
}

const receiveListErrors = (errors) => {
  return {
    type: RECEIVE_LIST_ERRORS,
    errors
  };
};

const removeList = (list) => {
  return {
    type: REMOVE_LIST,
    list
  }
};

export const fetchLists = (boardId) => dispatch => {
  return ListAPIUtil.fetchLists(boardId)
    .then(lists => {
      dispatch(receiveLists(lists)),
      errors => dispatch(receiveListErrors(errors.responseJSON))
    })
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

export const deleteList = (listId) => dispatch => {
  return ListAPIUtil.deleteList(listId)
    .then((list) => {
      dispatch(removeList(list)),
      errors => dispatch(receiveListErrors(errors.responseJSON))
    })
};