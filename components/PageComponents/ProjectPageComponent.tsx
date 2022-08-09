import type { Project } from "../../staticData/ProjectData";
import BackgroundImageContainer from "../BackgroundImageContainer";
import Header from "../Header";
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
            <Section index={index} title={section.sectionTitle}>
              <ProjectSectionParagraphs
                paragraphs={section.paragraphs}
              ></ProjectSectionParagraphs>
            </Section>
          );
        })}

        <BackgroundImageContainer centerBackground={false}>
          {/* Need to check the section thing on uneven section*/}
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
