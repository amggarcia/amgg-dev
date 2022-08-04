import type { NextPage } from "next";
import Section from "../components/Section";
import SkillsContainer from "../components/SkillsContainer";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-700 h-full">
      <header
        className="flex flex-col items-center h-96 justify-center  bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(0deg,rgba(46,49,65,.8),rgba(46,49,65,.8)),url(/bg.webp)`,
        }}
      >
        <div className="container mx-auto px-8 w-full text-white text-3xl font-bold uppercase ">
          <h1 className="pb-4 mb-4 border-gray-500 border-b-2">André Garcia</h1>
          <span className="font-light text-lg">Full stack developper</span>
        </div>
      </header>
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
        <Section index={1} title="skills">
          <SkillsContainer size={60}></SkillsContainer>
        </Section>
        <section>Skills</section>
        <section>Skills</section>
        <section>Skills</section>
        <section>Skills</section>
        <section>Skills</section>
        <section>Skills</section>
        <section>Skills</section>
        <section>Skills</section>
        <section>Skills</section>
        <section>Skills</section>
        <section>Skills</section>
        <section>Skills</section>
        <section>Skills</section>
        <section>Skills</section>
        <section>Skills</section>
        <section>Skills</section>
        <section>Projects</section>
        <section>Get in touch</section>
      </main>
    </div>
  );
};

export default Home;
