const GameResult = ({ userChoice, computerChoice, result }) => {
  const getResultColor = () => {
    if (result === "win") return "text-green-500";
    if (result === "lose") return "text-red-500";
    return "text-yellow-500";
  };

  const getResultText = () => {
    if (result === "win") return "You Win!";
    if (result === "lose") return "You Lose!";
    return "It's a Tie!";
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-between mb-4">
        <div>
          <p className="text-gray-600">You chose</p>
          <p className="font-bold text-lg capitalize">{userChoice}</p>
        </div>
        <div>
          <p className="text-gray-600">Computer chose</p>
          <p className="font-bold text-lg capitalize">{computerChoice}</p>
        </div>
      </div>
      <h3 className={`text-xl font-bold ${getResultColor()}`}>
        {getResultText()}
      </h3>
    </div>
  );
};

export default GameResult;