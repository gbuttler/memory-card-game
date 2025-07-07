import IndivCard from "./IndivCard";

function Cards({ score, setScore, highScore, setHighScore }) {
  const cards = Array.from({ length: 12 }, () => (
    <IndivCard
      onBadClick={onBadClick}
      onGoodClick={onGoodClick}
      setHighScore={checkHighScore}
    />
  ));

  function onGoodClick() {
    setScore(score + 1);
    checkHighScore();
    if (score === 11) {
      console.log(`score is: ${score}`);
      alert("Game won - Well done!");
      window.location.reload(false);
    } else {
      console.log(`score is: ${score}`);
    }
  }

  function onBadClick() {
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

  console.log(cards);

  //cards need to keep track of if they've been clicked or not
  //cards need to change visual order when one is clicked (but data should not change)
  //if a card is clicked twice, a game over alert should show

  return (
    <>
      <div className="w-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
        {cards}
      </div>
    </>
  );
}

export default Cards;
