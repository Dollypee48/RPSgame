const ChoiceButton = ({ choice, onClick }) => {
  const getButtonColor = () => {
    switch (choice) {
      case "rock": return "bg-red-500 hover:bg-red-600";
      case "paper": return "bg-blue-500 hover:bg-blue-600";
      case "scissors": return "bg-yellow-500 hover:bg-yellow-600";
      default: return "bg-gray-500 hover:bg-gray-600";
    }
  };

  return (
    <button
      onClick={onClick}
      className={`${getButtonColor()} text-white font-bold py-4 px-6 rounded-full shadow-md transition-colors`}
    >
      {choice.charAt(0).toUpperCase() + choice.slice(1)}
    </button>
  );
};

export default ChoiceButton;