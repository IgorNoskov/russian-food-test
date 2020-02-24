import quizReducer, {initialState} from '../../reducers/quizReducer';
import {QuizStatuses, START, ADD_QUESTIONS_AMOUNT, ADD_ANSWER, ADD_RESULT} from '../../actions/quizActions';

test('initial state has right values', () => {
    expect(initialState).toEqual({
        status: QuizStatuses.NOT_STARTED,
        questionsAmount: 0,
        currentQuestionIndex: 0,
        answers: [],
        result: '',
    });
});

describe('quiz reducer returns right states', () => {
    test('returns a right state with type START', () => {
        const result = quizReducer(initialState, {type: START, payload: {status: QuizStatuses.STARTED}});

        expect(result).toEqual({
            status: QuizStatuses.STARTED,
            questionsAmount: 0,
            currentQuestionIndex: 0,
            answers: [],
            result: '',
        });
    });

    test('returns a right state with type ADD_QUESTIONS_AMOUNT', () => {
        const state = {
            status: QuizStatuses.STARTED,
            questionsAmount: 0,
            currentQuestionIndex: 0,
            answers: [],
            result: '',
        };

        const result = quizReducer(state, {type: ADD_QUESTIONS_AMOUNT, payload: {questionsAmount: 5}});

        expect(result).toEqual({
            status: QuizStatuses.STARTED,
            questionsAmount: 5,
            currentQuestionIndex: 0,
            answers: [],
            result: '',
        });
    });

    test('returns a right state with type ADD_ANSWER', () => {
        const state = {
            status: QuizStatuses.STARTED,
            questionsAmount: 5,
            currentQuestionIndex: 0,
            answers: [],
            result: '',
        };

        const result = quizReducer(state, {
            type: ADD_ANSWER,
            payload: {
                currentQuestionIndex: 1,
                answer: {
                    id: 0,
                    answer: 'Answer',
                    isCorrect: true,
                },
            }
        });

        expect(result).toEqual({
            status: QuizStatuses.STARTED,
            questionsAmount: 5,
            currentQuestionIndex: 1,
            answers: [
                {
                    id: 0,
                    answer: 'Answer',
                    isCorrect: true,
                },
            ],
            result: '',
        });
    });

    test('changes a status when a question index equal to a maximum questions number', () => {
        const state = {
            status: QuizStatuses.STARTED,
            questionsAmount: 1,
            currentQuestionIndex: 0,
            answers: [],
            result: '',
        };

        const result = quizReducer(state, {
            type: ADD_ANSWER,
            payload: {
                currentQuestionIndex: 1,
                answer: {
                    id: 0,
                    answer: 'Answer',
                    isCorrect: true,
                },
            }
        });

        expect(result).toEqual({
            status: QuizStatuses.FINISHED,
            questionsAmount: 1,
            currentQuestionIndex: 1,
            answers: [
                {
                    id: 0,
                    answer: 'Answer',
                    isCorrect: true,
                },
            ],
            result: '',
        });
    });

    test('returns a right state with type ADD_RESULT', () => {
        const state = {
            status: QuizStatuses.FINISHED,
            questionsAmount: 1,
            currentQuestionIndex: 1,
            answers: [
                {
                    id: 0,
                    answer: 'Answer',
                    isCorrect: false,
                },
            ],
            result: '',
        };

        const result = quizReducer(state, {
            type: ADD_RESULT,
            payload: {
                result: 'Oops! You don\'t know anything about Russian food!',
            }
        });

        expect(result).toEqual({
            status: QuizStatuses.FINISHED,
            questionsAmount: 1,
            currentQuestionIndex: 1,
            answers: [
                {
                    id: 0,
                    answer: 'Answer',
                    isCorrect: false,
                }
            ],
            result: 'Oops! You don\'t know anything about Russian food!',
        });
    });

    test('throws an exception when an unknown action type is used', () => {
        expect(() => {
            quizReducer(initialState, {type: 'NON_EXISTING'})
        }).toThrow(Error);
    });
});
