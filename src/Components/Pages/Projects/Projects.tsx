import { useContentful } from "@/Assets/Contentful/Contentful";
import { useEffect, useState } from "react";

const Projects = () => {
  const { getProjectContent } = useContentful();
  const [projects, setProjects] = useState<any>([]);
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
  return (
    <section className="flex flex-wrap gap-3 justify-center overflow-y-scroll w-full h-full pt-5 pb-5">
      {projects.map((item, i) => {
        return (
          <div
            key={i}
            className="border border-white w-1/4 h-52 cursor-pointer relative"
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
    </section>
  );
};

export { Projects };
