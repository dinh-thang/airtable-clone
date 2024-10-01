"use client"

import React, { useState } from "react";

import MainHeaderBar from "~/app/_components/Header/MainHeaderBar";
import MainSideMenu from "~/app/_components/Menu/MainSideMenu";
import MainPageCard from "~/app/_components/Card/MainPageCard";
import MainStarIcon from "~/app/_components/Icon/Main/MainStarIcon";
import MainWindowIcon from "~/app/_components/Icon/Main/MainWindowIcon";
import MainArrowIcon from "~/app/_components/Icon/Main/MainArrowIcon";
import MainComplexWindowIcon from "~/app/_components/Icon/Main/MainComplexWindowIcon";
import BaseFilterMenu from "~/app/_components/Menu/BaseFilterMenu";

import Link from "next/link";
import { api } from "~/trpc/react";
import { useSession } from "next-auth/react";

//  TODO: add a type for workspace here and continue

const MainPage = () => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [currentWSpace, setCurrentWSpace] = useState();
  const [bases, setBases] = useState<string[]>([]);
  const [wSpace, setWSpace] = useState<string[]>([]);

  const { data: fetchedWSpace } = api.user.getAllWorkspacesByUserId.useQuery(
    { userId: userId! },
  );

  const { data: fetchedBases } = api.workspace.getWorkspaceById.useQuery(
    { id: currentWSpace! },
  )

  return (
    <main className="flex h-screen w-screen flex-col">
      <div className={`absolute h-full w-full overflow-hidden bg-[#F9FAFB]`}>
        <MainHeaderBar className={`relative top-0 z-50`} />
        <div className="z-10 flex h-full flex-row">
          <MainSideMenu className={`z-10 bg-white`} />

          {/* main content */}
          <div className="flex-1 px-12 pt-8">
            <h1
              className={`pb-6 font-main-content-sans text-[27px] font-[675] leading-[1.26] text-at-half-black`}
            >
              Home
            </h1>

            {/* 4 cards window */}
            <div
              className={`mb-6 grid w-full grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4`}
            >
              <Link href={``}>
                <MainPageCard>
                  <div className={`flex flex-row`}>
                    <div className={`flex items-center justify-center`}>
                      <MainStarIcon />
                    </div>
                    <h2
                      className={`ml-2 text-[15px] font-semibold text-at-half-black`}
                    >
                      Start with AI
                    </h2>
                  </div>
                  <p>
                    Turn your process into an app with data and interfaces using
                    AI.
                  </p>
                </MainPageCard>
              </Link>

              <Link href={``}>
                <MainPageCard>
                  <div className={`flex flex-row`}>
                    <div className={`flex items-center justify-center`}>
                      <MainWindowIcon />
                    </div>
                    <h2
                      className={`ml-2 text-[15px] font-semibold text-at-half-black`}
                    >
                      Start with templates
                    </h2>
                  </div>
                  <p>
                    Select a template to get started and customize as you go.
                  </p>
                </MainPageCard>
              </Link>

              <Link href={``}>
                <MainPageCard>
                  <div className={`flex flex-row`}>
                    <div className={`flex items-center justify-center`}>
                      <MainArrowIcon />
                    </div>
                    <h2
                      className={`ml-2 text-[15px] font-semibold text-at-half-black`}
                    >
                      Quickly upload
                    </h2>
                  </div>
                  <p>
                    Easily migrate your existing projects in just a few minutes.
                  </p>
                </MainPageCard>
              </Link>

              <Link href={``}>
                <MainPageCard>
                  <div className={`flex flex-row`}>
                    <div className={`flex items-center justify-center`}>
                      <MainComplexWindowIcon />
                    </div>
                    <h2
                      className={`ml-2 text-[15px] font-semibold text-at-half-black`}
                    >
                      Start from scratch
                    </h2>
                  </div>
                  <p>
                    Create a new blank base with custom tables, fields, and
                    views.
                  </p>
                </MainPageCard>
              </Link>
            </div>

            {/* filter bar */}
            <BaseFilterMenu className={`mb-5`} />

            {/* list of bases */}
            {/* TODO: display list of base here */}
            {/*<BaseListContainer workspaceId={""} />*/}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainPage;