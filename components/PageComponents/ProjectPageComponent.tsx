import type { Project } from "../../staticData/ProjectData";
import BackgroundImageContainer from "../BackgroundImageContainer";
import Header from "../Header";
import Link from "../Link";
import Section from "../Section";
import Socials from "../Socials";
import ProjectSectionParagraphs from "./ProjectSectionParagraphs";

export interface Props {
  project: Project;
}

export default function ProjectPageComponent({ project }: Props) {
  return (
    <div>
      <BackgroundImageContainer>
        <Header primaryTitle={project.title}></Header>
      </BackgroundImageContainer>
      <main>
        {project.sections?.map((section, index) => {
          return (
            <Section index={index} key={index} title={section.sectionTitle}>
              <ProjectSectionParagraphs
                paragraphs={section.paragraphs}
              ></ProjectSectionParagraphs>
              {index == project.sections?.length - 1 && (
                <div className="flex mt-12 justify-center">
                  <Link href={"/#projectList"} title="Other Projects"></Link>
                </div>
              )}
            </Section>
          );
        })}

        <BackgroundImageContainer centerBackground={false}>
          <Section
            index={project.sections.length + 1 || 0}
            noBackground={true}
            title="Get in touch"
          >
            <Socials></Socials>
          </Section>
        </BackgroundImageContainer>
      </main>
    </div>
  );
}
