const ScoreBoard = ({ score }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-8">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Scoreboard
      </h2>

      <div className="flex justify-between text-center divide-x divide-gray-200">
        <div className="flex-1 px-4">
          <p className="text-sm text-gray-500 mb-1">You</p>
          <p className="text-3xl font-bold text-green-600">{score.user}</p>
        </div>

        <div className="flex-1 px-4">
          <p className="text-sm text-gray-500 mb-1">Computer</p>
          <p className="text-3xl font-bold text-red-500">{score.computer}</p>
        </div>

        <div className="flex-1 px-4">
          <p className="text-sm text-gray-500 mb-1">Ties</p>
          <p className="text-3xl font-bold text-yellow-500">{score.ties}</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
