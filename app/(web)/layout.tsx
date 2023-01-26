"use client"; // kalo di server kok sering banget kena masalah Hydration (aku test pake network slow 3G pasti bakal begitu)
import type { PropsWithChildren } from "react";
import { Suspense } from "react";
import Footer from "~/components/Footer/Footer";
import { Navbar } from "~/components/Navigation/Navbar";
import "~/styles/globals.css";
import { useRouter } from "next/navigation";
import Loading from "~/app/(auth)/loading";

export default function RootLayout(props: PropsWithChildren<{}>) {
  const router = useRouter();
  return (
    <div className="flex justify-between flex-col h-full">
      <div className={"z-20"}>
        <Navbar />
      </div>
      <div className="flex-1">
        <Suspense fallback={<Loading />}>
          <main className="p-6 h-full">{props.children}</main>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
