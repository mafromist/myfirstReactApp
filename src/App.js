import logo from './logo.svg';
import './App.css';

//THIS IS FUNDEMANTAL COMPONENT EXAMPLE

const Email = (props) => {
  return (
    <div class="linkCont">
      <a href={props.email}>{props.email}</a>
    </div>
  )
}

const Pet = (props) => {
  return (
    <div class="personCont">
      <h2>My pet's name is {props.petName}</h2>
    </div>
  )
}


const Person = (props) => {
  return (
    <div class="personCont">
      <h2>My name is {props.name} and I am {props.age} year(s) old.</h2>
      <Pet petName = {props.petName} />
      <Email email ={props.email} />
    </div>
  )
}


function App() {
  return (
    <div className = "App">
      <h1 class="projectName">My First React Project</h1>
      <Person name="Muge Alev" age = {29} petName="Toni" email="muge@mamind.com"/>
      <Person name="Dan" age = {36} petName="Patty" email="dan@mamind.com"/>
      <Person name="Sinead" age = {14} petName="Bubbles" email="sinead@mamind.com"/>
    </div>
  );
}

export default App;


/* 
/// This is the CLASS COMPONENT version you could write in this way as well

class App extends React.Component {
  render() {
    return (
      <div className = "App">
      <h1>My First React Project</h1>
    </div>
    )
  }
}

export default App; */

/*

const Topics = () => {
  return (
    <div class="topicCont">
      <h2>The technologies I can work with</h2>
      <div class="topics">
        <h3>HTML</h3>
        <h3>CSS</h3>
        <h3>JavaScript</h3>
        <h3>React</h3>
        <h3>Git</h3>
      </div>
    </div>
  )
}



const Links = () => {
  return (
    <div class="linkCont">
      <h1>Here are some links you can check out my works and email to reach me</h1>
      <div class="links">
        <h3> <a href="https://github.com/mafromist">My Github Profile</a></h3>
        <h3> <a href="https://linkedin.com/in/mugealev">My Linkedin Profile</a></h3>
        <h3> <a href="mailto:alev.muge@gmail.com">Send an email to me</a></h3>
      </div>
    </div>
  )
}

*/
