import React, { useEffect } from "react";
import Hero from "../parts/HomePage/Hero";

export function HomePage() {
  useEffect(() => {
    document.title = "Politribe | Home";
  }, []);

  return (
    <div>
      <Hero />
      <div className={"border-slate-700 border mt-12 block w-full"}></div>
    </div>
  );
}
