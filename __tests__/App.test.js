

import React from 'react';
import renderer from 'react-test-renderer';
import App from "../App";

describe('test an app', () => {
    test('render an app correctly', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})
