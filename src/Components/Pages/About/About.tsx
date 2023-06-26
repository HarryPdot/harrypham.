import { useContentful } from "@/Assets/Contentful/Contentful";
import { useState, useEffect } from "react";

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

  return <div>{about.description}</div>;
};

export { About };
