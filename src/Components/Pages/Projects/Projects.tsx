import { useContentful } from "@/Assets/Contentful/Contentful";
import { useEffect, useState } from "react";
import "./Projects.css";

const Projects = ({ setOpen, setSelectProject }: any) => {
  const { getProjectContent } = useContentful();
  const [projects, setProjects] = useState<any>([]);
  const [hovered, setHovered] = useState<String>("");

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
  };

  const handleHover = (item: String) => {
    setHovered(item);
  };

  return (
    <section className="flex justify-evenly items-center flex-col h-full absolute">
      <section className="flex flex-wrap gap-3 justify-center items-end overflow-y-scroll w-full h-fit  pt-2 pb-2 scrolling">
        {projects.map((item: any, i: number) => {
          return (
            <div
              key={i}
              className="border border-white w-52 h-32 cursor-pointer relative rounded-md overflow-hidden hover:text-white"
              onClick={() => {
                handleOpen(item);
              }}
              onMouseOver={() => handleHover(item.name)}
            >
              <picture className="">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover absolute "
                />
              </picture>
              <div className="w-full h-full bg-blend-overlay backdrop-blur-sm absolute bg-black opacity-60 rounded-lg"></div>
              <div className="absolute w-full h-full flex justify-center items-center p-5 text-center">
                <h2 className="text-lg">{item.name}</h2>
              </div>
            </div>
          );
        })}
      </section>
      {hovered ? (
        <section className="w-full h-16 flex justify-center items-center relative">
          <div className="w-full bg-black opacity-50 absolute h-full"></div>
          <div className="text-xl absolute">{hovered}</div>
        </section>
      ) : null}
    </section>
  );
};

export { Projects };
