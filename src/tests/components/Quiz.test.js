import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {StateProvider} from '../../states';
import quizReducer, {initialState} from '../../reducers/quizReducer';
import Quiz from '../../components/Quiz';

let container;

beforeEach(() => {
    ({container} = render(
        <StateProvider initialState={initialState} reducer={quizReducer}>
            <Quiz/>
        </StateProvider>
    ));
});

describe('renders Quiz component', () => {
    test('renders Quiz component', () => {
        expect(container.querySelector('.quiz')).toBeInTheDocument();
    });

    test('renders the title', () => {
        expect(container.querySelector('h5')).toBeInTheDocument();
    });

    test('renders the button', () => {
        expect(container.querySelector('.btn')).toBeInTheDocument();
    });

    test('if no answer is selected, show an alert box', () => {
        expect(container.querySelector('.alert.alert-danger')).not.toBeInTheDocument();

        fireEvent.click(container.querySelector('.btn'));

        expect(container.querySelector('.alert.alert-danger')).toBeInTheDocument();
    });

    test('hide alert box if an answer is selected', () => {
        expect(container.querySelector('.alert.alert-danger')).not.toBeInTheDocument();

        fireEvent.click(container.querySelector('.btn'));

        expect(container.querySelector('.alert.alert-danger')).toBeInTheDocument();

        fireEvent.click(container.querySelector('input[type="radio"]'));

        expect(container.querySelector('.alert.alert-danger')).not.toBeInTheDocument();
    });
});
