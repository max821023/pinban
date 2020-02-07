import { connect } from 'react-redux';
import BoardIndex from './board_index';
import { openModal } from '../../actions/modal_actions';
import { fetchBoards } from '../../actions/board_actions';


const mSTP = (state) => {
  let boards = Object.values(state.entities.boards);
  boards = boards.filter(board => board.archived === false)
  return {
    boards
  }
};

const mDTP = dispatch => {
  return {
    fetchBoards: () => dispatch(fetchBoards()),
    openModal: (type) => dispatch(openModal(type))
  }
};

export default connect(mSTP, mDTP)(BoardIndex);