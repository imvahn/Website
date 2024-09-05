import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  link: string;
}

const Link = ({ children, link }: Props) => {
  return (
    <div className="w-fit mr-4">
      <a
        href={link}
        className="group inline-block"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="me-2 mb-2 text-2xl w-auto">
          {children}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
      </a>
    </div>
  );
};

export default Link;
