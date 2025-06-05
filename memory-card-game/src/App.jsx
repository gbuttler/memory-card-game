// import { useState } from 'react'
import "./App.css";
import Title from "./components/Title";
import Description from "./components/Description";
import Scores from "./components/Scores";
import Cards from "./components/Cards";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Title />
      <Description />
      <Scores />
      <Cards />
    </>
  );
}

export default App;
