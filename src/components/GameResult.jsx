import { motion } from "framer-motion";

const GameResult = ({ userChoice, computerChoice, result }) => {
  const getResultColor = () => {
    if (result === "win") return "text-green-600";
    if (result === "lose") return "text-red-600";
    return "text-yellow-600";
  };

  const getResultText = () => {
    if (result === "win") return "You Win! 🎉";
    if (result === "lose") return "You Lose! 😞";
    return "It's a Tie! 🤝";
  };

  const getEmoji = (choice) => {
    switch (choice) {
      case "rock":
        return "🪨";
      case "paper":
        return "📄";
      case "scissors":
        return "✂️";
      default:
        return "❓";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-xl shadow-lg text-center"
    >
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
          <p className="text-sm text-gray-500 mb-1">You Chose</p>
          <p className="text-2xl font-semibold capitalize">
            {getEmoji(userChoice)} {userChoice}
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
          <p className="text-sm text-gray-500 mb-1">Computer Chose</p>
          <p className="text-2xl font-semibold capitalize">
            {getEmoji(computerChoice)} {computerChoice}
          </p>
        </div>
      </div>

      <h3 className={`text-3xl font-bold ${getResultColor()}`}>
        {getResultText()}
      </h3>
    </motion.div>
  );
};

export default GameResult;
