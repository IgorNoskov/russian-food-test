import React from 'react';
import {render} from '@testing-library/react';
import App from '../App';

test('renders QuizPage component', () => {
    const {container} = render(<App/>);
    const page = container.querySelector('.quiz-page');

    expect(page).toBeInTheDocument();
});
