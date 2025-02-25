import { useState } from "react";
import { motion } from "framer-motion";

const QuizCard = ({ question, selectedAnswer, onSelect, markedAnswer }) => {
  const [multiSelection, setMultiSelection] = useState([]);

  const handleSelect = (index) => {
    if (Array.isArray(question.answer)) {
      // Multi-choice question
      let updatedSelection = multiSelection.includes(index)
        ? multiSelection.filter((item) => item !== index)
        : [...multiSelection, index];
      setMultiSelection(updatedSelection);
      onSelect(updatedSelection);
    } else {
      // Single-choice question
      onSelect(index);
    }
  };

  return (
    <motion.div
      className="bg-white dark:bg-futuristicBlue text-gray-900 dark:text-white p-6 rounded-xl shadow-lg"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-lg font-semibold">{question.question}</h3>
      <div className="mt-3">
        {question.options.map((option, index) => {
          let buttonClass = "bg-gray-100 dark:bg-gray-700"; // Default button style

          if (markedAnswer !== null) {
            if (Array.isArray(question.answer)) {
              // Multi-choice question logic
              if (question.answer.includes(index)) {
                buttonClass = "bg-green-500 text-white"; // Highlight all correct answers
              } else if (markedAnswer.includes(index)) {
                buttonClass = "bg-red-500 text-white"; // Highlight incorrect choices
              }
            } else {
              // Single-choice question logic
              if (index === question.answer) {
                buttonClass = "bg-green-500 text-white"; // Correct answer
              } else if (markedAnswer === index) {
                buttonClass = "bg-red-500 text-white"; // Incorrect answer
              }
            }
          } else if (selectedAnswer !== null) {
            // User's selection before marking
            if (Array.isArray(selectedAnswer)) {
              buttonClass = selectedAnswer.includes(index)
                ? "bg-blue-500 text-white"
                : "bg-gray-100 dark:bg-gray-700";
            } else {
              buttonClass = selectedAnswer === index
                ? "bg-blue-500 text-white"
                : "bg-gray-100 dark:bg-gray-700";
            }
          }

          return (
            <button
              key={index}
              className={`block w-full px-4 py-2 my-2 rounded-md transition ${buttonClass}`}
              disabled={markedAnswer !== null} // Disable buttons after marking
              onClick={() => handleSelect(index)}
            >
              {option}
            </button>
          );
        })}
      </div>

      {markedAnswer !== null && (
        <p className="mt-3 text-center font-semibold">
          {Array.isArray(question.answer)
            ? markedAnswer.length === question.answer.length &&
              markedAnswer.every((ans) => question.answer.includes(ans))
              ? "✅ Correct!"
              : `❌ Incorrect! The correct answers are: ${question.answer
                  .map((ans) => question.options[ans])
                  .join(", ")}`
            : markedAnswer === question.answer
            ? "✅ Correct!"
            : `❌ Incorrect! The correct answer is: ${question.options[question.answer]}`}
        </p>
      )}
    </motion.div>
  );
};

export default QuizCard;
