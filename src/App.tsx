import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Reveal } from "./components/Reveal";

function App() {

  return (
    <div className="bg-slate-50 text-gray-900">
      
      <Header />

<Reveal>
      <Hero />
</Reveal>
<Reveal>
      <About />
</Reveal>
<Reveal>
      <Projects />
</Reveal>
<Reveal>
      <Contact />
</Reveal>
    </div>
  );
}


export default App;