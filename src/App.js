import React from 'react';
import './App.css';
import pythonIMG from './files/pythonIMG.png' 
import postgresIMG from './files/postgresqlIMG.png'
import expressIMG from './files/expressIMG.png'
import reduxIMG from './files/reduxIMG.png'
import es6IMG from './files/es6IMG.png'
import html5IMG from './files/html5IMG.png'
import css3IMG from './files/css3IMG.png'
import lessIMG from './files/lessIMG.png'
import nodeIMG from './files/nodeIMG.png'
import reactIMG from './files/reactIMG.jpg'

function App() {

  const skillsArray = [
    {
      language:"React.JS",
      image: reactIMG,
    }, 
    {
      language:"Node",
      image: nodeIMG,
    }, 
    {
      language:"Express",
      image: expressIMG,
    }, 
    {
      language:"PostgreSQL",
      image: postgresIMG,
    }, 
    {
      language:"Python3",
      image: pythonIMG,
    }, 
    {
      language:"Redux",
      image: reduxIMG,
    }, 
    {
      language:"Javascript ES6+",
      image: es6IMG,
    }, 
    {
      language:"HTML 5",
      image: html5IMG,
    },
    {
      language:"CSS 3",
      image: css3IMG,
    },
    {
      language:"LESS",
      image: lessIMG,
    },
  ]
  
  const projectsArray = [
    {
      name:"",
      projectIMG:"",
      sampleURL:"",
      description:""
    },
    {
      name:"",
      projectIMG:"",
      sampleURL:"",
      description:""
    },
    {
      name:"",
      projectIMG:"",
      sampleURL:"",
      description:""
    },
    {
      name:"",
      projectIMG:"",
      sampleURL:"",
      description:""
    },
    {
      name:"",
      projectIMG:"",
      sampleURL:"",
      description:""
    },
  ]

  return (
    <div className="container">

      <header className="nav">
        <h1 className="name">Cale A. Haug</h1>
        <a className="headerLink" href="#skill">Skills</a>
        <a className="headerLink" href="#project">Projects</a>
        <a className="headerLink" href="#contact">Contact</a>
      </header>

      <section className="intro">
        <h2>Hello There, I'm Cale.</h2>
        <h3>I'm a Full Stack Developer.</h3>
        <h3>Scottsdale, Arizona 🤠🌵</h3>
      </section>

      <section className="skills">
        <a name="skill"></a>
        {skillsArray.map((skill) => {
          return (
            <div className="individualSkill">
              <img className="skillImage" src={skill.image} title={skill.language} alt={skill.language} />
              <h4>{skill.language}</h4>
            </div>
          )
        })}
      </section>

      <section className="projects">
        <a name="project"></a>

      </section>

      <section className="contacts">
        <a name="contact"></a>
        <form action="mailto:calehaug@live.com" method="GET">
          <label> Subject:
            <input name="subject" type="text" />
          </label>
          <label> Body:
            <textarea name="body"></textarea>
          </label>
          <label> Submit:
            <input type="submit" value="Send" />
          </label>
          <label> Clear Form:
            <button type="reset">Reset</button>
          </label>
        </form>
      </section>
    </div>
  );
}

export default App;
