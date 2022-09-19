import React from 'react';
import { useState, useEffect } from 'react';
import "./App.css";

function App() {

  const [developmentTime, setDevelopmentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      let completionDate = new Date("2022-10-20");
      let today = new Date();
      let remainingDays = Math.floor((completionDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
      let remainingHours = Math.floor((completionDate.getTime() - today.getTime()) / (1000 * 3600) - (remainingDays * 24));
      let remainingMinutes = Math.floor((completionDate.getTime() - today.getTime()) / (1000 * 60) - (remainingDays * 24 * 60) - (remainingHours * 60));
      let remainingSeconds = Math.floor((completionDate.getTime() - today.getTime()) / (1000) - (remainingDays * 24 * 60 * 60) - (remainingHours * 60 * 60) - (remainingMinutes * 60));
      setDevelopmentTime(`${remainingDays} Days - ${remainingHours} Hours - ${remainingMinutes.toString().padStart(2, "0")} Minutes - ${remainingSeconds.toString().padStart(2, "0")} Seconds`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <p>This page is currently under development.</p>
      <p>Check back in {developmentTime}</p>
      <p>If you have any questions, please contact: bryce.tuppurainen.au@gmail.com</p>
    </div>
  );
}

export default App;
