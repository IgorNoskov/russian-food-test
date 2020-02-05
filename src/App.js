import React from 'react';
import {StateProvider} from './states';
import quizReducer, {initialState} from './reducers/quizReducer';
import QuizPage from './components/QuizPage';

/**
 * App.
 *
 * @return {*}
 * @constructor
 */
function App() {
    return (
        <StateProvider initialState={initialState} reducer={quizReducer}>
            <QuizPage/>
        </StateProvider>
    );
}

export default App;
