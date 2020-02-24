import {QuizStatuses, START, ADD_QUESTIONS_AMOUNT, ADD_ANSWER, ADD_RESULT} from '../actions/quizActions';

/**
 * Initial state.
 *
 * @type {{result: string, currentQuestionIndex: number, answers: [], questionsAmount: number, status: string}}
 */
export const initialState = {
    status: QuizStatuses.NOT_STARTED,
    questionsAmount: 0,
    currentQuestionIndex: 0,
    answers: [],
    result: '',
};

/**
 * Quiz reducer.
 *
 * @param state
 * @param type
 * @param payload
 * @returns {{result: *}|{status: (*|string)}|{questionsAmount: number}|{currentQuestionIndex: number, answers: *[], status: (string)}}
 */
const quizReducer = (state, {type, payload}) => {
    switch (type) {
        case START:
            return {
                ...state,
                status: payload.status,
            };
        case ADD_QUESTIONS_AMOUNT:
            return {
                ...state,
                questionsAmount: payload.questionsAmount,
            };
        case ADD_ANSWER:
            return {
                ...state,
                status: state.questionsAmount === payload.currentQuestionIndex ? QuizStatuses.FINISHED : state.status,
                currentQuestionIndex: payload.currentQuestionIndex,
                answers: [...state.answers, payload.answer],
            };
        case ADD_RESULT:
            return {
                ...state,
                result: payload.result,
            };
        default:
            throw new Error();
    }
};

export default quizReducer;
