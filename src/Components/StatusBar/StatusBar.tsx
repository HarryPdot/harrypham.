import Image from "next/image";
import { Container } from "../Resuables/Container/Container";
import { ChatBubble } from "../ChatBubble/ChatBubble";
import profilePic from "../../Assets/Images/tempharry.png";
import { GoMarkGithub as GitHub } from "react-icons/go";
import { SiLinkedin as LinkedIn } from "react-icons/si";
import { BsInstagram as Instagram } from "react-icons/bs";

const StatusBar = () => {
  return (
    <Container
      className="
          col-start-1
          col-end-7
          row-start-5
          row-end-7
          flex
          flex-row
          items-center
          justify-evenly
          relative
          xl:col-start-4
          lg:col-start-3
          md:col-start-2
    "
    >
      <div className="">
        <ChatBubble></ChatBubble>
      </div>
      <div
        className="
          flex
          flex-row
          items-center
          justify-center
          text-light
          gap-x-2
          "
      >
        <section
          className="
          flex
          flex-col
          items-center
          justify-center
      "
        >
          <Image
            src={profilePic}
            width={200}
            height={200}
            alt="profile image"
          />
          <h3 className="text-medium">Software Engineer</h3>
        </section>
        <section
          className="
      flex
      flex-col
      gap-5
      "
        >
          <a href="https://github.com/HarryPdot" target="_blank">
            <GitHub className="text-large hover:text-blue-50"></GitHub>
          </a>
          <a
            href="https://www.linkedin.com/in/harry-pham-developer/"
            target="_blank"
          >
            <LinkedIn className="text-large hover:text-blue-50"></LinkedIn>
          </a>
          <a href="https://www.instagram.com/harryphamdev/" target="_blank">
            <Instagram className="text-large hover:text-blue-50"></Instagram>
          </a>
        </section>
      </div>
    </Container>
  );
};

export { StatusBar };
