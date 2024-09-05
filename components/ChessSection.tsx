import { ReactNode } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Section from "@/components/Section";
import ProjectDiv from "@/components/ProjectDiv";

interface Props {
  description: ReactNode;
  visualization?: string;
  code: string;
}

const ChessSection = ({ description, visualization, code }: Props) => {
  return (
    <Section className="grid lg:grid-rows-3 lg:grid-cols-2 lg:grid-flow-col gap-4 p-4 flex-col">
      <ProjectDiv classname="lg:row-span-3 p-2">{description}</ProjectDiv>
      <ProjectDiv classname="lg:row-span-2 lg:col-span-2 lg:h-full h-[66vh] overflow-hidden">
        {visualization ? (
          <iframe className="w-full h-full" src={visualization} />
        ) : (
          <object
            className="w-full h-full"
            id="pdfObject"
            data="/Visualiztoin 3.pdf"
            type="application/pdf"
          >
            <p>
              Unable to display PDF file.
              <a href="Visualization 3.pdf">
                {" "}
                <b>Download</b>
              </a>{" "}
              instead.
            </p>
          </object>
        )}
      </ProjectDiv>
      <ProjectDiv classname="lg:col-span-2 overflow-hidden flex align-center bg-[#f8f8ff]">
        <div className="max-h-[33vh] w-full overflow-scroll">
          <SyntaxHighlighter language="r" style={docco}>
            {code}
          </SyntaxHighlighter>
        </div>
      </ProjectDiv>
    </Section>
  );
};

export default ChessSection;
