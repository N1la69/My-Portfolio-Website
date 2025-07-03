import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div className="text-2xl text-red-400">App</div>;
    </ThemeProvider>
  );
};

export default App;
