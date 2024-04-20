import React, { useState } from 'react'
import Question from './Question'
import Data from "./questions.json"
import "./quiz.css"
import Result from './Result'

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answer, setAnswer] = useState(0)

  const nextQuestion = (ans)=>{
    if(Data.length-1>currentQuestion)
    setCurrentQuestion(currentQuestion+1)
    if(Data.length>currentQuestion){
      if(ans){
        setAnswer(answer+1)
      }
    }
    
  }

  return (
    <div className='quiz'>
      <h2>Quiz Question</h2>
      <Question question={Data[currentQuestion]} nextQuestion={nextQuestion} />
      <Result answer={answer} data={Data}/>
    </div>
  )
}

export default Quiz