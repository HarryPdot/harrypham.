import Image from "next/image";
import { Container } from "../Resuables/Container/Container";
import profilePic from "../../Assets/Images/tempharry.png";

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
      <section>icon</section>
    </Container>
  );
};

export { StatusBar };
