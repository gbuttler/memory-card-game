import IndivCard from "./IndivCard";

function Cards({ score, setScore }) {
  function onGoodClick() {
    setScore(score + 1);
    console.log(score);
  }

  function onBadClick() {
    alert("Oops, bad click, Game over!");
  }
  const cards = Array.from({ length: 12 }, () => (
    <IndivCard onBadClick={onBadClick} onGoodClick={onGoodClick} />
  ));
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
