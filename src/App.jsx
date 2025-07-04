import Navbar from "./components/Navbar";
import HeroSection from "./components/Sections/HeroSection";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <HeroSection />
    </ThemeProvider>
  );
};

export default App;
