import React from 'react';
import { render, cleanup } from '@testing-library/react-native';

import Leaderboard from '../Leaderboard';

afterEach(cleanup);

describe('<Leaderboard />', () => {
    it('renders correctly', () => {
        const tree = render(<Leaderboard />).toJSON();
        //console.log(tree.children);
        expect(tree).toMatchSnapshot();
    });
});