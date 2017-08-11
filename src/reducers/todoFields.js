import C from "../actions/constants";

export const todoFields = (state={}, action) => {
  switch(action.type){
    case C.FILL_NAME:
      return {
        ...state,
        name: action.name
      };

    case C.FILL_TIME:
      return {
        ...state,
        time: action.time
      }

    default:
      return state;
  }
}
