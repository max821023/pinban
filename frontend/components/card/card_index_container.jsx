import { connect } from 'react-redux';
import CardIndex from './card_index';
import { createCard, updateCard, fetchCards, deleteCard } from '../../actions/card_actions';

const mSTP = (state, ownProps) => {
  return {
    cards: Object.values(state.entities.cards)
  };
};

const mDTP = (dispatch) => {
  return {
    createCard: (card) => dispatch(createCard(card)),
    updateCard: (card) => dispatch(updateCard(card)),
    fetchCards: (listId) => dispatch(fetchCards(listId)),
    deleteCard: (cardId) => dispatch(deleteCard(cardId))
  };
};

export default connect(mSTP, mDTP)(CardIndex);