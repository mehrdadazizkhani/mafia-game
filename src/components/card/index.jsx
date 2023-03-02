import { useEffect, useState } from "react";
import mafiaLogo from "../../assets/mafia.svg";

const Card = ({ data, id, key }) => {
  const [flip, setFlip] = useState(false);
  const duration = 1000;
  let timer;

  const handleFlip = () => {
    setFlip(true);
    timer = setTimeout(() => {
      setFlip(false);
      clearTimeout(timer);
    }, duration);
  };

  return (
    <div
      key={key}
      onClick={handleFlip}
      className={`group relative flex aspect-[4/6] w-80 cursor-pointer select-none flex-col items-center justify-center transition-all duration-1000 [transform-style:preserve-3d] ${
        flip && "[transform:rotateY(180deg)]"
      }`}
    >
      {/* Side A */}
      <div className="absolute flex h-full w-full flex-col items-center justify-center gap-14 rounded-2xl  [background:linear-gradient(20deg,rgba(0,0,0,1)0%,rgba(56,56,56,1)100%)]">
        <img src={mafiaLogo} alt="mafia" className={`w-1/2`} />
      </div>
      {/* Side B */}
      <div className="absolute flex h-full w-full flex-col items-center justify-between rounded-2xl p-5 [transform:rotateY(180deg)] [background:linear-gradient(20deg,rgba(0,0,0,1)0%,rgba(56,56,56,1)100%)] [backface-visibility:hidden]">
        <h2 className="text-center text-xl font-extrabold uppercase text-heading">
          {data.role}
        </h2>
        <p className="text-center">{data.desciption}</p>
        <div
          className={`h-0.5 w-1/2 animate-pulse ${
            data.ally === "mafia" ? "bg-mafia" : "bg-citizen"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Card;
