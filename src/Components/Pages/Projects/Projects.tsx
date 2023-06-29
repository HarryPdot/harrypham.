import { useContentful } from "@/Assets/Contentful/Contentful";
import { useEffect, useState } from "react";

const Projects = () => {
  const { getProjectContent } = useContentful();
  const [projects, setProjects] = useState<any>([]);
  const [selectProject, setSelectProject] = useState<any>([]);
  const [open, setOpen] = useState<Boolean>(false);
  useEffect(() => {
    getProjectContent().then((res) => {
      let cleanUpProject = res?.map((item: any) => {
        return {
          name: item.fields.name,
          description: item.fields.description,
          image: "https:" + item.fields.image.fields.file.url || null,
          skills: item.fields.skills,
          githubUrl: item.fields.githubUrl,
          projectUrl: item.fields.projectUrl,
        };
      });
      setProjects(cleanUpProject);
    });
  }, []);

  const handleOpen = (item: any) => {
    setOpen(true);
    setSelectProject(item);
    console.log(open);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectProject([]);
  };

  return (
    <section className="flex flex-wrap gap-3 justify-center overflow-y-scroll w-full h-full relative">
      {projects.map((item: any, i: number) => {
        return (
          <div
            key={i}
            className="border border-white w-1/4 h-52 cursor-pointer relative"
            onClick={() => handleOpen(item)}
          >
            <picture className="">
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover absolute"
              />
            </picture>
            <div className="w-full h-full bg-blend-overlay backdrop-blur-sm absolute bg-black opacity-60"></div>
            <div className="absolute w-full h-full flex justify-center items-center p-5 text-center">
              <h2 className="text-lg">{item.name}</h2>
            </div>
          </div>
        );
      })}
      {open ? (
        <section className="w-full h-screen bg-black absolute">
          <button onClick={() => handleClose()}>close</button>
          <div>{selectProject.name}</div>
        </section>
      ) : null}
    </section>
  );
};

export { Projects };
