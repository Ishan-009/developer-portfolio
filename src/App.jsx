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
function App() {
  return (
    <div>
      <Sidebar></Sidebar>
      <main className="main">
        <Home></Home>
        <About></About>
        <Services></Services>
        <Resume></Resume>
        <Portfolio></Portfolio>
        <Pricing></Pricing>
        <Contact></Contact>
        <Testionmonials></Testionmonials>
        <Blogs></Blogs>
      </main>
    </div>
  );
}

export default App;
