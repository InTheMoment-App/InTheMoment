import React from 'react';
import { render, cleanup } from '@testing-library/react-native';

import FullScreenImage from '../FullScreenImage';

afterEach(cleanup);

describe('<FullScreenImage />', () => {
    it('renders correctly', () => {
        const tree = render(<FullScreenImage />).toJSON();
        //console.log(tree.children);
        expect(tree).toMatchSnapshot();
    });
});