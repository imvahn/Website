import { ReactNode } from "react";

interface Props {
  classname: string;
  children?: ReactNode;
  style?: any;
}

const ProjectDiv = ({ classname, children }: Props) => {
  return (
    <div className={`rounded-xl border-2 border-lime-600 drop-shadow-lg hover:translate-y-0.5 hover:ease-in-out duration-150 ${classname}`}>
      {children}
    </div>
  );
};

export default ProjectDiv;
