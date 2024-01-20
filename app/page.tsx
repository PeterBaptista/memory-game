"use client";

import * as React from "react";

import { Akshar } from "next/font/google";

import { cn } from "@/lib/utils";

const akshar = Akshar({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={cn(akshar.className, "container")}>
      <header className="text-5xl flex flex-1 w-full h-16 justify-center items-center ">
        <h1>Memory Game - by Pedrou</h1>
      </header>
      <div></div>
      <div className="flex-1  flex-col flex items-center"></div>
    </main>
  );
}
