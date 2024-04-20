import React from 'react'

const Question = ({ question, nextQuestion }) => {
    return (
        <div className='question'>
            <h3>{question.question}</h3>
            <div className='next'>
            {
                question.answer?.map((v, idx) => {
                    return (
                        
                            <button className='next-btn' onClick={()=>nextQuestion(v.isCorrect)}>
                                <p>{v.text}</p>
                            </button>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Question