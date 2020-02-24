import React from 'react';
import {useStateValue} from '../states';
import {start} from '../actions/quizActions';

/**
 * Welcome component.
 *
 * @return {*}
 * @constructor
 */
function Welcome() {
    const [, dispatch] = useStateValue();

    /**
     * Handles button click.
     */
    const handleButtonClick = () => {
        dispatch(start());
    };

    return (
        <div className="welcome jumbotron bg-white shadow rounded text-center">
            <h1 className="display-4">What do you know about Russian food?</h1>
            <p className="lead">Test your knowledge of Russian food.</p>
            <button
                className="btn btn-primary btn-lg"
                onClick={handleButtonClick}>
                Here goes!
            </button>
        </div>
    );
}

export default Welcome;
