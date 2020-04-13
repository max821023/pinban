import {
  RECEIVE_LIST,
  RECEIVE_LISTS,
  REMOVE_LIST
} from '../actions/list_actions'

const listsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LISTS:
      return action.lists
    case RECEIVE_LIST:
      return Object.assign({}, state, { [action.list.id]: action.list })
    case REMOVE_LIST:
      let newState = Object.assign({}, state);
      delete newState[action.list.id];
      return newState;
    default:
      return state;
  }
};

export default listsReducer;

// home button onclick clear lists return empty object action reducers no util