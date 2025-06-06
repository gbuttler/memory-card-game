import IndivCard from "./IndivCard";

function Cards() {
  return (
    <>
      <div className="w-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <IndivCard />
        <IndivCard />
        <IndivCard />
        <IndivCard />
        <IndivCard />
        <IndivCard />
        <IndivCard />
        <IndivCard />
        <IndivCard />
        <IndivCard />
        <IndivCard />
        <IndivCard />
      </div>
    </>
  );
}

export default Cards;
