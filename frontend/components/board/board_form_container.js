import { connect } from 'react-redux';
import BoardForm from './board_form';
import { createBoard } from '../../actions/board_actions';

const mDTP = dispatch =>  {
  return {
    createBoard: (board) => dispatch(createBoard(board))
  }
}

export default connect(null, mDTP)(BoardForm);