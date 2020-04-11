import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard, updateBoard } from '../../actions/board_actions';
import { createList, updateList, fetchLists } from '../../actions/list_actions';

const mSTP = (state, ownProps) => {
  return {
    board: state.entities.boards[ownProps.match.params.boardId],
    lists: Object.values(state.entities.lists)
  };
};

const mDTP = dispatch => {
  return {
    fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
    updateBoard: (board) => dispatch(updateBoard(board)),
    createList: (list) => dispatch(createList(list)),
    updateList: (list) => dispatch(updateList(list)),
    fetchLists: (boardId) => dispatch(fetchLists(boardId))
  }
}

export default connect(mSTP, mDTP)(BoardShow);