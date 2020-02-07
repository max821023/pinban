import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard, updateBoard } from '../../actions/board_actions';

const mSTP = (state, ownProps) => {
  return {
    board: state.entities.boards[ownProps.match.params.boardId]
  }
};

const mDTP = dispatch => {
  return {
    fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
    updateBoard: (board) => dispatch(updateBoard(board))
  }
}

export default connect(mSTP, mDTP)(BoardShow);