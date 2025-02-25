
import './App.css'
import { ThemeProvider } from "./context/ThemeContext";
import ToggleTheme from "./Components/ToggleTheme";
import QuizPage from "./Pages/QuizPage";

function App() {
  return (
    <ThemeProvider>
      <ToggleTheme />
      <QuizPage />
    </ThemeProvider>
  );
}

export default App;
