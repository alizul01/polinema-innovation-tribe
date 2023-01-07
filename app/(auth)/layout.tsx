import type { PropsWithChildren } from "react";
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
        <main>{props.children}</main>
      </div>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MXJ2P4R"
                        height="0" width="0" style={{display: "none", visibility: "hidden"}}></iframe></noscript>
      </body>
      </html>
    </>
  );
}
