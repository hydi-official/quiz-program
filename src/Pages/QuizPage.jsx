import { useState, useEffect } from "react";
import { questions } from "../data/questions";
import QuizCard from "../Components/QuizCard";
import Results from "../Components/Results";
import { Moon, Sun, Info, Github } from "lucide-react"; // Import Github icon

const QuizPage = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [selected, setSelected] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const handleSelect = (selectedIndex) => {
    setSelected(selectedIndex);
  };

  const handleMark = () => {
    if (selected !== null) {
      const updatedAnswers = [...answers];
      updatedAnswers[index] = selected;
      setAnswers(updatedAnswers);

      if (Array.isArray(questions[index].answer)) {
        const isCorrect =
          selected.length === questions[index].answer.length &&
          selected.every((ans) => questions[index].answer.includes(ans));

        isCorrect ? setScore((prev) => prev + 1) : setMistakes((prev) => prev + 1);
      } else {
        selected === questions[index].answer
          ? setScore((prev) => prev + 1)
          : setMistakes((prev) => prev + 1);
      }
    }
  };

  const handleNext = () => {
    if (index < questions.length - 1) {
      setIndex(index + 1);
      setSelected(null);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
      setSelected(answers[index - 1]);
    }
  };

  const attemptedCount = answers.filter((ans) => ans !== null).length;
  const progress = ((attemptedCount / questions.length) * 100).toFixed(2);
  const passProbability = ((score / questions.length) * 100).toFixed(2);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleGithubClick = () => {
    window.open("https://github.com/hydi-official/advance-software-engineering.git", "_blank"); // Replace with your GitHub repo link
  };

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-black text-gray-900 dark:text-white relative">
      {/* Dark Mode Toggle */}
      <button
        className="fixed top-4 right-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md"
        onClick={toggleDarkMode}
      >
        {darkMode ? <Sun size={20} color="yellow" /> : <Moon size={20} />}
      </button>

      {/* Get Source Button */}
      <button
        className="fixed top-4 right-24 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md flex items-center"
        onClick={handleGithubClick}
      >
        <Github size={20} className="mr-2" />
        Get Source
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 md:w-80 sm:w-4/5 bg-white dark:bg-gray-800 shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 p-4 overflow-y-auto z-50`}
      >
        <h3 className="text-lg font-bold mb-4">Question Tracker</h3>
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
          {questions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIndex(idx);
                setSidebarOpen(false);
              }}
              className={`w-10 h-10 text-sm rounded-full flex items-center justify-center text-white font-bold ${
                answers[idx] !== null ? "bg-green-500" : "bg-gray-400"
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Main Quiz Content */}
      <div className="flex flex-col items-center justify-center w-full px-4 transition-all duration-300">
        {/* Sidebar Toggle Button */}
        <button
          className="fixed top-4 left-4 px-4 py-2 bg-blue-600 text-white rounded-md z-50"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "Close" : "View Questions"}
        </button>

        {/* Disclaimer */}
        <div className="flex items-center bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300 p-3 rounded-md mt-4 max-w-lg shadow-md">
          <Info size={20} className="mr-2" />
          <p className="text-sm">
            These questions are gathered for practice purposes only and do not reflect actual exam questions.
          </p>
        </div>

        {!showResults ? (
          <>
            <div className="w-full max-w-md sm:max-w-sm mb-4 text-center">
              <p className="text-lg font-semibold">
                Question {index + 1} of {questions.length}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Attempted: {attemptedCount} / {questions.length}
              </p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <div className="w-full max-w-md sm:max-w-sm mb-4 text-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md">
              <p className="text-lg font-semibold">Live Score Update</p>
              <div className="flex justify-around mt-2 text-sm">
                <p className="text-green-600">✅ Correct: {score}</p>
                <p className="text-red-600">❌ Wrong: {mistakes}</p>
                <p className="text-blue-500">📊 Pass Probability: {passProbability}%</p>
              </div>
            </div>

            <QuizCard
              question={questions[index]}
              selectedAnswer={selected}
              onSelect={handleSelect}
              markedAnswer={answers[index]}
            />

            <div className="mt-6 flex gap-2 sm:gap-4 flex-wrap justify-center">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-md disabled:opacity-50"
                onClick={handlePrevious}
                disabled={index === 0}
              >
                Previous
              </button>

              <button
                className="px-4 py-2 bg-yellow-600 text-white rounded-md"
                onClick={handleMark}
                disabled={selected === null || answers[index] !== null}
              >
                Mark
              </button>

              {index < questions.length - 1 ? (
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50"
                  onClick={handleNext}
                  disabled={answers[index] === null}
                >
                  Next
                </button>
              ) : (
                <button
                  className="px-4 py-2 bg-green-600 text-white rounded-md"
                  onClick={() => setShowResults(true)}
                >
                  Finish Quiz
                </button>
              )}
            </div>
          </>
        ) : (
          <Results score={score} mistakes={mistakes} total={questions.length} />
        )}

        <div className="mt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Developed by Essel And Weezy 😌🤌🏽
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;