import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { PendingFallback } from "./PendingFallback";

export function Layout() {
  return (
    <>
      <Navbar />
      <main className="m-8">
        <Suspense fallback={<PendingFallback />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
