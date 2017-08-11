import C from "../actions/constants";


export const user = (state={}, action) =>{
  switch(action.type){
    case C.ADD_USER:
      return {
        id: action.id,
        task: action.task
      }
    case C.EDIT_USER:
      return (state.id !== action.id) ?
        state :{
        ...state,
        task: action.task
      }

    default:
      return state;
  }
}

export const users = (state=[], action) =>{
  switch(action.type){
    case C.ADD_USER:
      return [
        ...state,
        user({}, action)
      ]
    case C.EDIT_USER:
      return state.map(
        c => user(c, action)
      )

    case C.REMOVE_USER:
      return state.filter(
        c => c.id !== action.id
      )

    default:
      return state;
  }
}
