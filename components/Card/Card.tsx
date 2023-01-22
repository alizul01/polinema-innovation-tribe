import React from "react";
import type {CardType} from "~/types/components/Card/CardType";
import type {CardComponent} from "~/types/components/Card/CardComponent";

const Card: React.FC<CardComponent> = ({card}) => {
  return (
    <>
      <div
        className="max-w-sm p-6 rounded-lg shadow-md">
        <div className={"text-white text-xl"}>
          {card.icon}
        </div>
        <div>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">{card.title}</h5>
        </div>
        <p className="mb-3 font-normal text-gray-400">{card.desc}</p>
      </div>
    </>
  )
}

export default Card
