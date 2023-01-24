"use client"; // kalo di server kok sering banget kena masalah Hydration (aku test pake network slow 3G pasti bakal begitu)
import type { PropsWithChildren } from "react";
import Footer from "~/components/Footer/Footer";
import { Navbar } from "~/components/Navigation/Navbar";
import "~/styles/globals.css";
import {useRouter} from "next/navigation";
import {Suspense} from "react";
import Loading from "~/app/(auth)/loading";
export default function RootLayout(props: PropsWithChildren<{}>) {
  const router = useRouter();
  return (
    <>
      <html lang="en">
        <body className="flex justify-between flex-col h-full">
          <div className="flex-1">
            <Suspense fallback={<Loading />}>
              <div className={"z-20"}>
                <Navbar />
              </div>
              <main className="p-6 h-full z-10">{props.children}</main>
            </Suspense>
          </div>
          <Footer />
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-MXJ2P4R"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        </body>
      </html>
    </>
  );
}
