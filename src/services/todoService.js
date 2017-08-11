import "isomorphic-fetch";
import C from "../actions/constants";
import { getTodo, addItem, deleteItem, updateItem } from "../api/todoApiMongoose";

const dataService = store => next => action => {
  /*
  Pass all actions through by default
  */
  next(action)
  switch (action.type) {
  case C.REQUEST_TODO_DATA:
    /*
    In case we receive an action to send an API request, send the appropriate request
    */

    getTodo().then(
      (data) => {
        /*
        Once data is received, dispatch an action telling the application
        that data was received successfully, along with the parsed data
        */
        next({
          type: C.RECEIVED_TODO_DATA,
          data
        })
      },
      (err) => {
        if (err) {
          /*
          in case there is any error, dispatch an action containing the error
          */
          return next({
            type: C.TODO_DATA_ERROR,
            err
          })
        }
    });
    break

  /*
  Do nothing if the action does not interest us
  */
  default:
    break
  }

};

export default dataService
