import React from 'react';
import "./helper.css";

export function renderInput({ input, type, placeholder, meta: { touched, error } }) {
    const invalidInput = touched && error;
    return (
        <div className='input-field'>
            <input {...input} className={touched ? "input-validation" : ""} type={ type ? type : 'text' } placeholder={ touched ? invalidInput : input.name }/>
        </div>
    )
}
