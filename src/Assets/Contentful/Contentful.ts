import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "hnyp3aiv2g1d",
    accessToken: "Juy1tfw4ydnGMVy2gsBgX5sTcl17BtJlTaglA_sH-QY",
    host: "cdn.contentful.com",
  });

  const getAboutContent = async () => {
    try {
      const entries: any = await client.getEntries<unknown>({
        content_type: "portfolio",
        select: "fields",
      });
      return entries as any;
    } catch (error) {
      let errorMessage = "Failed to do something exceptional";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log(errorMessage);
    }
  };

  const getProjectContent = async () => {
    try {
      const entries: any = await client.getEntries<unknown>({
        content_type: "projectSection",
        select: "fields",
      });
      return entries.items as any;
    } catch (error) {
      let errorMessage = "Failed to do something exceptional";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log(errorMessage);
    }
  };

  return { getAboutContent, getProjectContent };
};

export { useContentful };
