import { ReactNode } from "react";

interface ContainerProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

const Container = (props: ContainerProps) => {
  const { id, children, className } = props;
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
};

export { Container };
