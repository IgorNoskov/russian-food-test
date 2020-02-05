/**
 * Quiz statuses.
 *
 * @type {{NOT_STARTED: string, STARTED: string, FINISHED: string}}
 */
export const QUIZ_STATUSES = {
    NOT_STARTED: 'NOT_STARTED',
    STARTED: 'STARTED',
    FINISHED: 'FINISHED',
};

/**
 * Initial state.
 *
 * @type {{quizQuestionsAmount: number, quizQuestionIndex: number, quizAnswers: [], quizResult: string, quizStatus: string}}
 */
export const initialState = {
    quizStatus: QUIZ_STATUSES.NOT_STARTED,
    quizQuestionsAmount: 0,
    quizQuestionIndex: 0,
    quizAnswers: [],
    quizResult: '',
};

/**
 * Quiz reducer.
 *
 * @param state
 * @param action
 * @return {{data: *}}
 */
const quizReducer = (state, action) => {
    switch (action.type) {
        case 'START':
            return {
                ...state,
                quizStatus: QUIZ_STATUSES.STARTED,
            };
        case 'ADD_QUESTIONS_AMOUNT':
            return {
                ...state,
                quizQuestionsAmount: action.payload.quizQuestionsAmount,
            };
        case 'ADD_ANSWER':
            const nextQuestionIndex = state.quizQuestionIndex + 1;

            return {
                ...state,
                quizStatus: state.quizQuestionsAmount === nextQuestionIndex ? QUIZ_STATUSES.FINISHED : state.quizStatus,
                quizQuestionIndex: nextQuestionIndex,
                quizAnswers: [...state.quizAnswers, action.payload.questionAnswer],
            };
        case 'ADD_RESULT':
            return {
                ...state,
                quizResult: action.payload.quizResult,
            };
        default:
            throw new Error();
    }
};

export default quizReducer;
