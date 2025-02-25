const Results = ({ score, mistakes, total }) => {
    const percentage = ((score / total) * 100).toFixed(2);
  
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold">Quiz Completed!</h2>
        <p>Score: {score} / {total}</p>
        <p>Mistakes: {mistakes}</p>
        <p className="text-lg font-semibold">
          Percentage: <span className={percentage >= 70 ? "text-green-500" : "text-red-500"}>{percentage}%</span>
        </p>
      </div>
    );
  };
  
  export default Results;
  