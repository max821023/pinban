import {
  RECEIVE_CARD,
  RECEIVE_CARDS,
  REMOVE_CARD,
} from "../actions/card_actions";

const cardsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CARDS:
      return action.cards;
    case RECEIVE_CARD:
      return Object.assign({}, state, { [action.card.id]: action.card });
    case REMOVE_CARD:
      let newState = Object.assign({}, state);
      delete newState[action.card.id];
      return newState;
    default:
      return state;
  }
};

export default cardsReducer;
