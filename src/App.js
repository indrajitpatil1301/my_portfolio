import React from "react";
import Header from "./components/Header";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/About";
import TechnologyPage from "./components/TechnologyPage";
import Contact from "./components/Contact";
import "./App.css";
import Projects from "./components/Projects";
// import TechnologyPage from "./components/TechnologyPage";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Element name="portfolio">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <HeroSection />
          </motion.div>
        </Element>
        <Element name="aboutme">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <AboutMe />
          </motion.div>
        </Element>
        <Element name="technologies">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div>
              <TechnologyPage />
            </div>
          </motion.div>
        </Element>
        <Element name="blog">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* My Blog Section Content */}
          </motion.div>
        </Element>
        <Element name="projects">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
          <Projects />
            {/* Reviews Section Content */}
          </motion.div>
        </Element>
        <Element name="contactme">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Contact Me Section Content */}
            <div>
              <Contact />
            </div>
          </motion.div>
        </Element>
      </main>
    </div>
  );
}

export default App;
