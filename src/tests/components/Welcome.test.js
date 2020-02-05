import React from 'react';
import {render} from '@testing-library/react';
import {StateProvider} from '../../states';
import quizReducer, {initialState} from '../../reducers/quizReducer';
import Welcome from '../../components/Welcome';

describe('renders Welcome component', () => {
    test('renders Welcome component', () => {
        const {container} = render(
            <StateProvider initialState={initialState} reducer={quizReducer}>
                <Welcome/>
            </StateProvider>
        );

        expect(container.querySelector('.welcome')).toBeInTheDocument();
    });

    test('renders the title', () => {
        const {container} = render(
            <StateProvider initialState={initialState} reducer={quizReducer}>
                <Welcome/>
            </StateProvider>
        );

        expect(container.querySelector('h1')).toBeInTheDocument();
    });

    test('renders the lead text', () => {
        const {container} = render(
            <StateProvider initialState={initialState} reducer={quizReducer}>
                <Welcome/>
            </StateProvider>
        );

        expect(container.querySelector('p.lead')).toBeInTheDocument();
    });

    test('renders the button', () => {
        const {container} = render(
            <StateProvider initialState={initialState} reducer={quizReducer}>
                <Welcome/>
            </StateProvider>
        );

        expect(container.querySelector('.btn')).toBeInTheDocument();
    });
});
