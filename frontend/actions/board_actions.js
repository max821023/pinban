import * as BoardAPIUtil from '../util/board_api_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';

const receiveBoards = (boards) => {
  return {
    type: RECEIVE_BOARDS,
    boards
  };
};

const receiveBoard = (board) => {
  return {
    type: RECEIVE_BOARD,
    board
  };
};

const receiveBoardErrors = (errors) => {
  return {
    type: RECEIVE_BOARD_ERRORS,
    errors
  };
};

export const fetchBoards = () => dispatch => {
  return BoardAPIUtil.fetchBoards()
    .then(boards => dispatch(receiveBoards(boards)), 
    errors => dispatch(receiveBoardErrors(errors.responseJSON)))
};

export const fetchBoard = (boardId) => dispatch => {
  return BoardAPIUtil.fetchBoard(boardId)
    .then(board => dispatch(receiveBoard(board)), 
    errors => dispatch(receiveBoardErrors(errors.responseJSON)))
};

export const createBoard = (board) => dispatch => {
  return BoardAPIUtil.createBoard(board)
    .then(board => {
      dispatch(receiveBoard(board))
      return board;
    }, 
    errors => dispatch(receiveBoardErrors(errors.responseJSON)))
};

export const updateBoard = (board) => dispatch => {
  return BoardAPIUtil.updateBoard(board)
    .then(board => dispatch(updateBoard(board)),
    errors => dispatch(receiveBoardErrors(errors.responseJSON)))
}