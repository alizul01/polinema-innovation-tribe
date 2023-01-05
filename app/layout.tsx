import type { PropsWithChildren } from "react";
import Footer from "~/components/Footer";
import { Navbar } from "~/components/Navbar";
import "~/styles/globals.css";

export default function RootLayout(props: PropsWithChildren<{}>) {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Politribe</title>
        </head>
        <body>
          <Navbar />
          <main className="m-8">{props.children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
