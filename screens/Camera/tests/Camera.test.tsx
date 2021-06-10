import React from 'react';
import { render, cleanup } from '@testing-library/react-native';

import Camera from '../Camera';

afterEach(cleanup);

describe('<Camera />', () => {
    it('renders correctly', () => {
        const tree = render(<Camera />).toJSON();
        //console.log(tree.children);
        expect(tree).toMatchSnapshot();
    });
});