import { connect } from 'react-redux';
import BoardForm from './board_form';
import { createBoard } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_actions';

const mDTP = dispatch =>  {
  return {
    createBoard: (board) => dispatch(createBoard(board)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(null, mDTP)(BoardForm);