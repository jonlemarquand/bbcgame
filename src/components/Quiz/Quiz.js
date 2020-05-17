import React, { useState } from 'react';

import devData from '../../devdata';
import QuizAnswers from './QuizAnswers';

import './Quiz.scss'

const Quiz = () => {

    const fullTeams = devData.map(item => item.team);

    const [searchfield, setSearchfield] = useState("");
    const [answers, setAnswers] = useState([]);

    const search = (event) => {
        setSearchfield(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (fullTeams.indexOf(searchfield) !== -1 && answers.indexOf(searchfield) === -1) {
            setAnswers(answers.concat([searchfield]));
            document.querySelector(`[data-team="${searchfield}"]`).classList.toggle("hidden");
        }
        setSearchfield("");
    }

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
                <div className="score">Score: {answers.length}/{devData.length}</div>
                <div className="time">30:00</div>
            </div>
            <form className="quiz-form" onSubmit={handleSubmit}>
                <input className="input-text" type="text" value={searchfield} onChange={search} />
                <input className="submit-button" type="submit" />
            </form>
            <QuizAnswers />
        </div>
    )
}

export default Quiz;