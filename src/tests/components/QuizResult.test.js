import React from 'react';
import {render} from '@testing-library/react';
import {StateProvider} from '../../states';
import quizReducer from '../../reducers/quizReducer';
import QuizResult from '../../components/QuizResult';
import {QuizStatuses} from '../../actions/quizActions';

let container;

beforeEach(() => {
    const initialState = {
        status: QuizStatuses.FINISHED,
        questionsAmount: 3,
        currentQuestionIndex: 4,
        answers: [
            {
                id: 0,
                answer: 'Answer',
                isCorrect: true,
            },
            {
                id: 1,
                answer: 'Answer',
                isCorrect: true,
            },
            {
                id: 2,
                answer: 'Answer',
                isCorrect: false,
            },
        ],
    };

    ({container} = render(
        <StateProvider initialState={initialState} reducer={quizReducer}>
            <QuizResult/>
        </StateProvider>
    ));
});

describe('renders QuizResult component', () => {
    test('renders QuizResult component', () => {
        expect(container.querySelector('.quiz-result')).toBeInTheDocument();
    });

    test('renders the title', () => {
        expect(container.querySelector('h5')).toBeInTheDocument();
    });

    test('the title has a right text', () => {
        expect(container.querySelector('h5').textContent)
            .toEqual('Not bad, you know something about Russian food.');
    });
});
