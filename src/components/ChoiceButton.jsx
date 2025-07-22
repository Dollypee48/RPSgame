import { motion } from "framer-motion";

const ChoiceButton = ({ choice, onClick }) => {
  const getButtonStyle = () => {
    switch (choice) {
      case "rock":
        return "bg-red-500 hover:bg-red-600";
      case "paper":
        return "bg-blue-500 hover:bg-blue-600";
      case "scissors":
        return "bg-yellow-500 hover:bg-yellow-600 text-gray-900";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  const getEmoji = () => {
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
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`w-28 h-28 sm:w-32 sm:h-32 ${getButtonStyle()} text-white font-semibold rounded-full shadow-lg transition-all flex flex-col items-center justify-center text-lg`}
    >
      <span className="text-3xl mb-1">{getEmoji()}</span>
      {choice.charAt(0).toUpperCase() + choice.slice(1)}
    </motion.button>
  );
};

export default ChoiceButton;
