import React, { useEffect } from "react";

function Idea() {
  useEffect(() => {
    document.title = "Politribe | Idea";
  }, []);
  return <div className={"text-white"}>Idea page</div>;
}

export default Idea;
