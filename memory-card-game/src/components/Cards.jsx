import { useState, useEffect } from "react";
import IndivCard from "./IndivCard";

function Cards({ score, setScore, highScore, setHighScore }) {
  // Store card data instead of components
  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Function to get a random number between 0 and 7438 (the max number of characters)
  function getRandNo(max) {
    return Math.floor(Math.random() * max);
  }

  // Fetch card data once when component mounts
  useEffect(() => {
    const fetchCardData = async () => {
      try {
        // Generate 12 unique random numbers for the cards
        const randomNumbers = Array.from({ length: 12 }, () => getRandNo(7438));

        // Fetch all card data at once
        const promises = randomNumbers.map((randNo) =>
          fetch(`https://api.disneyapi.dev/character/${randNo}`)
            .then((response) => response.json())
            .then((retrievedData) => ({
              id: randNo,
              data: retrievedData.data,
              isClicked: false,
            }))
        );

        const data = await Promise.all(promises);
        setCardData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching card data:", error);
        setIsLoading(false);
      }
    };

    fetchCardData();
  }, []); // Empty dependency array means this only runs once

  function onGoodClick() {
    setScore(score + 1);

    shuffleCards();
    if (score === 11) {
      checkHighScore();
      console.log(`score is: ${score}`);
      alert("Game won - Well done!");
      window.location.reload(false);
    } else {
      console.log(`score is: ${score}`);
    }
  }

  function onBadClick() {
    checkHighScore();
    setScore(0);
    alert("Oops, bad click, Game over!");
    window.location.reload(false);
  }

  function checkHighScore() {
    if (score > highScore) {
      setHighScore(score);
      console.log(`high score is: ${score}`);
    } else {
      console.log(`high score is: ${score}`);
    }
  }

  function shuffleCards() {
    console.log("cards are being shuffled");
    setCardData((prevCards) => {
      const shuffCards = [...prevCards];
      let i = shuffCards.length;
      let j;
      let tempValue;

      while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        tempValue = shuffCards[j];
        shuffCards[j] = shuffCards[i];
        shuffCards[i] = tempValue;
        console.log("shuffling process");
      }
      return shuffCards;
    });
  }

  //Show loading screen if call isn't complete
  if (isLoading) {
    return <div>Loading cards...</div>;
  }

  //   console.log(cards);

  //   //cards need to keep track of if they've been clicked or not
  //   //cards need to change visual order when one is clicked (but data should not change)
  //   //if a card is clicked twice, a game over alert should show

  return (
    <>
      <div className="w-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
        {cardData.map((card) => (
          <IndivCard
            key={card.id}
            cardData={card}
            onBadClick={onBadClick}
            onGoodClick={onGoodClick}
            setHighScore={checkHighScore}
          />
        ))}
      </div>
    </>
  );
}

export default Cards;
