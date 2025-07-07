function Scores({ score, highScore }) {
  return (
    <>
      <div className="mr-5">
        <p>High Score: {highScore}</p>
        <p>Current Score: {score}</p>
      </div>
    </>
  );
}

export default Scores;
