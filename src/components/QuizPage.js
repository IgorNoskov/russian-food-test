import React from 'react';
import {useStateValue} from '../states';
import {QUIZ_STATUSES} from '../reducers/quizReducer';
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
    const [{quizStatus}] = useStateValue();

    return (
        <div className="quiz-page container vh-100 pt-5 pb-5">
            {quizStatus === QUIZ_STATUSES.NOT_STARTED && <Welcome/>}
            {quizStatus === QUIZ_STATUSES.STARTED && <Quiz/>}
            {quizStatus === QUIZ_STATUSES.FINISHED && <QuizResult/>}
        </div>
    );
}

export default QuizPage;
