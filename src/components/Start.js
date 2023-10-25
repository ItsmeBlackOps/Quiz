import React, { useContext, useState } from 'react';
import DataContext from '../context/dataContext';

const Start = () => {
    const { startQuiz, showStart } = useContext(DataContext);
    const [fullName, setFullName] = useState(''); // State to store full name

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };

    const handleStartQuiz = () => {
        if (fullName.trim() === '') {
            // Ensure a name is provided before starting the quiz
            alert('Please enter your full name before starting the quiz.');
        } else {
            // Proceed with starting the quiz and storing the name in 'data'
            const data = {
                fullName: fullName,
            };
            startQuiz(data);
        }
    };

    return (
        <section className='text-white text-center bg-dark' style={{ display: `${showStart ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <h1 className='fw-bold mb-4'>Basic React JS Quiz</h1>
                        <div className="mb-3">
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={fullName}
                                onChange={handleFullNameChange}
                            />
                        </div>
                        <button onClick={handleStartQuiz} className="btn px-4 py-2 bg-light text-dark fw-bold">Start Quiz</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Start;
