import React from 'react';
import {render} from '@testing-library/react';
import {StateProvider} from '../../states';
import quizReducer, {initialState} from '../../reducers/quizReducer';
import Welcome from '../../components/Welcome';

let container;

beforeEach(() => {
    ({container} = render(
        <StateProvider initialState={initialState} reducer={quizReducer}>
            <Welcome/>
        </StateProvider>
    ));
});

describe('renders Welcome component', () => {
    test('renders Welcome component', () => {
        expect(container.querySelector('.welcome')).toBeInTheDocument();
    });

    test('renders the title', () => {
        expect(container.querySelector('h1')).toBeInTheDocument();
    });

    test('renders the lead text', () => {
        expect(container.querySelector('p.lead')).toBeInTheDocument();
    });

    test('renders the button', () => {
        expect(container.querySelector('.btn')).toBeInTheDocument();
    });
});
