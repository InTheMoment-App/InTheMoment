import React from 'react';
import { render, cleanup } from '@testing-library/react-native';

import Profile from '../Profile';

afterEach(cleanup);

describe('<Profile />', () => {

    it('has general lists item', () => {
        const { queryAllByText } = render(<Profile/>);
        const generalListItem = queryAllByText('General');
        expect(generalListItem).toHaveLength(1);
    });

    it('has appearance list item', () => {
        const { queryAllByText } = render(<Profile/>);
        const appearanceListItem = queryAllByText('Appearance');
        expect(appearanceListItem).toHaveLength(1);
    });

    it('has notifications list item', () => {
        const { queryAllByText } = render(<Profile/>);
        const notificationseListItem = queryAllByText('Notifications');
        expect(notificationseListItem).toHaveLength(1);
    });

    it('has security list item', () => {
        const { queryAllByText } = render(<Profile/>);
        const securityListItem = queryAllByText('Notifications');
        expect(securityListItem).toHaveLength(1);
    });

    it('has logout list item', () => {
        const { queryAllByText } = render(<Profile/>);
        const logoutListItem = queryAllByText('Logout');
        expect(logoutListItem).toHaveLength(1);
    });

    it('has delete list item', () => {
        const { queryAllByText } = render(<Profile/>);
        const deleteListItem = queryAllByText('Delete Account');
        expect(deleteListItem).toHaveLength(1);
    });
});