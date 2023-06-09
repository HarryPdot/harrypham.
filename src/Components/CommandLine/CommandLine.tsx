import { Container } from "../Resuables/Container/Container";
import { useState } from "react";

const CommandLine = () => {
  const [selection, setSelection] = useState<String>("About");
  const [hover, setHover] = useState<String>("");

  const handleHover = (option: String) => {
    setHover(option);
  };

  const handleSelect = () => {
    setSelection(hover);
  };

  const options = ["About", "Projects", "Credit"];
  return (
    <Container
      className="
      text-light
      col-start-1
      col-end-4
      row-start-5
      row-end-7
      pl-4
      pr-4
      w-5/6

      "
    >
      <div
        className="
        text-light
        text-large
      "
      >
        {selection}
      </div>
      <div
        className="
        flex
        flex-row


        justify-between

      "
      >
        <div
          className="
          w-2/3

        "
        >
          {options.map((option, i) => {
            return (
              <div
                key={i}
                className="
            text-white
            p-1
            rounded-r-3xl
            bg-gradient-to-tr
            to-70%
            from-[#744F23]
            to-black
            hover:bg-gradient-radial
            hover:from-[#744F23]
            hover:to-80%
            hover:to-[#AF7728]
            hover:border-brightOrange
            hover:border-2
            hover:w-full
            text-center
            w-5/6
            cursor-pointer
          "
                onMouseOver={() => handleHover(option)}
                onClick={() => handleSelect()}
              >
                {option}
              </div>
            );
          })}
        </div>
        <div
          className="
          w-2/3

        "
        >
          Hello
        </div>
      </div>
    </Container>
  );
};

export { CommandLine };
