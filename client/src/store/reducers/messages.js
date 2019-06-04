import { REMOVE_MESSAGE, LOAD_MESSAGES, INCREASE_LIKES } from "../actionTypes";

const message = (state = [], action) => {
  switch (action.type) {
    case LOAD_MESSAGES:
      return [...action.messages];

    case REMOVE_MESSAGE:
      return state.filter(message => message._id !== action.id);

    case INCREASE_LIKES:
      return { newLikeState: this.state.likes + 1 };

    default:
      return state;
  }
};

export default message;
