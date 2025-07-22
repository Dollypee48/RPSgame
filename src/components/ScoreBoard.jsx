const ScoreBoard = ({ score }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <h2 className="text-xl font-bold text-center mb-3">Score</h2>
      <div className="flex justify-around">
        <div className="text-center">
          <p className="text-gray-600">You</p>
          <p className="text-2xl font-bold text-blue-600">{score.user}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-600">Computer</p>
          <p className="text-2xl font-bold text-red-600">{score.computer}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-600">Ties</p>
          <p className="text-2xl font-bold text-yellow-600">{score.ties}</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;