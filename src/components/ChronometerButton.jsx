import React from 'react';
import Button from '@material-ui/core/Button';
import { FaPlay, FaPause } from 'react-icons/fa';


export default function ChronometerButton(props) {
  const label = props.timingEvents.length % 2 === 0
    ? <FaPlay />
    : <FaPause />;
  return (
    <div>
      <Button onClick={props.handleClick} className="btn">
        {label}
      </Button>
    </div>
  )
}