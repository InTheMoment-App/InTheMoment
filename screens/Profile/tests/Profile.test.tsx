import React from 'react';
import { render, cleanup } from '@testing-library/react-native';

import Profile from '../Profile';

afterEach(cleanup);

describe('<Profile />', () => {
    it('renders correctly', () => {
        const tree = render(<Profile />).toJSON();
        console.log(tree.children);
        expect(tree).toMatchSnapshot();
    });

    // it('has account score text', () => {
    //     const { queryAllByText } = render(<Profile/>);
    //     const generalListItem = queryAllByText('Account Score: 5250');
    //     expect(generalListItem).toHaveLength(1);
    // });
});