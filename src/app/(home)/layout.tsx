import "~/styles/globals.css";

import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { HydrateClient } from "~/trpc/server";
import HeaderBar from "~/app/_components/Header/HeaderBar";

export const metadata: Metadata = {
  title: "The platform to build next-gen apps - Airtable",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`font-sans`}>
      <body className={`h-screen`}>
        <TRPCReactProvider>
          <HydrateClient>
            <HeaderBar/>

            {children}
          </HydrateClient>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
