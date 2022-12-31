import React, { useEffect } from "react";

export function IdeaPage() {
  useEffect(() => {
    document.title = "Politribe | Idea";
  }, []);
  return <div className={"text-white"}>Idea page</div>;
}
