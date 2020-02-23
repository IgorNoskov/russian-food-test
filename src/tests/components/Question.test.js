import React from 'react';
import {render} from '@testing-library/react';
import Question from '../../components/Question';
import quizData from '../../data/quizData';

let container;

beforeEach(() => {
    ({container} = render(
        <Question
            question={quizData.questions[0]}
            onInputChange={() => {
            }}/>
    ));
});

describe('renders Question component', () => {
    test('renders Question component', () => {
        expect(container.querySelector('.question')).toBeInTheDocument();
    });

    test('renders the input', () => {
        expect(container.querySelector('input[type="radio"]')).toBeInTheDocument();
    });

    test('renders the label', () => {
        expect(container.querySelector('label')).toBeInTheDocument();
    });

    test('the label has a right text', () => {
        expect(container.querySelector('label').textContent).toEqual(quizData.questions[0].options[0]);
    });
});
