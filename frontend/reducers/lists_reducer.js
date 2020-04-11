import {
  RECEIVE_LIST,
  RECEIVE_LISTS
} from '../actions/list_actions'

const listsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LISTS:
      return action.lists
    case RECEIVE_LIST:
      return Object.assign({}, state, { [action.list.id]: action.list })
    default:
      return state;
  }
};

export default listsReducer;