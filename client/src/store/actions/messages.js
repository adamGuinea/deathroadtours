import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_MESSAGES, REMOVE_MESSAGE, LIKE_MESSAGE } from "../actionTypes";

export const loadMessages = messages => ({
  type: LOAD_MESSAGES,
  messages
});

export const remove = id => ({
  type: REMOVE_MESSAGE,
  id
});

export const likeMessage = (message_id, currentUser) => async dispatch => {
  try {
    const res = await apiCall("put", `/api/update/${message_id}`, {currentUser});
    dispatch({
      type: LIKE_MESSAGE,
      payload: { message_id, likes: res }
    });
  } catch (err) {
    return;
  }
};

export const removeMessage = (user_id, message_id) => {
  return dispatch => {
    return apiCall("delete", `/api/users/${user_id}/messages/${message_id}`)
      .then(() => dispatch(remove(message_id)))
      .catch(err => addError(err.message));
  };
};

export const fetchMessages = () => {
  return dispatch => {
    return apiCall("get", "/api/messages")
      .then(res => {
        dispatch(loadMessages(res));
      })
      .catch(err => {
        dispatch(addError(err.message));
      });
  };
};

export const postNewMessage = text => (dispatch, getState) => {
  let { currentUser } = getState();
  const id = currentUser.user.id;
  return apiCall("post", `/api/users/${id}/messages`, { text })
    .then(res => {})
    .catch(err => addError(err.message));
};
