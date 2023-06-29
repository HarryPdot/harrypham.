import { useState } from "react";

const CommandLine = ({ selection, setSelection, open, setOpen }: any) => {
  const [hover, setHover] = useState<String>("");
  const [projectHover, setProjectHover] = useState<String>("");

  const handleHover = (option: String) => {
    setHover(option);
  };

  const handleSelect = () => {
    setSelection(hover);
  };

  const handleProject = (option: String) => {
    setProjectHover(option);
  };

  const handleOpen = () => {
    setOpen(false);
  };

  const options = ["About", "Projects", "Credit"];
  return (
    <section
      className="
      text-light
      col-start-1
      row-start-5
      row-end-7
      p-5
      w-5/6
      xl:col-end-4
      lg:col-end-5
      md:hidden
      sm:hidden
      lg:block
      xl:block
      max-sm:hidden
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
        gap-4
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
                onMouseOver={() => handleHover(option)}
                onClick={() => {
                  handleSelect();
                  handleOpen();
                }}
                className={
                  selection === option
                    ? " text-white p-1 rounded-r-3xl bg-gradient-radial from-[#744F23] to-80% to-[#AF7728] border-brightOrange border-2 w-full text-center cursor-pointer"
                    : " text-white p-1 rounded-r-3xl bg-gradient-to-tr to-70% from-[#744F23] to-black hover:bg-gradient-radial hover:from-[#744F23] hover:to-80% hover:to-[#AF7728] hover:border-brightOrange hover:border-2 hover:w-full text-center w-5/6 cursor-pointer "
                }
              >
                {option}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { CommandLine };
