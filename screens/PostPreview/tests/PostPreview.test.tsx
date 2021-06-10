import React from 'react';
import { render, cleanup } from '@testing-library/react-native';

import PostPreview from '../PostPreview';

afterEach(cleanup);

describe('<PostPreview />', () => {
    it('renders correctly', () => {
        const tree = render(<PostPreview />).toJSON();
        //console.log(tree.children);
        expect(tree).toMatchSnapshot();
    });
});