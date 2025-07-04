import Navbar from "./components/Navbar";
import HeroSection from "./components/Sections/HeroSection";
import SkillsSection from "./components/Sections/SkillsSection";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div className="">
        <Navbar />
        <HeroSection />
        <SkillsSection />
      </div>
    </ThemeProvider>
  );
};

export default App;
