import React from "react";

export type HeaderType = {
  title: string;
  slogan: string;
};

const Header: React.FC<HeaderType> = ({ slogan, title }) => {
  return (
    <div className={"text-start font-bold flex flex-col gap-1 "}>
      <span className={"text-3xl md:text-4xl"}>{title}</span>
      <span className={"text-purple-600"}>{slogan}</span>
    </div>
  );
};

export default Header;
