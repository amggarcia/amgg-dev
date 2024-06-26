import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import BackgroundImageContainer from "../components/BackgroundImageContainer";
import Header from "../components/Header";
import ProjectList from "../components/Projects/ProjectList";
import Section from "../components/Section";
import SkillsContainer from "../components/Skills/SkillsContainer";
import Socials from "../components/Socials";
import { Projects, Project } from "../staticData/ProjectData";
import Head from "next/head";
interface PageProps {
  projects: Project[];
}

const Home = ({ projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>André Garcia Full Stack Developer</title>
        <meta
          property="og:title"
          key="title"
          content="André Garcia Full Stack Developer"
        />
        <meta
          property="og:description"
          key="description"
          content="My name is André Garcia, i am a Software Developer from
            Portugal with industry experience building web applications,
            back-end services and API's using Vue.js, React, .Net Core and
            Typescript."
        />
      </Head>
      <BackgroundImageContainer>
        <Header
          primaryTitle="André Garcia"
          subtitle="Full Stack Developper"
        ></Header>
      </BackgroundImageContainer>
      <main>
        <Section index={0} title="About me">
          <p className="text-white font-thin text-sm">
            Hello my name is André Garcia, i am a Software Developer from
            Portugal with industry experience building web applications,
            back-end services and API&apos;s using Vue.js, React, .Net Core and
            Typescript.
          </p>
          <p className="text-white font-thin text-sm mt-4">
            I&apos;m always looking forward to find and learn the best tool for
            the job at hand, and the oportunity to take on new and interesting
            challenges.
          </p>
        </Section>
        <Section index={1} title="Skills">
          <SkillsContainer size={60}></SkillsContainer>
        </Section>
        <Section sectionId="projectList" index={2} title="Projects">
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
          <Section index={4} noBackground={true} title="Get in touch">
            <Socials></Socials>
          </Section>
        </BackgroundImageContainer>
      </main>
      <div className="hidden">24042024</div>
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
