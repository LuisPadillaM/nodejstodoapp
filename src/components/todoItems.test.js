import React from 'react';
import {shallow} from 'enzyme';
import TodoItems from './todoItems.js';
import renderer from 'react-test-renderer';

test('Todo Items render test', () => {

  const itemsMock = [
    {
      "id": 23869840,
      "task": "doSomething"
    },
    {
      "id": 23869840,
      "task": "doSomethingElse"
    },
  ]

  let deleteItem = (e) => e

  const component = renderer.create(
    <TodoItems items={itemsMock} deleteItem={deleteItem} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  //manually trigger deleteItem
  // tree.props.deleteItem();
});
