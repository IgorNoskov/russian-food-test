/**
 * Starts action type.
 *
 * @type {string}
 */
export const START = 'START';

/**
 * Adds a questions amount action type.
 *
 * @type {string}
 */
export const ADD_QUESTIONS_AMOUNT = 'ADD_QUESTIONS_AMOUNT';

/**
 * Adds an answer action type.
 *
 * @type {string}
 */
export const ADD_ANSWER = 'ADD_ANSWER';

/**
 * Adds a result action type.
 *
 * @type {string}
 */
export const ADD_RESULT = 'ADD_RESULT';

/**
 * Quiz statuses.
 *
 * @type {{NOT_STARTED: string, STARTED: string, FINISHED: string}}
 */
export const QuizStatuses = {
    NOT_STARTED: 'NOT_STARTED',
    STARTED: 'STARTED',
    FINISHED: 'FINISHED',
};

/**
 * Starts a quiz.
 *
 * @returns {{type: string}}
 */
export function start() {
    return {
        type: START,
        payload: {
            status: QuizStatuses.STARTED,
        },
    };
}

/**
 * Adds a questions amount.
 *
 * @param amount
 * @returns {{payload: {quizQuestionsAmount: *}, type: string}}
 */
export function addQuestionsAmount(amount) {
    return {
        type: ADD_QUESTIONS_AMOUNT,
        payload: {
            questionsAmount: amount,
        },
    };
}

/**
 * Adds an answer.
 *
 * @param currentQuestionIndex
 * @param answer
 * @param isCorrect
 * @returns {{payload: {currentQuestionIndex: *, answer: {answer: *, id: *, isCorrect: *}}, type: string}}
 */
export function addAnswer(currentQuestionIndex, answer, isCorrect) {
    return {
        type: ADD_ANSWER,
        payload: {
            currentQuestionIndex: currentQuestionIndex + 1,
            answer: {
                id: currentQuestionIndex,
                answer,
                isCorrect,
            },
        },
    };
}

/**
 * Adds a result.
 *
 * @param result
 * @returns {{payload: {quizResult: *}, type: string}}
 */
export function addResult(result) {
    return {
        type: ADD_RESULT,
        payload: {
            result: result,
        },
    };
}
