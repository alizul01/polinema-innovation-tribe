"use client"
import type { PropsWithChildren } from "react";
import { Suspense } from "react";
import "~/styles/globals.css";
import Loading from "~/app/(web)/loading";

export default function RootLayout(props: PropsWithChildren<{}>) {
  return (
    <div className="flex h-full items-center justify-center">
      <div>
        <Suspense fallback={<Loading />}>
          <main>{props.children}</main>
        </Suspense>
      </div>
    </div>
  );
}
