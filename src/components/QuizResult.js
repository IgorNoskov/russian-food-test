import React, {useEffect} from 'react';
import {useStateValue} from '../states';
import {addResult} from '../actions/quizActions';
import {getResult, getScores} from '../helpers/quiz';

/**
 * Quiz result component.
 *
 * @return {*}
 * @constructor
 */
function QuizResult() {
    const [{answers, result}, dispatch] = useStateValue();

    useEffect(() => {
        const scores = getScores(answers);
        const result = getResult(scores);

        dispatch(addResult(result));
    }, [answers, dispatch]);

    return (
        <div className="quiz-result card shadow rounded">
            <div className="card-body">
                <h5 className="text-center">{result}</h5>
                <p>Your answers: </p>

                {answers.map(item => (
                    <div key={item.id} className={'alert alert-' + (item.isCorrect ? 'success' : 'danger')}
                         role="alert">{item.answer} - {item.isCorrect ? 'Correct' : 'Wrong'}.</div>
                ))}
            </div>
        </div>
    );
}

export default QuizResult;
