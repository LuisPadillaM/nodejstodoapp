import React from 'react';
import Loader from 'Components/Loader.js';
import renderer from 'react-test-renderer';

test('Loader render test', () => {
  const component = renderer.create(
    <Loader/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
