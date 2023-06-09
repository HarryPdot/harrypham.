"use client";
import { CommandLine } from "@/Components/CommandLine/CommandLine";
import { Container } from "@/Components/Resuables/Container/Container";
import { StatusBar } from "@/Components/StatusBar/StatusBar";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [xVar, setXVar] = useState<Number>(0);
  const [yVar, setYVar] = useState<Number>(0);
  const handleCursor = (e: any) => {
    setXVar(e.clientX);
    setYVar(e.clientY);
  };

  useEffect(() => {
    const pos = document.documentElement;
    pos.style.setProperty("--x", xVar + "px");
    pos.style.setProperty("--y", yVar + "px");
  }, [xVar, yVar]);
  return (
    <div
      className="
      testing
      pointer-events-auto 
      m-0
      flex
      h-full
      w-full
      items-center
      justify-center
      bg-black
    "
      onMouseMove={handleCursor}
    >
      <Container
        className="
        grid
        h-4/5
        max-h-screenHeight
        w-4/5
        max-w-screenWidth
        grid-cols-6
        grid-rows-6
        border-2
        border-solid
        border-white
        bg-darkMode
      "
      >
        <CommandLine></CommandLine>
        <StatusBar></StatusBar>
      </Container>
    </div>
  );
}
