import './App.css';
import About from './components/about/About';
import Blogs from './components/blog/Blogs';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Portfolio from './components/porfolio/Portfolio';
import Pricing from './components/pricing/Pricing';
import Resume from './components/resume/Resume';
import Services from './components/services/Services';
import Sidebar from './components/sidebar/Sidebar';
import Testionmonials from './components/testimonials/Testionmonials';
import { ThemeProvider } from './context/ThemeProvider';
function App() {
  return (
    <ThemeProvider>
      <div>
        <Sidebar></Sidebar>
        <main className="main">
          <Home></Home>
          <About></About>
          <Services></Services>
          <Resume></Resume>
          <Portfolio></Portfolio>
          <Pricing></Pricing>
          <Testionmonials></Testionmonials>
          <Blogs></Blogs>
          <Contact></Contact>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
