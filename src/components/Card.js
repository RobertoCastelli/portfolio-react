import React from 'react'

import nightrun from '../img/bgnight.jpg'
import todolist from '../img/bgtodo.jpg'
import pokedex from '../img/bgpoke.jpg'
import advice from '../img/bgadvice.jpg'
import weather from '../img/bgweather2.jpg'
import weather_react from '../img/bgweather.jpg'
import meme from '../img/bgmeme.jpg'
import books from '../img/bgbooks.png'
import postit from '../img/bgpostit.jpg'
import budget from '../img/bgbudget.jpg'
import rock from '../img/bgrock.jpg'
import pomodoro from '../img/bgpomodoro.png'
import fixit from '../img/bgsplit.jpg'
import quiz from '../img/bgquiz.jpg'
import drum from '../img/bgdrum.jpg'
import countdown from '../img/bgcountdown.jpg'
import gol from '../img/bggame.png'
import paint from '../img/bgpaintalt.jpg'

function Card() {

    let projectList =
        [{
            title: 'NIGHT RUN',
            tech: 'vanilla JS',
            image: nightrun,
            link: 'https://to-night-run.netlify.com/'
        }, {
            title: 'TO DO LIST',
            tech: 'vue',
            image: todolist,
            link: 'https://to-vue-list.netlify.com/'
        }, {
            title: 'POKEDEX JS',
            tech: 'API',
            image: pokedex,
            link: 'https://to-pokedex.netlify.com/'
        }, {
            title: 'ADVICE SLIP',
            tech: 'API',
            image: advice,
            link: 'https://to-advice.netlify.com/'
        }, {
            title: 'WEATHER APP',
            tech: 'API',
            image: weather,
            link: 'https://to-weather.netlify.com/'
        }, {
            title: 'CREATE MEME',
            tech: 'react, API',
            image: meme,
            link: 'https://to-meme.netlify.com/'
        }, {
            title: 'WEATHER APP',
            tech: 'react, API',
            image: weather_react,
            link: 'https://to-weather-react.netlify.com/'
        }, {
            title: 'READING LIST',
            tech: 'react',
            image: books,
            link: 'https://to-books.netlify.com/'
        }, {
            title: 'POST-IT JS',
            tech: 'vue, database',
            image: postit,
            link: 'https://vue-it-fire.web.app/#/'
        }, {
            title: 'BUDGET BUDDY',
            tech: 'local storage',
            image: budget,
            link: 'https://to-budget.netlify.com/'
        }, {
            title: 'ROCK PAPER',
            tech: 'css animation',
            image: rock,
            link: 'https://to-rock.netlify.com/'
        }, {
            title: 'POMO CLOCK',
            tech: 'setInterval',
            image: pomodoro,
            link: 'https://to-pomodoro.netlify.com/'
        }, {
            title: 'COUNT DOWN',
            tech: 'setInterval',
            image: countdown,
            link: 'https://to-countdown.netlify.com/'
        }, {
            title: 'GO FIX IT APP',
            tech: 'audio',
            image: fixit,
            link: 'https://to-naajeni.netlify.com/'
        }, {
            title: 'DRUM MACHINE',
            tech: 'audio',
            image: drum,
            link: 'https://to-drum-machine.netlify.com/'
        }, {
            title: 'QUIZ GAME',
            tech: 'vanilla JS',
            image: quiz,
            link: 'https://to-quiz.netlify.com/'
        }, {
            title: 'GAME OF LIFE',
            tech: 'canvas',
            image: gol,
            link: 'https://to-game-of-life.netlify.com/'
        }, {
            title: 'SIMPLE PAINT',
            tech: 'canvas',
            image: paint,
            link: 'https://to-paint.netlify.com/'
        }]

    let projectCard = projectList.map(card => {
        return (
            <div className="card-description">
                <a href={card.link} target="_blank" rel="noopener noreferrer" >
                    <img className="card-image" src={card.image} alt="card" />
                    <h4>{card.title}</h4>
                    <p>{card.tech}</p>
                </a>
            </div>
        )
    });

    return (
        <div className="card">{projectCard}</div>
    )
}

export default Card

