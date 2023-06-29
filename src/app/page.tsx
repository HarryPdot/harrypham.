"use client";
import { CommandLine } from "@/Components/CommandLine/CommandLine";
import { StatusBar } from "@/Components/StatusBar/StatusBar";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Screen } from "@/Components/Screen/Screen";

export default function Home() {
  const [open, setOpen] = useState<Boolean>(false);
  const [selection, setSelection] = useState<String>("About");
  const [xVar, setXVar] = useState<Number>(0);
  const [yVar, setYVar] = useState<Number>(0);
  const handleCursor = (e: any) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    setXVar(x);
    setYVar(y);
  };

  useEffect(() => {
    const pos = document.documentElement;
    pos.style.setProperty("--x", xVar + "px");
    pos.style.setProperty("--y", yVar + "px");
  }, [xVar, yVar]);
  return (
    <div
      className="
      pointer-events-auto 
      m-0
      flex
      h-full
      w-full
      items-center
      justify-center
      bg-black
      box
    "
      onMouseMove={handleCursor}
    >
      <section
        className="
        grid
        h-full
        w-full
        max-h-screenHeight
        max-w-screenWidth
        border-2
        border-solid
        border-white
        grid-cols-6
        grid-rows-6

        bg-darkMode
      "
      >
        <CommandLine
          selection={selection}
          setSelection={setSelection}
          open={open}
          setOpen={setOpen}
        />
        <StatusBar />
        <Screen selection={selection} open={open} setOpen={setOpen} />
      </section>
    </div>
  );
}
