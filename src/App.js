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
import knexIMG from './files/knexIMG.png'
import gitIMG from './files/gitIMG.png'
import wowoIMG from './files/wowoIMG.jpg'
import blackballIMG from './files/blackballIMG.png'
import libIMG from './files/libIMG.png'
import givingTuesdayIMG from './files/givingTuesdayIMG.PNG'
import lambdaIMG from './files/lambda.png'

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
      language:"Git & GitHub",
      image: gitIMG,
    },
    {
      language:"PostgreSQL",
      image: postgresIMG,
    }, 
    {
      language:"Leaner Style Sheets - LESS",
      image: lessIMG,
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
      language:"Knex.js",
      image: knexIMG,
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
  ]
  
  const projectsArray = [
    {
      name:"Link-In.Bio",
      projectIMG:libIMG,
      sampleURL:"https://link-in.bio/cah",
      stack:"React/Redux | Node/Express/PostgreSQL | Netlify | Heroku",
      description:"• I solely designed and coded this project to address the less than optimal strategies employed by companies, social media marketers, and other internet users in linking, tracking & monetizing content.   \n \n• Link-In.bio is a website where someone can register to create their own publicly hosted pages of lists of hyperlinks with and without photos for use with social media accounts.  \n \n• Pageviews of a list are recorded, and clickthroughs data from a link is scraped by the server.  \n \n• User registration is temporarily halted as the Stripe Subscription model is built out, and additional options like multiple lists, user-specific fonts, and color-customization options are yet in development.  \n \n• The plan is to grow this idea into a full-fledged, monetized SaaS company.",
      github:"https://github.com/cahaug/link-in.bio"
    },
    {
      name:"Blackball.co",
      projectIMG:blackballIMG,
      sampleURL:"https://blackball.co/",
      stack:"React | Python/Flask Node/Express/PostgreSQL | Netlify | Heroku",
      description:"• An in-development blockchain solution to tracking law enforcement civil rights abuses.  Verified abuse of power complaints would be added to a blockchain, which may be freely searched by anyone. \n \n• The idea is that a police department looking to hire new officers could search their applicant's name in the database to ensure they don't have histories of abusive behavior.  \n \n• Alternatively, a civil rights attorney might search the arresting officers in a case, and be pointed to past of instances in which the arresting officers may have acted inappropriately. This could potentially provide compelling character evidence against an officer in support of a beleaguered civilian party.  \n \n• A Blackball for the Blue Wall of Silence.",
      github:"https://github.com/cahaug/BlackBall"
    },
    {
      name:"Wo-Wo: Wax On Wax Off",
      projectIMG:wowoIMG,
      sampleURL:"https://wowo-app2.netlify.app/",
      stack:"React/Redux | Node/Express/PostgreSQL | Netlify | Heroku",
      description:"• A Lambda School Project. Given the directive to build the Uber of Car Washing, a team of five implemented an action plan, developed release canvases, and built Wo-Wo from nothing.  \n \n• I wrote the entire backend on this project so I am proud of that but I am most proud of my instant quote generator, which has over 1000 vehicles to choose from, all with individually calculated prices. \n \n• Check it out on the homepage, under the Instant Quote Button.",
      github:"https://github.com/cahaug/wowo-be"
    },
    {
      name:"Giving-Tuesday.net",
      projectIMG:givingTuesdayIMG,
      sampleURL:"https://giving-tuesday.net/",
      stack:"Squarespace Builder",
      description:"• A work-in-progress website designed to inspire people to donate to reputable and efficient charitable organizations that are near and dear to my heart. \n \n• I built this for Giving-Tuesday 2018 but haven't got around to rewriting it yet, since really learning how to code.  \n \n• Creating this website inspired me to look into web development and coding again for the first time since high school.",
      github:"https://github.com/cahaug/portfolio-v2"
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
        <div className="introContainer">
          <h3>Hello There, I'm Cale.</h3>
          <h3>I'm a Full Stack Developer.</h3>
          <h3>🌵🤠Currently in: Scottsdale, Arizona 🤠🌵</h3>
        </div>
        <a name="skill"></a>
      </section>

      <section className="skillContainer">
        <h2>Technologies Used in my Projects:</h2>
        <br /><hr />
        <div className="skills">
          {skillsArray.map((skill) => {
            return (
              <div className="individualSkill">
                <img className="skillImage" src={skill.image} title={skill.language} alt={skill.language} />
                {/* <h4>{skill.language}</h4> */}
              </div>
            )
          })}
          <a name="project"></a>
        </div>
      </section>

      <hr /><br />
      
      <section className="projectsContainer">
        <h3>Completed and Ongoing Projects:</h3>
        <div className="projects">
          {projectsArray.map((project) => {
            return (
              <div className="individualProject">
                <a href={project.sampleURL} alt={project.name}>
                  <img className="projectImage" src={project.projectIMG} title={project.name} alt={project.name} />
                </a>
                <hr />
                <h4 className="projectName">{project.name}</h4>
                <hr />
                <h5 className="projectStack">{project.stack}</h5>
                <hr />
                <h5 className="projectURL"><a href={project.sampleURL} alt={project.name}>{project.sampleURL}</a></h5>
                <hr />
                <a href={project.github} alt={project.github}><button>View on GitHub</button></a>
                <hr />
                <h6 className="projectDescription">{project.description}</h6>
              </div>
            )
          })}
        </div>
      </section>
     
      <section className="contactContainer">
          <a name="contact"></a>
        <div className="contacts">
          <h3>Want to Talk Web Development?</h3>
          <h3>Contact Me!</h3>
          <br /><hr /> 
          <form action="mailto:calehaug@live.com" method="GET">
            <label>Subject: <br />
              <input name="subject" type="text" />
            </label>
            <label>Message: <br />
              <textarea name="body"></textarea>
            </label>
            <label>Submit: <br />
              <input className="button" type="submit" value="Send" />
            </label>
            <label>Clear Form: <br /> 
              <button className="button" type="reset">Reset</button>
            </label>
          </form>
          <hr /><br />
          <div><a href="https://www.youracclaim.com/badges/e5aae76f-6c66-43b9-a275-a3bd1ea324ac/public_url"><img className="lambdaIMG" src={lambdaIMG} alt="View my Badge on Acclaim by Credly" title="View my Badge on Acclaim by Credly" /></a></div>
          
          <h3>External Links:</h3>
          <div className="socialLinks">
            <a href="https://www.linkedin.com/in/calehaug/" alt="My LinkedIn"><h4>LinkedIn</h4></a>
            <a href="https://twitter.com/Cale_Haug" alt="My Twitter"><h4>Twitter</h4></a>
            <a href="https://link-in.bio/cah" alt="My Link In Bio"><h4>Link-In.Bio</h4></a>
            <a href="https://github.com/cahaug" alt="My GitHub"><h4>GitHub</h4></a>
          </div>
          <hr /><br />
        <h3>©{new Date().getFullYear()} - Built with Tender Love and Care by Cale A. Haug</h3>
        </div>
      </section>
    </div>
  );
}

export default App;
