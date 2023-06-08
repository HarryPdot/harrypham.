import Image from "next/image";
import { Container } from "../Resuables/Container/Container";
import profilePic from "../../Assets/Images/tempharry.png";
import { GoMarkGithub as GitHub } from "react-icons/go";
import { SiLinkedin as LinkedIn } from "react-icons/si";
import { BsInstagram as Instagram } from "react-icons/bs";

const StatusBar = () => {
  return (
    <Container
      className="
          col-start-5
          row-start-4
          row-end-6
          flex
          flex-row
          items-center
          justify-center
          text-light
          gap-x-4
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
        <Image src={profilePic} width={200} height={200} alt="profile image" />
        <h3>Software Engineer</h3>
      </section>
      <section
        className="
      flex
      flex-col
      gap-5
      "
      >
        <a href="https://google.com" target="_blank">
          <GitHub className="text-3xl hover:text-blue-50"></GitHub>
        </a>
        <a href="https://google.com" target="_blank">
          <LinkedIn className="text-3xl hover:text-blue-50"></LinkedIn>
        </a>
        <a href="https://google.com" target="_blank">
          <Instagram className="text-3xl hover:text-blue-50"></Instagram>
        </a>
      </section>
    </Container>
  );
};

export { StatusBar };
