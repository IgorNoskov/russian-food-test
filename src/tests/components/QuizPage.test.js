import React from 'react';
import {render} from '@testing-library/react';
import {StateProvider} from '../../states';
import quizReducer, {initialState, QUIZ_STATUSES} from '../../reducers/quizReducer';
import QuizPage from '../../components/QuizPage';

describe('renders right components when quiz has NOT_STARTED status', () => {
    test('renders Welcome component when quiz has NOT_STARTED status', () => {
        const {container} = render(
            <StateProvider initialState={initialState} reducer={quizReducer}>
                <QuizPage/>
            </StateProvider>
        );

        expect(container.querySelector('.welcome')).toBeInTheDocument();
    });

    test('doesn\'t render Quiz components when quiz has NOT_STARTED status', () => {
        const {container} = render(
            <StateProvider initialState={initialState} reducer={quizReducer}>
                <QuizPage/>
            </StateProvider>
        );

        expect(container.querySelector('.quiz')).toBeNull();
    });

    test('doesn\'t render QuizResult components when quiz has NOT_STARTED status', () => {
        const {container} = render(
            <StateProvider initialState={initialState} reducer={quizReducer}>
                <QuizPage/>
            </StateProvider>
        );

        expect(container.querySelector('.quiz-result')).toBeNull();
    });
});

describe('renders right components when quiz has STARTED status', () => {
    test('doesn\'t render Welcome component when quiz has STARTED status', () => {
        initialState.quizStatus = QUIZ_STATUSES.STARTED;

        const {container} = render(
            <StateProvider initialState={initialState} reducer={quizReducer}>
                <QuizPage/>
            </StateProvider>
        );

        expect(container.querySelector('.welcome')).toBeNull();
    });

    test('renders Quiz components when quiz has STARTED status', () => {
        initialState.quizStatus = QUIZ_STATUSES.STARTED;

        const {container} = render(
            <StateProvider initialState={initialState} reducer={quizReducer}>
                <QuizPage/>
            </StateProvider>
        );

        expect(container.querySelector('.quiz')).toBeInTheDocument();
    });

    test('doesn\'t render QuizResult components when quiz has STARTED status', () => {
        initialState.quizStatus = QUIZ_STATUSES.STARTED;

        const {container} = render(
            <StateProvider initialState={initialState} reducer={quizReducer}>
                <QuizPage/>
            </StateProvider>
        );

        expect(container.querySelector('.quiz-result')).toBeNull();
    });
});

describe('renders right components when quiz has FINISHED status', () => {
    test('doesn\'t render Welcome component when quiz has FINISHED status', () => {
        initialState.quizStatus = QUIZ_STATUSES.FINISHED;

        const {container} = render(
            <StateProvider initialState={initialState} reducer={quizReducer}>
                <QuizPage/>
            </StateProvider>
        );

        expect(container.querySelector('.welcome')).toBeNull();
    });

    test('doesn\'t render Quiz components when quiz has FINISHED status', () => {
        initialState.quizStatus = QUIZ_STATUSES.FINISHED;

        const {container} = render(
            <StateProvider initialState={initialState} reducer={quizReducer}>
                <QuizPage/>
            </StateProvider>
        );

        expect(container.querySelector('.quiz')).toBeNull();
    });

    test('renders QuizResult components when quiz has FINISHED status', () => {
        initialState.quizStatus = QUIZ_STATUSES.FINISHED;

        const {container} = render(
            <StateProvider initialState={initialState} reducer={quizReducer}>
                <QuizPage/>
            </StateProvider>
        );

        expect(container.querySelector('.quiz-result')).toBeInTheDocument();
    });
});
