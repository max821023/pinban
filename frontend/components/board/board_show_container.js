import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard } from '../../actions/board_actions';

const mSTP = (state, ownProps) => {
  return {
    board: state.entities.boards[ownProps.match.params.boardId]
  }
};

const mDTP = dispatch => {
  return {
    fetchBoard: (boardId) => dispatch(fetchBoard(boardId))
  }
}

export default connect(mSTP, mDTP)(BoardShow);