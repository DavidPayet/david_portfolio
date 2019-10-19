import React from 'react';

export default function ChronometerButton(props) {
  const label = props.timingEvents.length % 2 === 0
    ? <span>&#9658;</span>
    : <span>&#10074;&#10074;</span>;
  return (
    <div>
      <button onClick={props.handleClick}>
        {label}
      </button>
    </div>
  )
}