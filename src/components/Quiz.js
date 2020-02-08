import React, {useEffect, useState} from 'react';
import quizData from '../data/quizData';
import {useStateValue} from '../states';
import Question from './Question';

/**
 * Quiz component.
 *
 * @return {*}
 * @constructor
 */
function Quiz() {
    const [{quizQuestionIndex}, dispatch] = useStateValue();
    const [questionAnswer, setQuestionAnswer] = useState('');
    const [showError, setShowError] = useState(false);

    const currentQuestion = quizData.questions[quizQuestionIndex];

    useEffect(() => {
        dispatch({type: 'ADD_QUESTIONS_AMOUNT', payload: {quizQuestionsAmount: quizData.questions.length}});
    }, [dispatch]);

    /**
     * Handles input change.
     *
     * @param {string} answer
     */
    function handleInputChange(answer) {
        if (showError === true) {
            setShowError(false);
        }

        setQuestionAnswer(answer);
    }

    /**
     * Handle button click.
     */
    function handleButtonClick() {
        if (questionAnswer === '') {
            setShowError(true);

            return;
        }

        dispatch({
            type: 'ADD_ANSWER',
            payload: {
                questionAnswer: {
                    id: quizQuestionIndex,
                    questionAnswer,
                    isCorrect: questionAnswer === quizData.questions[quizQuestionIndex].correctAnswer,
                },
            },
        });

        setQuestionAnswer('');
    }

    return (
        <div className="quiz card shadow rounded">
            <h5 className="card-header">{currentQuestion.question}</h5>
            <div className="card-body">
                <Question question={currentQuestion} onInputChange={handleInputChange}/>

                {showError && <div className="alert alert-danger" role="alert">
                    Don't give up choose an answer!
                </div>}

                <button
                    className="btn btn-primary"
                    onClick={() => handleButtonClick()}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Quiz;
