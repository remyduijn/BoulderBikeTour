import React from 'react';
import '../../styles/Countdown.css'
import CountdownTimer from './CountdownTimer';

export default function CountdownSection() {
  const HUNDREDANDTWENTYTHREE_DAYS_IN_MS = 123 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterXDays = NOW_IN_MS + HUNDREDANDTWENTYTHREE_DAYS_IN_MS;

  return (
    <div className="bg-color">
      <CountdownTimer targetDate={dateTimeAfterXDays} />
    </div>
  );
}

