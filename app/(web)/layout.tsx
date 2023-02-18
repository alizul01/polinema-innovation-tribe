import type { PropsWithChildren } from "react";
import { Suspense } from "react";
import { Footer } from "~/components/Footer";
import { Navbar } from "~/components/Navigation/Navbar";
import "~/styles/globals.css";
import Loading from "~/app/(auth)/loading";

export default function RootLayout(props: PropsWithChildren<{}>) {
  return (
    <div className="flex justify-between flex-col h-full">
      <div className="z-20">
        <Navbar />
      </div>
      <div className="flex-1">
        <Suspense fallback={<Loading />}>
          <main className="h-full">{props.children}</main>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
