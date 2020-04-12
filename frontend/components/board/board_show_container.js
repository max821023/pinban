import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard, updateBoard } from '../../actions/board_actions';
import { createList, updateList, fetchLists, deleteList } from '../../actions/list_actions';
import { createCard, updateCard, fetchCards, deleteCard } from '../../actions/card_actions';

const mSTP = (state, ownProps) => {
  return {
    board: state.entities.boards[ownProps.match.params.boardId],
    lists: Object.values(state.entities.lists),
    cards: Object.values(state.entities.cards)
  };
};

const mDTP = dispatch => {
  return {
    fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
    updateBoard: (board) => dispatch(updateBoard(board)),
    createList: (list) => dispatch(createList(list)),
    updateList: (list) => dispatch(updateList(list)),
    fetchLists: (boardId) => dispatch(fetchLists(boardId)),
    deleteList: (listId) => dispatch(deleteList(listId)),
    createCard: (card) => dispatch(createCard(card)),
    updateCard: (card) => dispatch(updateCard(card)),
    fetchCards: (listId) => dispatch(fetchCards(listId)),
    deleteCard: (cardId) => dispatch(deleteCard(cardId))
  };
}

export default connect(mSTP, mDTP)(BoardShow);