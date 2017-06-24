import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import App from "./App";

test('App render test', () => {
  const component = renderer.create(
    <MemoryRouter>
      <App/>
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
