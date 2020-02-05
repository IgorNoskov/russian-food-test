import React, {useEffect} from 'react';
import {useStateValue} from '../states';
import {getResult, getScores} from '../helpers/quiz';

/**
 * Quiz result component.
 *
 * @return {*}
 * @constructor
 */
function QuizResult() {
    const [{quizAnswers, quizResult}, dispatch] = useStateValue();

    useEffect(() => {
        const scores = getScores(quizAnswers);

        dispatch({type: 'ADD_RESULT', payload: {quizResult: getResult(scores)}});
    }, [quizAnswers, dispatch]);

    return (
        <div className="quiz-result card shadow rounded">
            <div className="card-body">
                <h5 className="text-center">{quizResult}</h5>
                <p>Your answers: </p>

                {quizAnswers.map(item => (
                    <div key={item.id} className={'alert alert-' + (item.isCorrect ? 'success' : 'danger')}
                         role="alert">{item.questionAnswer} - {item.isCorrect ? 'Correct' : 'Wrong'}.</div>
                ))}
            </div>
        </div>
    );
}

export default QuizResult;
