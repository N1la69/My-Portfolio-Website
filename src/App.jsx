import Navbar from "./components/Navbar";
import HeroSection from "./components/Sections/HeroSection";
import ProjectsSection from "./components/Sections/ProjectsSection";
import SkillsSection from "./components/Sections/SkillsSection";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div className="">
        <Navbar />
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
      </div>
    </ThemeProvider>
  );
};

export default App;
