import { useState, useEffect } from "react";

//function to get a random number between 0 and 7438 (the max number of characters)
function getRandNo(max) {
  return Math.floor(Math.random() * max);
}

function IndivCard({ onGoodClick, onBadClick }) {
  // console.log("rendering invid card");
  const [charData, setCharData] = useState({});
  const [isClicked, setIsClicked] = useState(false);

  const randNo = getRandNo(7438);

  useEffect(() => {
    fetch(`https://api.disneyapi.dev/character/${randNo}`)
      .then((response) => response.json())
      .then((retrievedData) => setCharData(retrievedData))
      .catch((error) => console.error(error));
  }, []);

  function cardClick() {
    console.log(`${randNo} clicked`);
    setIsClicked(true);

    if (isClicked === true) {
      onBadClick();
    } else {
      onGoodClick();
    }
  }

  return (
    <>
      <div
        onClick={() => cardClick()}
        className="flex flex-col w-40 h-60 justify-evenly items-center  bg-disney-blue m-5 rounded-lg  hover:bg-hover-disney-blue hover:cursor-pointer"
      >
        <div className="flex flex-col justify-center w-30 h-40">
          <img
            className="max-w-30 max-h-40"
            src={charData?.data?.imageUrl}
          ></img>
        </div>
        <div className="flex w-40 justify-center">
          <p className="text-xl text-white">{charData?.data?.name}</p>
        </div>
      </div>
    </>
  );
}

export default IndivCard;
