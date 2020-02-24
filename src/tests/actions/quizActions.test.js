import {
    start,
    addQuestionsAmount,
    addAnswer,
    addResult,
    START,
    ADD_QUESTIONS_AMOUNT,
    ADD_ANSWER,
    ADD_RESULT, QuizStatuses,
} from '../../actions/quizActions';

test('start method returns the right state', () => {
    const state = start();

    expect(state).toEqual({
        type: START,
        payload: {
            status: QuizStatuses.STARTED,
        },
    });
});

test('addQuestionsAmount method returns the right state', () => {
    const state = addQuestionsAmount(10);

    expect(state).toEqual({
        type: ADD_QUESTIONS_AMOUNT,
        payload: {
            questionsAmount: 10,
        },
    });
});

test('addAnswer method returns the right state', () => {
    const state = addAnswer(1, 'some text', true);

    expect(state).toEqual({
        type: ADD_ANSWER,
        payload: {
            currentQuestionIndex: 2,
            answer: {
                id: 1,
                answer: 'some text',
                isCorrect: true,
            },
        },
    });
});

test('addResult method returns the right state', () => {
    const state = addResult('some text');

    expect(state).toEqual({
        type: ADD_RESULT,
        payload: {
            result: 'some text',
        },
    });
});
