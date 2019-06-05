import { REMOVE_MESSAGE, LOAD_MESSAGES, LIKE_MESSAGE } from "../actionTypes";

const message = (state = [], action) => {
  switch (action.type) {
    case LOAD_MESSAGES:
      return [...action.messages];

    case REMOVE_MESSAGE:
      return state.filter(message => message._id !== action.id);

    case LIKE_MESSAGE:
      return state.map(message => {
        if (message._id === action.id) {
          console.log(message.likes);
          return Object.assign({}, message, { likes: message.likes + 1 });
        }
        return message;
      });

    default:
      return state;
  }
};

export default message;
