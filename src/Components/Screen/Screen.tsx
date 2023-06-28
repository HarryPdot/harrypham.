import { useEffect, useState } from "react";
import { useContentful } from "@/Assets/Contentful/Contentful";
import { About } from "../Pages/About/About";
const Screen = ({ selection }: any) => {
  return (
    <section
      className="
          col-start-2
          col-end-6
          row-start-1
          row-end-5
          max-md:col-start-1
          max-md:col-end-7
          text-light
          border-2
          h-full
          w-full
          p-10
          border-screen
          "
    >
      {selection === "About" ? <About /> : null}
    </section>
  );
};

export { Screen };
