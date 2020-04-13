import * as CardAPIUtil from "../util/card_api_util";

export const RECEIVE_CARDS = "RECEIVE_CARDS";
export const RECEIVE_CARD = "RECEIVE_CARD";
export const RECEIVE_CARD_ERRORS = "RECEIVE_CARD_ERRORS";
export const REMOVE_CARD = "REMOVE_CARD";

const receiveCard = (card) => {
  return {
    type: RECEIVE_CARD,
    card
  };
};

const receiveCards = (cards) => {
  return {
    type: RECEIVE_CARDS,
    cards
  };
};

const receiveCardErrors = (errors) => {
  return {
    type: RECEIVE_CARD_ERRORS,
    errors
  };
};

const removeCard = (card) => {
  return {
    type: REMOVE_CARD,
    card
  };
};

export const fetchCards = (listId) => (dispatch) => {
  return CardAPIUtil.fetchCards(listId).then((cards) => {
    dispatch(receiveCards(cards)),
      (errors) => dispatch(receiveCardErrors(errors.responseJSON));
  });
};

export const createCard = (card) => (dispatch) => {
  return CardAPIUtil.createCard(card).then((card) => {
    dispatch(receiveCard(card)),
      (errors) => dispatch(receiveCardErrors(errors.responseJSON));
  });
};

export const updateCard = (card) => (dispatch) => {
  return CardAPIUtil.updateCard(card).then((card) => {
    dispatch(receiveCard(card)),
      (errors) => dispatch(receiveCardErrors(errors.responseJSON));
  });
};

export const deleteCard = (cardId) => (dispatch) => {
  return CardAPIUtil.deleteCard(cardId).then((card) => {
    dispatch(removeCard(card)),
      (errors) => dispatch(receiveCardErrors(errors.responseJSON));
  });
};
