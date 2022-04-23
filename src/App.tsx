import "./App.css";
import BackgroundContainer from "./components/BackgroundContainer";
import GetInTouch from "./components/GetInTouch";
import Header from "./components/Header";
import ProjectList from "./components/Projects/ProjectList";
import Section from "./components/Section";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-slate-800">
      <Header />
      <Section title="About me" index={0}>
        <p>
          Hello my name is André Garcia, i am a software developer from Portugal
          with industry experience building web applications, back-end services
          and API's using .Net Core, Javascript, Angular, Vue.js and React.
        </p>
        <p>
          Always looking forward to find and learn the best tool for the job at
          hand, and the oportunity to take on new and interesting challenges.
        </p>
      </Section>
      <Section title="Skills" index={1}>
        <Skills />
      </Section>
      <Section title="Projects" index={2}>
        <ProjectList />
      </Section>
      <Section title="Get in touch" index={3}>
        <GetInTouch />
      </Section>
    </div>
  );
}

export default App;
