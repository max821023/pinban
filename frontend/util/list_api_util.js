export const createList = (list) => (
  $.ajax({
    method: 'POST',
    url: `/api/lists`,
    data: { list }
  })
);

export const updateList = (list) => (
  $.ajax({
    method: "PATCH",
    url: `/api/lists/${list.id}`,
    data: { list },
  })
);

export const fetchLists = (boardId) => (
  $.ajax({
    method: 'GET',
    url: '/api/lists',
    data: { id: boardId }
  })
);

export const deleteList = (listId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/lists/${listId}`,
    data: { id: listId }
  })
);