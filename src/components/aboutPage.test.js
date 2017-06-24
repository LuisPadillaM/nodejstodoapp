import React from 'react';
import renderer from 'react-test-renderer';
import AboutPage from "./aboutPage";

test('About page render test', () => {
  const component = renderer.create(
    <AboutPage/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
