import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Portfolio from './components/porfolio/Portfolio';
import Resume from './components/resume/Resume';
import Skills from './components/services/Skills';
import Sidebar from './components/sidebar/Sidebar';
import Testionmonials from './components/testimonials/Testionmonials';
import { ThemeProvider } from './context/ThemeContext';
function App() {
  return (
    <ThemeProvider>
      <div>
        <Sidebar></Sidebar>
        <main className="main">
          <Home></Home>
          <About></About>
          <Skills></Skills>
          <Resume></Resume>
          <Portfolio></Portfolio>
          {/* <Pricing></Pricing> */}
          <Testionmonials></Testionmonials>
          {/* <Blogs></Blogs> */}
          <Contact></Contact>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
