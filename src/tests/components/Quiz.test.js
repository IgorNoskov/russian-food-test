import React from 'react';
import {render} from '@testing-library/react';
import {StateProvider} from '../../states';
import quizReducer, {initialState} from '../../reducers/quizReducer';
import Quiz from '../../components/Quiz';

describe('renders Quiz component', () => {
    test('renders Quiz component', () => {
        const {container} = render(
            <StateProvider initialState={initialState} reducer={quizReducer}>
                <Quiz/>
            </StateProvider>
        );

        expect(container.querySelector('.quiz')).toBeInTheDocument();
    });

    test('renders the title', () => {
        const {container} = render(
            <StateProvider initialState={initialState} reducer={quizReducer}>
                <Quiz/>
            </StateProvider>
        );

        expect(container.querySelector('h5')).toBeInTheDocument();
    });

    test('renders the button', () => {
        const {container} = render(
            <StateProvider initialState={initialState} reducer={quizReducer}>
                <Quiz/>
            </StateProvider>
        );

        expect(container.querySelector('.btn')).toBeInTheDocument();
    });
});
