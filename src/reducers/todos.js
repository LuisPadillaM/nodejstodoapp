import C from "../actions/constants";

export const todo = (state={}, action) => {
  switch(action.type){
    case C.ADD_ITEM:
      return {
        ...action.todo
      }
    case C.EDIT_ITEM:
      return (state.id !== action.id) ?
        state :{
        ...state,
        ...action.item
      }

    default:
      return state;
  }
}

export const todos = (state=[], action) => {
  switch(action.type){
    case C.ADD_ITEM:
      return [
        ...state,
        todo({}, action)
      ]
    case C.EDIT_ITEM:
      return state.map(
        c => todo(c, action)
      )

    case C.REMOVE_ITEM:
      return state.filter(
        c => c._id !== action.id
      )

    case C.FETCH_TODO_DATA_SUCCESS:
      return [
        ...action.todos
      ]

    default:
      return state;
  }
}

export const todosIsLoading = (state= false, action) => {
  switch(action.type){

    case C.FETCH_TODO_DATA:
      return true

    case C.FETCH_TODO_DATA_SUCCESS:
      return false

    case C.FETCH_TODO_DATA_ERROR:
      return false

    default:
      return state;
  }
}
