import React, { useContext, useEffect } from 'react';
import DataContext from '../context/dataContext';

const Result = () => {
    const { showResult, quizs, marks, startOver, fullName } = useContext(DataContext);

    const postResultsToAPI = () => {
        const apiUrl = 'https://65393a6ee3b530c8d9e823f5.mockapi.io/Result';

        const data = {
            fullName,
            marks,
        };

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (response.ok) {
                console.log('Results posted successfully.');
            } else {
                console.error('Failed to post results.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    // Use useEffect to automatically submit the result when showResult is true
    useEffect(() => {
        if (showResult) {
            postResultsToAPI();
        }
    }, [showResult]);

    return (
        <section className="bg-dark text-white" style={{ display: `${showResult ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className={`text-light text-center p-5 rounded ${marks > (quizs.length) ? 'bg-success' : 'bg-danger'}`}>
                            <h1 className='mb-2 fw-bold'>{marks > (quizs.length) ? 'Awesome!' : 'Oops!'}</h1>
                            <h3 className='mb-3 fw-bold'>Your score is {marks} out of {quizs.length}</h3>
                            <h3 className='mb-3 fw-bold'>Your score is {((marks / quizs.length) * 100).toFixed(2)}%</h3>

                            

                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Result;
