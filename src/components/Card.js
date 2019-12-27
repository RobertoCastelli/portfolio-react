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
            tech: 'js, setTimeout',
            image: nightrun
        }, {
            title: 'TO DO LIST',
            tech: 'vue',
            image: todolist
        }, {
            title: 'POKEDEX',
            tech: 'API',
            image: pokedex
        }, {
            title: 'ADVICE SLIP',
            tech: 'API',
            image: advice
        }, {
            title: 'WEATHER APP',
            tech: 'API',
            image: weather
        }, {
            title: 'MEME',
            tech: 'react hooks, API',
            image: meme
        }, {
            title: 'WEATHER APP',
            tech: 'react hooks, API',
            image: weather_react
        }, {
            title: 'READING LIST',
            tech: 'react, useContext',
            image: books
        }, {
            title: 'POST-IT',
            tech: 'vue, database',
            image: postit
        }, {
            title: 'BUDGET BUDDY',
            tech: 'localStorage',
            image: budget
        }, {
            title: 'ROCK PAPER',
            tech: 'js, css animation',
            image: rock
        }, {
            title: 'POMODORO',
            tech: 'js, setInterval',
            image: pomodoro
        }, {
            title: 'FIX-IT',
            tech: 'js, audio',
            image: fixit,
        }, {
            title: 'QUIZ GAME',
            tech: 'vanilla js',
            image: quiz,
        }, {
            title: 'DRUM MACHINE',
            tech: 'audio, binding',
            image: drum
        }, {
            title: 'COUNTDOWN',
            tech: 'js, setInterval',
            image: countdown
        }, {
            title: 'GAME OF LIFE',
            tech: 'js, canvas',
            image: gol
        }, {
            title: 'SIMPLE PAINT',
            tech: 'js, canvas',
            image: paint
        }]

    let projectCard = projectList.map(card => {
        return (
            <div className="card-description">
                <img className="card-image" src={card.image} alt="card" />
                <h4>{card.title}</h4>
                <p>{card.tech}</p>
            </div>
        )
    });

    return (
        <div className="card">{projectCard}</div>
    )
}

export default Card

