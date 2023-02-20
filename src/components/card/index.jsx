import { useEffect, useState } from "react";
import mafiaLogo from "../../assets/mafia.svg";
import { GiFingerPrint } from "react-icons/gi";

const Card = ({ title, children, mafia }) => {
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
      onClick={handleFlip}
      className={`group relative flex aspect-[4/6] w-80 cursor-pointer select-none flex-col items-center justify-center transition-all duration-1000 [transform-style:preserve-3d] ${
        flip && "[transform:rotateY(180deg)]"
      }`}
    >
      {/* Side A */}
      <div className="absolute flex h-full w-full flex-col items-center justify-center gap-14 rounded-2xl  [background:linear-gradient(20deg,rgba(0,0,0,1)0%,rgba(56,56,56,1)100%)]">
        <img src={mafiaLogo} alt="mafia" className={`w-1/2`} />
        <div className="relative text-7xl text-secondary">
          <GiFingerPrint />
          <div className="absolute top-0 h-0 overflow-hidden text-content transition-all duration-700 group-hover:h-full">
            <GiFingerPrint />
          </div>
        </div>
      </div>
      {/* Side B */}
      <div className="absolute flex h-full w-full flex-col items-center justify-center gap-24 rounded-2xl [transform:rotateY(180deg)] [background:linear-gradient(20deg,rgba(0,0,0,1)0%,rgba(56,56,56,1)100%)] [backface-visibility:hidden]">
        <div className="relative flex aspect-square w-1/2 items-center justify-center rounded-full ring-8 ring-content">
          <div className="absolute top-[calc(50%-3px)] -left-[20%] flex h-[6px] w-[140%] origin-center rotate-0 justify-end">
            <div className="h-full w-1/5 bg-content"></div>
          </div>
          <div className="absolute top-[calc(50%-3px)] -left-[20%] flex h-[6px] w-[140%] origin-center rotate-90 justify-end">
            <div className="h-full w-1/5 bg-content"></div>
          </div>
          <div className="absolute top-[calc(50%-3px)] -left-[20%] flex h-[6px] w-[140%] origin-center rotate-180 justify-end">
            <div className="h-full w-1/5 bg-content"></div>
          </div>
          <div className="absolute top-[calc(50%-3px)] -left-[20%] flex h-[6px] w-[140%] origin-center -rotate-90 justify-end">
            <div className="h-full w-1/5 bg-content"></div>
          </div>
          <div className={`${mafia ? "text-mafia" : "text-citizen"} text-7xl`}>
            {children}
          </div>
        </div>
        <h2 className="text-2xl font-extrabold uppercase text-heading">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Card;
