"use client";
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
      h-full
      w-full
      bg-darkMode
      text-light
    "
      onMouseMove={handleCursor}
    >
      hello
    </div>
  );
}
