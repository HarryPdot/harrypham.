import { ReactNode } from "react";

interface ContainerProps {
  id?: string;
  children: ReactNode;
  className?: string;
  onMouseMove?: ReactNode;
}

const Container = (props: ContainerProps) => {
  const { id, children, className, onMouseMove } = props;
  return (
    <section id={id} className={className} onMouseMove={onMouseMove}>
      {children}
    </section>
  );
};

export { Container };
