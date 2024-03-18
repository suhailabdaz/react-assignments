import React, { useState, useRef } from 'react';

const Form = () => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) {
            setError('Please enter a value');
            return;
        }
        console.log('Submitted value:', inputValue);
        setInputValue('');
        setError('');
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleButtonClick = () => {
        if (!inputRef.current.value.trim()) {
            setError('Please enter a value');
            return;
        }
        console.log('Button clicked. Input value:', inputRef.current.value);
        inputRef.current.value = '';
        setError('');
    };

    return (
        <div>
            <h2>Controlled Component:</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Enter a value"
                />
                <button type="submit">Submit</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <h2>Uncontrolled Component:</h2>
            <form>
                <input type="text" ref={inputRef} placeholder="Enter a value" />
                <button type="button" onClick={handleButtonClick}>Submit</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Form;
