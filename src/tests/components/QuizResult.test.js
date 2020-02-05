import React from 'react';
import {render} from '@testing-library/react';
import {StateProvider} from '../../states';
import quizReducer, {initialState} from '../../reducers/quizReducer';
import QuizResult from '../../components/QuizResult';

describe('renders QuizResult component', () => {
    test('renders QuizResult component', () => {
        const {container} = render(
            <StateProvider initialState={initialState} reducer={quizReducer}>
                <QuizResult/>
            </StateProvider>
        );

        expect(container.querySelector('.quiz-result')).toBeInTheDocument();
    });

    test('renders the title', () => {
        const {container} = render(
            <StateProvider initialState={initialState} reducer={quizReducer}>
                <QuizResult/>
            </StateProvider>
        );

        expect(container.querySelector('h5')).toBeInTheDocument();
    });

    test('the title has a right text', () => {
        const {container} = render(
            <StateProvider initialState={initialState} reducer={quizReducer}>
                <QuizResult/>
            </StateProvider>
        );

        expect(container.querySelector('h5').textContent)
            .toEqual('Oops! You don\'t know anything about Russian food!');
    });
});
