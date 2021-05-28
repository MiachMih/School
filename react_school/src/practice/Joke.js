import React from 'react';

function Joke(props) {


  return(
    <div className="Joke">
      <p>Question: {props.question}</p>
      <p>Answer: {props.punchLine}</p>
      <hr/>
    </div>
  );
}

export default Joke;
