export const fetchBoards = () => (
  $.ajax({
    method: 'GET',
    url: '/api/boards'
  })
);

export const fetchBoard = (boardId) => (
  $.ajax({
    method: 'GET',
    url: `/api/boards/${boardId}`
  })
);

export const createBoard = (board) => (
  $.ajax({
    method: 'POST',
    url: '/api/boards',
    data: { board }
  })
);