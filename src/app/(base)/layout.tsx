import "~/styles/globals.css";

import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { HydrateClient } from "~/trpc/server";
import { getServerSession } from "next-auth";
import SessionProvider from "~/app/_components/Wrapper/SessionProvider";

export const metadata: Metadata = {
  title: "Airtable",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
 children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession();

  return (
    <html lang="en">
    <body>
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
