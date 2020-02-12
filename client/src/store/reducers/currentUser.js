import { SET_CURRENT_USER, UPDATE_CURRENT_USER } from "../actionTypes";

const DEFAULT_STATE = {
  isAuthenticated: false,
  user: {}
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !!Object.keys(action.user).length,
        user: action.user
      };
    case UPDATE_CURRENT_USER:
      console.log(action);
      return {
        isAuthenticated: !!Object.keys(action.user).length,
        user: action.updatedUser
      };

    default:
      return state;
  }
};
