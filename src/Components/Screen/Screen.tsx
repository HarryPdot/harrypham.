import { useEffect, useState } from "react";
import { useContentful } from "@/Assets/Contentful/Contentful";
import { About } from "../Pages/About/About";
import { Projects } from "../Pages/Projects/Projects";
import { ProjectModal } from "../Pages/Projects/ProjectModal";
const Screen = ({ selection }: any) => {
  const [selectProject, setSelectProject] = useState<any>([]);
  const [open, setOpen] = useState<Boolean>(false);

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
          border-screen
          relative
          bg-darkMode
          "
    >
      {selection === "About" ? <About /> : null}
      {selection === "Projects" ? (
        <Projects
          selectProject={selectProject}
          setSelectProject={setSelectProject}
          setOpen={setOpen}
        />
      ) : null}
      {open ? (
        <ProjectModal
          open={open}
          setOpen={setOpen}
          selectProject={selectProject}
          setSelectProject={setSelectProject}
        />
      ) : null}
    </section>
  );
};

export { Screen };
