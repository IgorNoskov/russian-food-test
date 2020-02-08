import quizData from '../../data/quizData';

describe('quizData has right structure', () => {
    test('quizData has question array', () => {
        expect(Array.isArray(quizData.questions)).toBe(true);
    });

    test('questions has id and id is a number', () => {
        quizData.questions.forEach((question) => {
            expect(question.hasOwnProperty('id')).toBe(true);
            expect(typeof question.id === 'number').toBe(true);
        });
    });

    test('questions has question and question is a string', () => {
        quizData.questions.forEach((question) => {
            expect(question.hasOwnProperty('question')).toBe(true);
            expect(typeof question.question === 'string').toBe(true);
        });
    });

    test('questions has options and options are arrays', () => {
        quizData.questions.forEach((question) => {
            expect(question.hasOwnProperty('options')).toBe(true);
            expect(Array.isArray(question.options)).toBe(true);
        });
    });

    test('questions has correctAnswer and correctAnswer is a string', () => {
        quizData.questions.forEach((question) => {
            expect(question.hasOwnProperty('correctAnswer')).toBe(true);
            expect(typeof question.question === 'string').toBe(true);
        });
    });
});
