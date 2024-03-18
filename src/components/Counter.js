import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${counter + 1}`);
                setUserData(response.data);
            } catch (error) {
                setError(error.message);
            }

            setLoading(false);
        };

        fetchUserData();
    }, [counter]);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
    };

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button type="button" onClick={increment}>+</button>
            <button type="button" onClick={decrement}>-</button>

            <h2>User Information:</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {userData && (
                <div>
                    <p>Name: {userData.name}</p>
                    <p>Username: {userData.username}</p>
                    <p>Email: {userData.email}</p>
                    <p>Phone: {userData.phone}</p>
                    <p>Website: {userData.website}</p>
                </div>
            )}
        </div>
    );
};

export default Counter;
