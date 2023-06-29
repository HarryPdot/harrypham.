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
      <div className="w-full h-full absolute bg-black opacity-50"></div>
      <section className="w-5/6 h-5/6 bg-darkMode absolute border-4 border-light">
        <button onClick={() => handleClose()}>close</button>
        <div>{selectProject.name}</div>
      </section>
    </section>
  );
};

export { ProjectModal };
