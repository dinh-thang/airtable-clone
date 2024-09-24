import "~/styles/globals.css";

import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { HydrateClient } from "~/trpc/server";
import MainHeaderBar from "~/app/_components/Header/MainHeaderBar";
import { getServerSession } from "next-auth";
import SessionProvider from "~/app/_components/Wrapper/SessionProvider";

export const metadata: Metadata = {
  title: "Airtable",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function MainLayout({
 children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession();

  return (
    <html lang="en" className={`font-main-sans`}>
    <body className={`h-screen`}>
      <TRPCReactProvider>
        <SessionProvider session={session}>
          <HydrateClient>
            {children}
          </HydrateClient>
        </SessionProvider>
      </TRPCReactProvider>
    </body>
    </html>
  );
}
