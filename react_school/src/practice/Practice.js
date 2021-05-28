import React from 'react';
import Joke from './Joke.js';
import jokesData from "./jokesData"

function Practice() {

  const jokeComponent = jokesData.map((joke) => <Joke key = {joke.id} question = {joke.question} punchLine = {joke.punchLine}/>);

  return (
    <div className="Practice">
        {jokeComponent};
    </div>
  );
}

export default Practice;
