import React from 'react';
import formatDuration from 'format-duration';
import './Chronometer.scss'

function elapsedTime(e) {
  let elapsed = 0;
  for (let i = 0; i < e.length; i += 2) {
    const start = e[i];
    const stop = e[i + 1] || new Date();
    elapsed += stop - start
  }
  return elapsed
}

export default function ChronometerElapsedTime(props) {
  return (
    <div className="timer">
      {formatDuration(elapsedTime(props.timingEvents))}
    </div>
  )
}