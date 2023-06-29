const ProjectModal = ({ open, setOpen, selectProject, setSelectProject }) => {
  const handleClose = () => {
    setOpen(false);
    setSelectProject([]);
  };
  return (
    <section className="w-full h-full bg-black absolute">
      <button onClick={() => handleClose()}>close</button>
      <div>{selectProject.name}</div>
    </section>
  );
};

export { ProjectModal };
