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
      <div className="disney-char-container">
        <img
          className="disney-char-image"
          src={charData?.data?.imageUrl}
          width={350}
        ></img>
        <p>{charData?.data?.name}</p>
      </div>
    </>
  );
}

export default IndivCard;
