import React from "react";
import type { CardComponent } from "~/types/components/Card/CardComponent";

const Card: React.FC<CardComponent> = ({ card }) => {
  return (
    <>
      <div className="cursor-default max-w-sm p-6 rounded-lg hover:scale-105 shadow-md hover:ring-2 hover:ring-blue-600 transition-all duration-500 ease-in-out">
        <div className={"text-white text-xl"}>{card.icon}</div>
        <div>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">
            {card.title}
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-400">{card.desc}</p>
      </div>
    </>
  );
};

export default Card;
