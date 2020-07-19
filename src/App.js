import React from 'react';
import './App.css';
import {} from './files'

function App() {

  const skills = [
    {
      language:"React.JS",
      img: {},
    }, 
    {
      language:"Node",
      img: {},
    }, 
    {
      language:"Express",
      img: {},
    }, 
    {
      language:"PostgreSQL",
      img: {},
    }, 
    {
      language:"Python3",
      img: {},
    }, 
    {
      language:"Redux",
      img: {},
    }, 
    {
      language:"",
      img: {},
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
          <input type="submit" value="Send" />
        </form>
      </section>
    </div>
  );
}

export default App;
