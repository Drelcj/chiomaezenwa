'use client'
// components/CountdownTimer.js
import { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDownDate = new Date('Mar 8, 2024 00:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateTimer, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex lg:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible justify-around pt-40 space-x-2">
        <div className="flex gap-5">
      {/* <p>Countdown to Mar 8, 2024:</p> */}
      <div>
        <span className="countdown font-mono text-3xl" id="days">{timeLeft.days}</span> day{' '}
        <span className="countdown font-mono text-3xl" id="hours">{timeLeft.hours}</span> hours{' '}
        <span className="countdown font-mono text-3xl" id="minutes">{timeLeft.minutes}</span> mins{' '}
        <span className="countdown font-mono text-3xl" id="seconds">{timeLeft.seconds}</span> secs
      </div>
    </div>
    <div>
            <div className="countdown font-mono text-3xl">
          Until Book Signing,&nbsp;
                </div>
                
                <a href="https://forms.gle/FDfYzfo3ukDdM3n17" target="_blank" rel="noopener noreferrer" className="countdown font-mono text-3xl text-red-600 text-end">Register here</a>
        </div>
    </div>
  );
};

export default CountdownTimer;
