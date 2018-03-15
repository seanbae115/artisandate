import React from 'react';
import "./helper.css";

export function renderInput({ input, type, placeholder, label, id, meta: { touched, error } }) {
    const invalidInput = touched && error;
    return (
        <div className='input-field'>
            <input {...input} className={invalidInput ? "input-validation" : ""} type={ type ? type : 'text' } placeholder={ label }/>
            {touched ? <span className="error-msg">{error}</span> : id === 'password' && error ? <span>Minimum length of 8 characters</span> : <span/>}
        </div>
    )
}
