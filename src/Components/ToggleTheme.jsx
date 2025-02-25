import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ToggleTheme = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 bg-gray-200 dark:bg-futuristicBlue p-2 rounded-full shadow-lg transition"
    >
      {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-blue-500" />}
    </button>
  );
};

export default ToggleTheme;
