import { REMOVE_MESSAGE, LOAD_MESSAGES, LIKE_MESSAGE } from "../actionTypes";

const message = (state = [], action) => {
  switch (action.type) {
    case LOAD_MESSAGES:
      return [...action.messages];

    case REMOVE_MESSAGE:
      return state.filter(message => message._id !== action.id);

    case LIKE_MESSAGE:
      return {
        ...state,
        messages: state.messages.map(message =>
          message._id === action.payload.id
            ? { ...message, likes: action.payload.likes }
            : message
        )
      };
    default:
      return state;
  }
};

export default message;
