import Card from "./components/card";
import { FaRedhat, FaSyringe } from "react-icons/fa";
import {
  GiCardPick,
  GiCardRandom,
  GiBandit,
  GiBoltShield,
  GiCrossbow,
  GiCrosshair,
  GiBiceps,
  GiBlackHandShield,
  GiDesertEagle,
} from "react-icons/gi";

function App() {
  return (
    <div className="flex flex-wrap gap-1 font-display text-content">
      <Card title="godfather" mafia={true}>
        <FaRedhat />
      </Card>
      <Card title="joker" mafia={true}>
        <GiCardRandom />
      </Card>
      <Card title="hostage taker" mafia={true}>
        <GiBandit />
      </Card>
      <Card title="doctor" mafia={false}>
        <FaSyringe />
      </Card>
      <Card title="detective" mafia={false}>
        <GiCardPick />
      </Card>
      <Card title="gaurdian" mafia={false}>
        <GiBoltShield />
      </Card>
      <Card title="hunter" mafia={false}>
        <GiCrossbow />
      </Card>
      <Card title="sniper" mafia={false}>
        <GiCrosshair />
      </Card>
      <Card title="Die-hard" mafia={false}>
        <GiBiceps />
      </Card>
      <Card title="rifleman" mafia={false}>
        <GiDesertEagle />
      </Card>
    </div>
  );
}

export default App;
