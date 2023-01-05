import type { PropsWithChildren } from "react";
import Footer from "~/components/Footer";
import { Navbar } from "~/components/Navbar";
import "~/styles/globals.css";

export default function RootLayout(props: PropsWithChildren<{}>) {
  return (
    <>
      <html lang="en">
        <head>
          <title>Politribe</title>
        </head>
        <body className="flex justify-between flex-col">
          <div>
            <Navbar />
            <main className="m-8">{props.children}</main>
          </div>
          <Footer />
        </body>
      </html>
    </>
  );
}
