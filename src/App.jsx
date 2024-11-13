
import Home from './components/Home.jsx'
import './App.css'
import AboutMe from './components/AboutMe.jsx'
import Tools from './components/Tools.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Resume from './components/Resume.jsx'

function App() {

  return (
    <>
      <div className="flex-grow flex flex-col ">
        <Home/>
        <AboutMe/>
        <Tools/>
        <Resume />
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}

export default App
