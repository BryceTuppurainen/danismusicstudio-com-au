import React from 'react';
import { useState, useEffect } from 'react';
import "./App.css";

function App() {

  const [developmentTime, setDevelopmentTime] = useState("");

  useEffect(() => {
    let completionDate = new Date("2022-10-20");
    let today = new Date();
    let remainingDays = Math.ceil((completionDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
    setDevelopmentTime(remainingDays);
  }, []);

  return (
    <div className="App">
      <p>This page is currently under development. Check back in {developmentTime} days</p>
      <p>If you have any questions, please contact: bryce.tuppurainen.au@gmail.com</p>
    </div>
  );
}

export default App;
