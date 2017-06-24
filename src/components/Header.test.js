import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Header from "./Header";

test('Header render test', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Header/>
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
