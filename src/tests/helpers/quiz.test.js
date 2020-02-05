import {getResult, getScores} from '../../helpers/quiz';

describe('getScores method returns right value', () => {
    test('returns 1 score', () => {
        const answers = [
            {
                id: 1,
                questionAnswer: 'Answer 1',
                isCorrect: true,
            },
            {
                id: 2,
                questionAnswer: 'Answer 2',
                isCorrect: false,
            }
        ];

        const scores = getScores(answers);

        expect(scores).toEqual(1);
    });
});

describe('getResult method returns right value', () => {
    test('returns the perfect result with 3 scores', () => {
        const result = getResult(3);

        expect(result).toEqual('Perfect! You are good at Russian food!');
    });

    test('returns the not bad result with 2 scores', () => {
        const result = getResult(2);

        expect(result).toEqual('Not bad, you know something about Russian food.');
    });

    test('returns the bad result with 1 score', () => {
        const result = getResult(1);

        expect(result).toEqual('Oops! You don\'t know anything about Russian food!');
    });

    test('returns the bad result with 0 score', () => {
        const result = getResult(0);

        expect(result).toEqual('Oops! You don\'t know anything about Russian food!');
    });
});
