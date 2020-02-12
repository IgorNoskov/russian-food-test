import React from 'react';

/**
 * Question component.
 *
 * @param question
 * @param onInputChange
 * @return {*}
 * @constructor
 */
function Question({question, onInputChange}) {
    const inputIdPrefix = `question-${question.id}-`;

    /**
     * Handles input change.
     *
     * @param event
     */
    const handleInputChange = (event) => {
        onInputChange(event.target.value);
    };

    return (
        <>
            {question.options.map((option, index) => (
                <div key={option} className="question form-group">
                    <div className="custom-control custom-radio">
                        <input type="radio"
                               id={`${inputIdPrefix}-${index}`}
                               name={question.id}
                               value={option}
                               className="custom-control-input"
                               onChange={handleInputChange}/>
                        <label className="custom-control-label"
                               htmlFor={`${inputIdPrefix}-${index}`}>{option}</label>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Question;
