import Link from "../components/Link";
import Section from "../components/Section";
import ProjectPanels from "../components/ProjectPanels";

const linkItems = [
  { text: "LinkedIn", link: "https://linkedin.com/in/vahn" },
  { text: "GitHub", link: "https://github.com/imvahn/" },
  { text: "Resume", link: "/Curriculum Vitae.pdf" },
];

const resumeItems = [
  {
    company: "Wasabi Technologies",
    position: "Engineer Intern",
    date: "May 2024 - August 2024",
    text: [
      "Built a highly modular and scalable RESTful API that displayed alerts and metrics for development level resources in Wasabi's datacenters around the world.",
      "Created tickets and documentation in accordance with principles of agile software development",
    ],
    tools:
      "Golang, Typescript, React.js, Vite, Swagger 2.0, PostgreSQL, Redis, Ansible, Terraform, Docker, Kubernetes, Atlassian Jira, Atlassian Confluence, Prometheus, Alertmanager, Sonatype Nexus Repository, Grafana, CEPH",
  },
  {
    company: "Wesleyan Programming Languages and Privacy Lab",
    position: "Researcher",
    date: "January 2024 - May 2024",
    text: [
      "Evaluated detection, approaches and techniques of web-based browser fingerprinting.",
    ],
    tools: "Python, OpenWPM",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Section
        className="flex flex-col items-center justify-center pb-24"
        id="home"
      >
        <div className="text-left">
          <h1 className="text-7xl hover:translate-x-1 hover:ease-in-out duration-150">Vahn Kessler</h1>
          <h2 className="text-3xl mb-1 hover:translate-y-0.5 hover:ease-in-out duration-150">
            Computer Science, Mathematics, Music Triple Major at Wesleyan
            University
          </h2>
          <h2 className="text-3xl mb-1 hover:-translate-x-1 hover:ease-in-out duration-150">Full Stack Developer</h2>
          <h2 className="text-3xl mb-1 hover:translate-y-0.5 hover:ease-in-out duration-150">Musician</h2>
          <div className="flex flex-row">
            {linkItems.map((item, index) => (
              <Link link={item.link} key={index}>
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </Section>
      <Section
        className="flex flex-col gap-20 items-center justify-center"
        id="experience"
      >
        {resumeItems.map((item, index) => (
          <div className="text-left w-3/4" key={index}>
            <h1 className="text-4xl hover:translate-x-0.5 hover:ease-in-out duration-150">{item.company}</h1>
            <h2 className="text-base hover:-translate-y-0.5 hover:ease-in-out duration-150">{item.date.toUpperCase()}</h2>
            <h2 className="text-3xl mb-2 hover:translate-x-0.5 hover:ease-in-out duration-150">{item.position}</h2>
            {item.text.map((t, i) => (
              <p className="text-xl hover:translate-y-0.5 hover:ease-in-out duration-150" key={i}>
                {t}
              </p>
            ))}
            <div className="mb-2"></div>
            <p className="text-xl hover:translate-y-0.5 hover:ease-in-out duration-150">
              <b>Tools/Software Used: </b>
              {item.tools}
            </p>
          </div>
        ))}
      </Section>
      <Section
        className="relative flex flex-col gap-20 items-center justify-center"
        id="projects"
      >
        <ProjectPanels />
      </Section>
    </main>
  );
}
