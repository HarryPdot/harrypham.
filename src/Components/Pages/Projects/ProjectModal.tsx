const ProjectModal = ({
  open,
  setOpen,
  selectProject,
  setSelectProject,
}: any) => {
  const handleClose = () => {
    setOpen(false);
    setSelectProject([]);
  };
  return (
    <section className="w-full h-full absolute flex justify-center items-center">
      <div className="w-full h-full absolute bg-darkMode opacity-50 blur-sm"></div>
      <section className="w-5/6 h-5/6 bg-darkMode border-4 border-light absolute grid-rows-5 grid-cols-5 grid">
        <div className="col-start-5 col-end-6 row-start-1 row-end-2 h-fit w-full flex justify-end pr-2 pt-2">
          <button
            onClick={() => handleClose()}
            className="border border-light px-2"
          >
            close
          </button>
        </div>
        <div className="col-start-1 col-end-4 row-start-1-row-end-2 flex items-center">
          <a
            href={selectProject.projectUrl}
            target="_blank"
            className="text-xl px-5"
          >
            {selectProject.name}🔗
          </a>
        </div>
        <picture className="row-start-2 row-end-5 col-start-1 col-end-4 flex justify-center items-center pl-2">
          <img src={selectProject.image} alt="project image" />
        </picture>
        <section className="row-start-3 row-end-6 col-start-3 col-end-6 flex justify-center items-center border-2 border-screen bg-darkMode mb-2 mr-2 p-4">
          {selectProject.description}
        </section>
      </section>
    </section>
  );
};

export { ProjectModal };
