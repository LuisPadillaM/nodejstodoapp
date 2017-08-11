import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import "isomorphic-fetch";
import TodoApp from "Components/todoApp";

test('Todo App render test', () => {
  const component = renderer.create(
    <MemoryRouter>
      <TodoApp/>
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
