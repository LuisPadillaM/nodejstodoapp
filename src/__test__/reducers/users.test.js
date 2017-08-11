import C from "../../actions/constants";
import { addTodoState, editTodo, removeTodo } from "../../actions/actionCreator";
import {users} from "Reducers/users";
import deepFreeze from 'deep-freeze';


describe("Users Reducer", () => {

  it(C.ADD_USER, () => {
    const state = {}
    const action = addTodoState({
    });

    const expectedResult = {

    }
    expect(users(state, action)).toEqual(expectedResult);
  })

  it(C.EDIT_USER, () => {
    const state = {}
    const action = editTodo({
    });

    const expectedResult = {

    }
    expect(users(state, action)).toEqual(expectedResult);
  });

  it(C.REMOVE_USER,() => {
    const state = {}
        const action = removeTodo({
    });

    const expectedResult = {

    }
    expect(users(state, action)).toEqual(expectedResult);

  })

});
