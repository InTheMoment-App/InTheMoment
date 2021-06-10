import React from 'react';
import { render, cleanup } from '@testing-library/react-native';

import Login from '../Login';

afterEach(cleanup);

describe('<Login />', () => {
    it('renders correctly', () => {
        const tree = render(<Login />).toJSON();
        //console.log(tree.children);
        expect(tree).toMatchSnapshot();
    });
});