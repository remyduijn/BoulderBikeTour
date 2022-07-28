import React from 'react';
import '../../styles/Countdown.css'
import CountdownTimer from '../../CountdownTimer';

export default function CountdownSection() {
  const TWOHUNDREDANDSEVENTY_DAYS_IN_MS = 270 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterXDays = NOW_IN_MS + TWOHUNDREDANDSEVENTY_DAYS_IN_MS;

  return (
    <div className="bg-color">
      <CountdownTimer targetDate={dateTimeAfterXDays} />
    </div>
  );
}

