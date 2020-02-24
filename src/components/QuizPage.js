import React from 'react';
import {useStateValue} from '../states';
import {QuizStatuses} from '../actions/quizActions';
import Welcome from './Welcome';
import Quiz from './Quiz';
import QuizResult from './QuizResult';

/**
 * Quiz page.
 *
 * @return {*}
 * @constructor
 */
function QuizPage() {
    const [{status}] = useStateValue();

    return (
        <div className="quiz-page container vh-100 pt-5 pb-5">
            {status === QuizStatuses.NOT_STARTED && <Welcome/>}
            {status === QuizStatuses.STARTED && <Quiz/>}
            {status === QuizStatuses.FINISHED && <QuizResult/>}
        </div>
    );
}

export default QuizPage;
