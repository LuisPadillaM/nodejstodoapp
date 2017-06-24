import React from 'react';
import renderer from 'react-test-renderer';
import TodoForm from './todoForm.js';


test('TodoForm render test', () => {

  const component = renderer.create(
    <TodoForm add={(x) => x} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

