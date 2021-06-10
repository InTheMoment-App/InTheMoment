import React from 'react';
import { render, cleanup } from '@testing-library/react-native';

import Settings from '../Settings';

afterEach(cleanup);

describe('<Settings />', () => {

    it('has general lists item', () => {
        const { queryAllByText } = render(<Settings/>);
        const generalListItem = queryAllByText('General');
        expect(generalListItem).toHaveLength(1);
    });

    it('has appearance list item', () => {
        const { queryAllByText } = render(<Settings/>);
        const appearanceListItem = queryAllByText('Appearance');
        expect(appearanceListItem).toHaveLength(1);
    });

    it('has notifications list item', () => {
        const { queryAllByText } = render(<Settings/>);
        const notificationseListItem = queryAllByText('Notifications');
        expect(notificationseListItem).toHaveLength(1);
    });

    it('has security list item', () => {
        const { queryAllByText } = render(<Settings/>);
        const securityListItem = queryAllByText('Notifications');
        expect(securityListItem).toHaveLength(1);
    });

    it('has logout list item', () => {
        const { queryAllByText } = render(<Settings/>);
        const logoutListItem = queryAllByText('Logout');
        expect(logoutListItem).toHaveLength(1);
    });

    it('has delete list item', () => {
        const { queryAllByText } = render(<Settings/>);
        const deleteListItem = queryAllByText('Delete Account');
        expect(deleteListItem).toHaveLength(1);
    });
});