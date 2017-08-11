import C from "../actions/constants";

export {user, users} from "./users";
export {todos, todosIsLoading} from "./todos";
export {todoFields} from "./todoFields";

// export const todosHasErrored = (state= false, action) => {
//   switch(action.type){

//     case C.FETCH_TODO_DATA:
//       return false

//     case C.FETCH_TODO_DATA_SUCCESS:
//       return false

//     case C.FETCH_TODO_DATA_ERROR:
//       return true

//     default:
//       return state;
//   }
// }


export const sort = (state="SORTED_BY_NAME", action) =>{
  switch(action.type){
    case C.SORT_ITEMS:
      return action.sortBy
    default:
      return state
  }
}


// export const todosD = (state = {
//   isFetching: false,
//   didInvalidate: false,
//   items: []
// }, action) => {
//     switch (action.type) {
//       case C.TODO_DATA_ERROR:
//         return {
//           ...state,
//           didInvalidate: true
//         }

//       case C.REQUEST_TODO_DATA:
//         return {
//           ...state,
//           isFetching: true,
//           didInvalidate: false
//         }

//       case C.RECEIVED_TODO_DATA:
//         return {
//           ...state,
//           isFetching: true,
//           didInvalidate: false,
//           items: action.items,
//           lastUpdated: action.receivedAt
//         }
//       default:
//         return state

// }



