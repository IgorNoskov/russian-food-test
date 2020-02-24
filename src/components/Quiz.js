import React, {useEffect, useState} from 'react';
import quizData from '../data/quizData';
import {useStateValue} from '../states';
import {addQuestionsAmount, addAnswer} from '../actions/quizActions';
import Question from './Question';
import {checkAnswer} from '../helpers/quiz';

/**
 * Quiz component.
 *
 * @return {*}
 * @constructor
 */
function Quiz() {
    const [{currentQuestionIndex}, dispatch] = useStateValue();
    const [answer, setAnswer] = useState('');
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        dispatch(addQuestionsAmount(quizData.questions.length));
    }, [dispatch]);

    const currentQuestion = quizData.questions[currentQuestionIndex];

    /**
     * Handles input change.
     *
     * @param {string} answer
     */
    const handleInputChange = (answer) => {
        setShowError(false);
        setAnswer(answer);
    };

    /**
     * Handles button click.
     */
    const handleButtonClick = () => {
        if (answer === '') {
            setShowError(true);

            return;
        }

        const isAnswerCorrect = checkAnswer(quizData, currentQuestionIndex, answer);

        dispatch(addAnswer(currentQuestionIndex, answer, isAnswerCorrect));

        setAnswer('');
    };

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
                    onClick={handleButtonClick}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Quiz;
