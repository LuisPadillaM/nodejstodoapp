import C from "../../actions/constants";
import {addTodoState, editTodo} from "../../actions/actionCreator";
import {todos} from "Reducers/todos";
import deepFreeze from 'deep-freeze';

describe("todos Reducer", () => {

  test(C.ADD_ITEM, () => {
    const state = {}
    const action = addTodoState({
      "_id": 0,
      "task": "test1",
      "time": Date()
    });
    const expectedResult = {
      "_id": 0,
      "task": "test1",
      "time": Date()
    }
    deepFreeze(state);
    deepFreeze(action)
    expect(todos(state,action)).toEqual(expectedResult);

  });

  test(C.EDIT_ITEM, () => {

    const state = {
      "_id": 0,
      "task": "test1",
      "time": Date()
    };

    const action = editTodo(0,{
      "_id": 0,
      "task": "test2",
      "time": Date()
    });

    const expectedResult = {
      "_id": 0,
      "task": "test2",
      "time": Date()
    }

    deepFreeze(state);
    deepFreeze(action)
    expect(todos(state,action)).toEqual(expectedResult);

  });

});
