const ProjectModal = () => {
  return (
    <section>
      {open ? (
        <section className="w-full h-screen bg-black absolute">
          <button onClick={() => handleClose()}>close</button>
          <div>{selectProject.name}</div>
        </section>
      ) : null}
    </section>
  );
};

export { ProjectModal };
