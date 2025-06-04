// import { useState } from 'react'
import "./App.css";
import Title from "./components/Title";
import Description from "./components/Description";
import Scores from "./components/Scores";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Title />
      <Description />
      <Scores />
    </>
  );
}

export default App;
