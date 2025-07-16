function IndivCard({ cardData, onGoodClick, onBadClick }) {
  function cardClick() {
    console.log(`${cardData.id} clicked`);

    if (cardData.isClicked === true) {
      onBadClick();
    } else {
      cardData.isClicked = true; // Mark the card as clicked
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
            src={cardData?.data?.imageUrl}
          ></img>
        </div>
        <div className="flex w-40 justify-center">
          <p className="text-xl text-white">{cardData?.data?.name}</p>
        </div>
      </div>
    </>
  );
}

export default IndivCard;
