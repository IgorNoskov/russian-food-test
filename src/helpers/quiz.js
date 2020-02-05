/**
 * Gets quiz scores.
 *
 * @param answers
 * @return {*}
 */
export function getScores(answers) {
    return answers.reduce((accumulator, currentValue) => {
        return currentValue.isCorrect ? accumulator + 1 : accumulator;
    }, 0);
}

/**
 * Gets the result of a quiz.
 *
 * @param scores
 * @return {string}
 */
export function getResult(scores) {
    switch (scores) {
        case 3:
            return 'Perfect! You are good at Russian food!';
        case 2:
            return 'Not bad, you know something about Russian food.';
        default:
            return 'Oops! You don\'t know anything about Russian food!';
    }
}
