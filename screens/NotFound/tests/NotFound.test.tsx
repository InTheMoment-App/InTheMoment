import React from 'react';
import { render, cleanup } from '@testing-library/react-native';

import NotFound from '../NotFound';

afterEach(cleanup);

describe('<NotFound />', () => {
    it('renders correctly', () => {
        const tree = render(<NotFound />).toJSON();
        //console.log(tree.children);
        expect(tree).toMatchSnapshot();
    });
});