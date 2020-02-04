import { connect } from 'react-redux';
import BoardIndex from './board_index';
import {
  fetchBoards
} from '../../actions/board_actions';


const mSTP = (state) => {
  return {
    boards: Object.values(state.entities.boards)
  }
};

const mDTP = dispatch => {
  return {
    fetchBoards: () => dispatch(fetchBoards())
  }
};

export default connect(mSTP, mDTP)(BoardIndex);