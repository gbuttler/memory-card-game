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
      <div className="flex flex-col m-7">
        <div className="flex justify-between">
          <div className="flex flex-col items-start">
            <Title />
            <Description />
          </div>
          <Scores />
        </div>
        <div className="flex justify-center">
          <Cards />
        </div>
      </div>
    </>
  );
}

export default App;
