import React from 'react';
import {render} from '@testing-library/react';
import Question from '../../components/Question';
import quizData from '../../store/quizData';

describe('renders Question component', () => {
    test('renders Question component', () => {
        const {container} = render(
            <Question
                question={quizData.questions[0]}
                onInputChange={() => {
                }}/>
        );

        expect(container.querySelector('.question')).toBeInTheDocument();
    });

    test('renders the input', () => {
        const {container} = render(
            <Question
                question={quizData.questions[0]}
                onInputChange={() => {
                }}/>
        );

        expect(container.querySelector('input[type="radio"]')).toBeInTheDocument();
    });

    test('renders the label', () => {
        const {container} = render(
            <Question
                question={quizData.questions[0]}
                onInputChange={() => {
                }}/>
        );

        expect(container.querySelector('label')).toBeInTheDocument();
    });

    test('the label has a right text', () => {
        const {container} = render(
            <Question
                question={quizData.questions[0]}
                onInputChange={() => {
                }}/>
        );

        expect(container.querySelector('label').textContent).toEqual(quizData.questions[0].options[0]);
    });
});
