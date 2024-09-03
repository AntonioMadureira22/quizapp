import React from "react";

const Score =({score, totalQuestions}) => {
    return (
        <div className='score-container text-center'>
            <h1 className='text-3xl font-bold mb-4'></h1>
            <p className='text-xl'>
                {score} out of {totalQuestions};
            </p>

        </div>
    );
};

export default Score;