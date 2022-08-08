import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import BackgroundImageContainer from "../components/BackgroundImageContainer";
import ProjectList from "../components/ProjectList";
import Section from "../components/Section";
import SkillsContainer from "../components/SkillsContainer";
import Socials from "../components/Socials";
import { Projects, Project } from "../staticData/ProjectData";

interface PageProps {
  projects: Project[];
}

const Home = ({ projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="bg-slate-700 h-full">
      <BackgroundImageContainer>
        <header className="flex flex-col items-center h-96 justify-center">
          <div className="container mx-auto px-8 lg:px-24 w-full text-white text-3xl font-bold uppercase ">
            <h1 className="pb-4 mb-4 border-gray-500 border-b-2">
              André Garcia
            </h1>
            <span className="font-light text-lg">Full stack developper</span>
          </div>
        </header>
      </BackgroundImageContainer>
      <main>
        <Section index={0} title="About me">
          <p className="text-white font-thin text-sm">
            Hello my name is André Garcia, i am a software developer from
            Portugal with industry experience building web applications,
            back-end services and API's using .Net Core, Javascript, Angular,
            Vue.js and React
          </p>
          <p className="text-white font-thin text-sm mt-4">
            I'm always looking forward to find and learn the best tool for the
            job at hand, and the oportunity to take on new and interesting
            challenges.
          </p>
        </Section>
        <Section index={1} title="Skills">
          <SkillsContainer size={60}></SkillsContainer>
        </Section>
        <Section index={2} title="Projects">
          <p className="text-white font-thin text-sm">
            These are some of the projects in which i had the oportunity to work
            on, some professionaly others being personal side-projects that you
            might find on my github
          </p>
          <p className="text-white font-thin text-sm mt-4">
            You can find more detailed information for each project, such as
            technologies used and noteworthy aspects in the project details
            section.
          </p>
          <ProjectList projects={projects}></ProjectList>
        </Section>
        <BackgroundImageContainer centerBackground={false}>
          <Section index={3} noBackground={true} title="Get in touch">
            <Socials></Socials>
          </Section>
        </BackgroundImageContainer>
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  return {
    props: {
      projects: Projects,
    },
  };
};
