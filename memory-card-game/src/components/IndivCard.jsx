import { useState, useEffect } from "react";

//function to get a random number between 0 and 7438 (the max number of characters)
function getRandNo(max) {
  return Math.floor(Math.random() * max);
}

function IndivCard() {
  const [charData, setCharData] = useState({});

  const randNo = getRandNo(7438);

  useEffect(() => {
    fetch(`https://api.disneyapi.dev/character/${randNo}`)
      .then((response) => response.json())
      .then((retrievedData) => setCharData(retrievedData))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="flex flex-col w-50 h-70 justify-evenly items-center  bg-disney-blue m-5 rounded-lg  hover:bg-hover-disney-blue hover:cursor-pointer">
        <div className="flex flex-col justify-center w-40 h-50">
          <img
            className="max-w-40 max-h-50"
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
