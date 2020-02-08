/**
 * Quiz data.
 *
 * @type {{questions: [{question: string, options: [string, string, string, string], id: number, correctAnswer: string}, {question: string, options: [string, string, string, string], id: number, correctAnswer: string}, {question: string, options: [string, string, string, string], id: number, correctAnswer: string}]}}
 */
const quizData = {
    questions: [
        {
            id: 1,
            question: 'What do Russian women usually cook on?',
            options: [
                'Russian stove',
                'Women do not cook. Now it is the duty of men',
                'Electric or gas stove',
                'Brazier',
            ],
            correctAnswer: 'Electric or gas stove',
        },
        {
            id: 2,
            question: 'What is the most popular drink in Russia?',
            options: [
                'Vodka',
                'Black tea with sugar',
                'Cranberry juice',
                'Fresh cow\'s milk',
            ],
            correctAnswer: 'Black tea with sugar',
        },
        {
            id: 3,
            question: 'What is the main ingredient in borsch?',
            options: [
                'Onion',
                'Noodles',
                'Beetroot',
                'Tomatoes',
            ],
            correctAnswer: 'Beetroot',
        },
    ],
};

export default quizData;
