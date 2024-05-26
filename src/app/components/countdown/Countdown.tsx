'use client'
import React, { useState, useEffect } from "react";

const Countdown = () => {
  // Define your countdown values (days, hours, minutes, seconds)
  const days = 3;
  const hours = 4;
  const minutes = 24;
  const seconds = 28;

  // Helper function to format time values (add leading zeros)
  const formatTime = (value: any) => {
    return value < 10 ? `0${value}` : value;
  };

  // Calculate the total seconds remaining
  const totalSeconds = days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;

  // Initialize state for countdown
  const [timeLeft, setTimeLeft] = useState(totalSeconds);

  // Update countdown every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Clean up the interval
    return () => clearInterval(interval);
  }, []);

  // Calculate remaining days, hours, minutes, and seconds
  const remainingDays = Math.floor(timeLeft / (24 * 60 * 60));
  const remainingHours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const remainingMinutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const remainingSeconds = timeLeft % 60;

  return (
          <div className="flex lg:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible justify-around pt-40 space-x-2">
        <div className="flex gap-5">
          <div>
            <span className="countdown font-mono text-3xl">
              {formatTime(remainingDays)}
            </span>
            day
          </div>
          <div>
            <span className="countdown font-mono text-3xl">
              {formatTime(remainingHours)}
            </span>
            hours
          </div>
          <div>
            <span className="countdown font-mono text-3xl">
              {formatTime(remainingMinutes)}
            </span>
            mins
          </div>
          <div>
            <span className="countdown font-mono text-3xl">
              {formatTime(remainingSeconds)}
            </span>
            secs
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

export default Countdown;
