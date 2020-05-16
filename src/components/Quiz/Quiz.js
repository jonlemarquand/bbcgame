import React from 'react';

import QuizAnswers from './QuizAnswers';

import './Quiz.scss'

const Quiz = () => {
    return (
        <div className="quiz-area">
            <h2>Can you name these FA Cup Winners?</h2>
            <div className="how-to">How to Play</div>
            <div className="how-to-box">
                <p>To get under way, click 'Start'.</p>
                <p>Once you have started the quiz, type an answer into the box and either hit enter or click the submit button. If you are right, it will fill in the correct slot in the table.</p>
                <p>Keep entering more answers until you've successfully completed the quiz - or the timer runs out.</p>
                <p>If you do not want to play any more, just hit the 'Give up!' button. You can then reveal the answers you missed - or have another go.</p>
            </div>
            <div className="score-time">
                <div className="score">Score: 0/129</div>
                <div className="time">30:00</div>
            </div>
            <form className="quiz-form">
                <input className="input-text" type="text" />
                <input className="submit-button" type="submit" />
            </form>
            <QuizAnswers />
        </div>
    )
}

export default Quiz;