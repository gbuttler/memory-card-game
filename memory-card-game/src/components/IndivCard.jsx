//function to get a random number between 0 and 7438 (the max number of characters)
function getRandNo(max) {
  return Math.floor(Math.random() * max);
}

const randNo = getRandNo(7438);

console.log(randNo);

function getCharacter() {
  fetch(`https://api.disneyapi.dev/character/${randNo}`)
    .then((response) => response.json())
    .then((data) => console.log(data.data.name))
    .catch((error) => console.error(error));
}

function IndivCard() {
  return (
    <>
      <div className="disney-char-container" onLoad={() => getCharacter()}>
        <img
          className="disney-char-image"
          src={data.data.imageUrl}
          width={350}
        ></img>
        <p></p>
      </div>
    </>
  );
}

export default IndivCard;
