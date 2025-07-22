import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChoiceButton from "../components/ChoiceButton";
import GameResult from "../components/GameResult";
import ScoreBoard from "../components/ScoreBoard";

const choices = ["rock", "paper", "scissors"];

const Game = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ user: 0, computer: 0, ties: 0 });
  const [showResult, setShowResult] = useState(false);

  const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const determineWinner = (user, computer) => {
    if (user === computer) return "tie";
    if (
      (user === "rock" && computer === "scissors") ||
      (user === "paper" && computer === "rock") ||
      (user === "scissors" && computer === "paper")
    ) {
      return "win";
    }
    return "lose";
  };

  const handleChoice = (choice) => {
    const computer = getComputerChoice();
    const gameResult = determineWinner(choice, computer);

    setUserChoice(choice);
    setComputerChoice(computer);
    setResult(gameResult);
    setShowResult(true);

    setScore((prev) => ({
      ...prev,
      user: gameResult === "win" ? prev.user + 1 : prev.user,
      computer: gameResult === "lose" ? prev.computer + 1 : prev.computer,
      ties: gameResult === "tie" ? prev.ties + 1 : prev.ties,
    }));
  };

  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-gray-800 mb-2"
        >
          Game On!
        </motion.h1>
        <p className="text-lg text-gray-600 mb-10">
          Choose rock, paper, or scissors to challenge the AI.
        </p>

        <ScoreBoard score={score} />

        {!showResult ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center mt-10"
          >
            {choices.map((choice) => (
              <ChoiceButton
                key={choice}
                choice={choice}
                onClick={() => handleChoice(choice)}
              />
            ))}
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-10"
            >
              <GameResult
                userChoice={userChoice}
                computerChoice={computerChoice}
                result={result}
              />
            </motion.div>

            <motion.div
              key="play-again"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 flex justify-center"
            >
              <button
                onClick={resetGame}
                className="bg-gray-900 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition duration-300"
              >
                Play Again
              </button>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default Game;
