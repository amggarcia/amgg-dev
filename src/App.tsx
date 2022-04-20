import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <div>Icon Here</div>
        <h1 className="text-5xl font-bold underline">André Garcia</h1>
        <p>Full Stack Developer</p>
      </div>

      <section>
        <h1>About me</h1>
        <p>
          Hello my name is André Garcia, i am a software developer from Portugal
          with industry experience building web applications, back-end services
          and API's using .Net Core, Javascript, Angular, Vue.js and React.
        </p>
        <p>
          Always looking forward to find and learn the best tool for the job at
          hand, and the oportunity to take on new and interesting challenges.
        </p>
      </section>
      <section>
        <h1>Skills</h1>
        <ul>
          <li>
            <span>Technologies</span>
            <span>C#,Typescript,Javascript</span>
          </li>
          <li>
            <span>Front-end</span>
            <span>Vue.js, React, .Net Core MVC</span>
          </li>
          <li>
            <span>Other</span>
            <span>Azure Cloud Services, CI/CD, SQL/PLSQL</span>
          </li>
          <li>
            <span>Languages</span>
            <span>Portuguese, English</span>
          </li>
        </ul>
      </section>
      <section>
        <h1>Projects</h1>
        <div>
          <h2>Project Title</h2>
          <span>Project Descriptions</span>
          <div>button</div>
        </div>
        <div>
          <h2>Project Title</h2>
          <span>Project Descriptions</span>
          <div>button</div>
        </div>
        <div>
          <h2>Project Title</h2>
          <span>Project Descriptions</span>
          <div>button</div>
        </div>
        <div>
          <h2>Project Title</h2>
          <span>Project Descriptions</span>
          <div>button</div>
        </div>
        <div>
          <h2>Project Title</h2>
          <span>Project Descriptions</span>
          <div>button</div>
        </div>
        <div>
          <h2>Project Title</h2>
          <span>Project Descriptions</span>
          <div>button</div>
        </div>
      </section>
      <section>
        <h1>Get In Touch</h1>
        <div>
          <div>icon</div>
          <a href="github">url</a>
        </div>
        <div>
          <div>icon</div>
          <a href="linkedin">url</a>
        </div>
        <div>
          <div>icon</div>
          <a href="stackoverflow">url</a>
        </div>
        <div>
          <div>icon</div>
          <a href="mailto">url</a>
        </div>
      </section>
    </div>
  );
}

export default App;
