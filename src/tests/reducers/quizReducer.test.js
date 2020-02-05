import quizReducer, {initialState, QUIZ_STATUSES} from '../../reducers/quizReducer';

describe('quiz statuses have right values', () => {
    test('NOT_STARTED status has right right value', () => {
        expect(QUIZ_STATUSES.NOT_STARTED).toEqual('NOT_STARTED');
    });

    test('STARTED status has right right value', () => {
        expect(QUIZ_STATUSES.STARTED).toEqual('STARTED');
    });

    test('FINISHED status has right right value', () => {
        expect(QUIZ_STATUSES.FINISHED).toEqual('FINISHED');
    });
});

test('initial state has right values', () => {
    expect(initialState).toEqual({
        quizStatus: QUIZ_STATUSES.NOT_STARTED,
        quizQuestionsAmount: 0,
        quizQuestionIndex: 0,
        quizAnswers: [],
        quizResult: '',
    });
});

describe('quiz reducer returns right states', () => {
    test('returns a right state with type START', () => {
        const result = quizReducer(initialState, {type: 'START'});

        expect(result).toEqual({
            quizStatus: QUIZ_STATUSES.STARTED,
            quizQuestionsAmount: 0,
            quizQuestionIndex: 0,
            quizAnswers: [],
            quizResult: '',
        });
    });

    test('returns a right state with type ADD_QUESTIONS_AMOUNT', () => {
        const state = {
            quizStatus: QUIZ_STATUSES.STARTED,
            quizQuestionsAmount: 0,
            quizQuestionIndex: 0,
            quizAnswers: [],
            quizResult: '',
        };

        const result = quizReducer(state, {type: 'ADD_QUESTIONS_AMOUNT', payload: {quizQuestionsAmount: 5}});

        expect(result).toEqual({
            quizStatus: QUIZ_STATUSES.STARTED,
            quizQuestionsAmount: 5,
            quizQuestionIndex: 0,
            quizAnswers: [],
            quizResult: '',
        });
    });

    test('returns a right state with type ADD_ANSWER', () => {
        const state = {
            quizStatus: QUIZ_STATUSES.STARTED,
            quizQuestionsAmount: 5,
            quizQuestionIndex: 0,
            quizAnswers: [],
            quizResult: '',
        };

        const result = quizReducer(state, {
            type: 'ADD_ANSWER',
            payload: {
                questionAnswer: {
                    id: 0,
                    questionAnswer: 'Answer',
                    isCorrect: true,
                },
            }
        });

        expect(result).toEqual({
            quizStatus: QUIZ_STATUSES.STARTED,
            quizQuestionsAmount: 5,
            quizQuestionIndex: 1,
            quizAnswers: [
                {
                    id: 0,
                    questionAnswer: 'Answer',
                    isCorrect: true,
                },
            ],
            quizResult: '',
        });
    });

    test('changes a status when a question index equal to a maximum questions number', () => {
        const state = {
            quizStatus: QUIZ_STATUSES.STARTED,
            quizQuestionsAmount: 1,
            quizQuestionIndex: 0,
            quizAnswers: [],
            quizResult: '',
        };

        const result = quizReducer(state, {
            type: 'ADD_ANSWER',
            payload: {
                questionAnswer: {
                    id: 0,
                    questionAnswer: 'Answer',
                    isCorrect: true,
                },
            }
        });

        expect(result).toEqual({
            quizStatus: QUIZ_STATUSES.FINISHED,
            quizQuestionsAmount: 1,
            quizQuestionIndex: 1,
            quizAnswers: [
                {
                    id: 0,
                    questionAnswer: 'Answer',
                    isCorrect: true,
                },
            ],
            quizResult: '',
        });
    });

    test('returns a right state with type ADD_RESULT', () => {
        const state = {
            quizStatus: QUIZ_STATUSES.FINISHED,
            quizQuestionsAmount: 1,
            quizQuestionIndex: 1,
            quizAnswers: [
                {
                    id: 0,
                    questionAnswer: 'Answer',
                    isCorrect: false,
                },
            ],
            quizResult: '',
        };

        const result = quizReducer(state, {
            type: 'ADD_RESULT',
            payload: {
                quizResult: 'Oops! You don\'t know anything about Russian food!',
            }
        });

        expect(result).toEqual({
            quizStatus: QUIZ_STATUSES.FINISHED,
            quizQuestionsAmount: 1,
            quizQuestionIndex: 1,
            quizAnswers: [
                {
                    id: 0,
                    questionAnswer: 'Answer',
                    isCorrect: false,
                }
            ],
            quizResult: 'Oops! You don\'t know anything about Russian food!',
        });
    });

    test('throws an exception when an unknown action type is used', () => {
        expect(quizReducer).toThrow(Error);
    });
});
