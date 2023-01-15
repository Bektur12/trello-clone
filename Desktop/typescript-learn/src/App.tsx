import React from "react";
import "./App.css";

function App() {
  const isBirthdayData: boolean = true;
  const ageData: number = 0;
  const userNameData: string = "beka";

  function logBrtMsg(isBirthday: boolean, userName: string, age: number) {
    if (isBirthday) {
      console.log(`${age} ${userName} ${age}`);
    }
  }
  logBrtMsg(isBirthdayData, userNameData, ageData);

  return <div className="App">dfasfdasfd</div>;
}

export default App;
