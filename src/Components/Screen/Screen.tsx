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
          text-light
          border
          h-full
          w-full
          "
    >
      {selection === "About" ? <About /> : null}
    </section>
  );
};

export { Screen };
