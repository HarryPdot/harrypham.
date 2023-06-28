import { useContentful } from "@/Assets/Contentful/Contentful";
import { useState, useEffect } from "react";
import "./About.css";
const About = () => {
  interface aboutProps {
    description: any;
    image: string;
  }
  const [about, setAbout] = useState<aboutProps>({
    description: [],
    image: "",
  });

  const { getAboutContent } = useContentful();
  useEffect(() => {
    getAboutContent().then((res) => {
      setAbout({
        description: [res?.items[0].fields.about],
        image: "https:" + res?.items[0].fields.portrait.fields.file.url,
      });
    });
  }, []);

  return (
    <div className="flex gap-10 h-full w-full justify-center items-center">
      <picture className="flex justify-center items-center max-md:hidden">
        <img
          className="h-full w-full"
          src={about.image}
          alt="Landscape picture"
        />
      </picture>
      <div className="">{about.description}</div>
    </div>
  );
};

export { About };
