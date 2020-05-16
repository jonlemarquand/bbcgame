import React from 'react';

import facup from '../assets/facup.jpg';
import './Intro.scss';

const Intro = () => {
    return (
        <div className="intro-area">
            <h1>Big quiz: Can you name FA Cup Winners?</h1>
            <div className="info-text">
                <div className="date tag">15 May 2020 | Premier League</div>
                <div className="shareButton">Share</div>
            </div>
            <img className="main-image" src={facup} alt="fa cup" />
            <div className="intro-text">
                <p><strong>Who knows when - indeed if - the 2019-20 Premier League season will be concluded.</strong></p>
                <p>It's all up in the air. So while we wait to add some names to the list of Premier League-winning players, let's test your knowledge of those who have lifted the trophy before.</p>
                <p>Since 1992-93 129 players have won the Premier League more than once.</p>
                <p>We've given you their nationality, the team(s) they were successful with and an added clue as well.</p>
                <p>You have 30 minutes - go!</p>
            </div>
        </div>
    )
}

export default Intro;