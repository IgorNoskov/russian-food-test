import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import App from '../App';
import {StateProvider} from '../states';
import quizReducer, {initialState} from '../reducers/quizReducer';
import quizData from '../data/quizData';

test('renders QuizPage component', () => {
    const {container} = render(<App/>);
    const page = container.querySelector('.quiz-page');

    expect(page).toBeInTheDocument();
});

test('the quiz starts, when the questions end, the result is displayed', () => {
    const {container} = render(
        <StateProvider initialState={initialState} reducer={quizReducer}>
            <App/>
        </StateProvider>
    );

    expect(container.querySelector('.welcome')).toBeInTheDocument();

    fireEvent.click(container.querySelector('.welcome .btn'));

    expect(container.querySelector('.welcome')).not.toBeInTheDocument();

    expect(container.querySelector('.quiz')).toBeInTheDocument();

    quizData.questions.forEach(function () {
        fireEvent.click(container.querySelector('input[type="radio"]'));
        fireEvent.click(container.querySelector('.quiz .btn'));
    });

    expect(container.querySelector('.quiz')).not.toBeInTheDocument();

    expect(container.querySelector('.quiz-result')).toBeInTheDocument();
});
