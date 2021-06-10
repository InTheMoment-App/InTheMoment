import React from 'react';
import { render, cleanup } from '@testing-library/react-native';

import Home from '../Home';

afterEach(cleanup);

describe('<Home />', () => {
    it('renders correctly', () => {
        const tree = render(<Home />).toJSON();
        //console.log(tree.children);
        expect(tree).toMatchSnapshot();
    });
});