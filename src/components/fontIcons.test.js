import React from 'react';
import FontIcons from './fontIcons.js';
import renderer from 'react-test-renderer';

test('Font icons render test', () => {

  const icons = [{value: "edit"}, {value: "delete", attr: {class: "small"}}];

  const component = renderer.create(
    <FontIcons  icons={icons} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
