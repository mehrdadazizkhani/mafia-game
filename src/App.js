import Card from "./components/card";
import cards from "./cardsData";

function App() {
  return (
    <div className="flex gap-1 font-display text-content">
      {cards.map((card) => {
        return <Card data={card} />;
      })}
    </div>
  );
}

export default App;
