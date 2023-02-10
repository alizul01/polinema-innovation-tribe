import React from "react";
import type { QuotesType } from "~/types/Idea/Create/QuotesType";

const BlockQuote: React.FC<QuotesType> = ({ cite, name }) => {
  return (
    <div>
      <blockquote className="p-4 my-4 border-l-4 border-gray-500 bg-gray-800">
        <p className="text-xl italic font-medium leading-relaxed text-gray-900 text-gray-200">
          {name}
        </p>
        <cite className="pl-3 text-sm font-light text-gray-400">{cite}</cite>
      </blockquote>
    </div>
  );
};

export default BlockQuote;
