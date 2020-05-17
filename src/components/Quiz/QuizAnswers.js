import React from 'react';

import devData from '../../devdata';

import './QuizAnswers.scss';

const QuizAnswers = () => {

    const data = devData;
    return (
        <div className="quiz-answers-area">
            <div className="table-header">
                <div className="column-1"><strong>Clue</strong></div>
                <div className="column-2"><strong>Team</strong></div>
            </div>
            {data.map((d) => {
                return (
                    <div className="answer-line">
                        <div className="column-1">
                            <div className="mini-column">{d.wins} Wins. </div>
                            <div>Last Won: {d.last} </div>
                        </div>
                        <div className="column-2 hidden" data-team={d.team}>{d.team}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default QuizAnswers;