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
    setUserChoice(choice);
    const computer = getComputerChoice();
    setComputerChoice(computer);
    
    const gameResult = determineWinner(choice, computer);
    setResult(gameResult);
    
    setScore(prevScore => ({
      ...prevScore,
      user: gameResult === "win" ? prevScore.user + 1 : prevScore.user,
      computer: gameResult === "lose" ? prevScore.computer + 1 : prevScore.computer,
      ties: gameResult === "tie" ? prevScore.ties + 1 : prevScore.ties,
    }));
    
    setShowResult(true);
  };

  const resetGame = () => {
    setShowResult(false);
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-2">
          Game On!
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Choose rock, paper, or scissors to play against the computer.
        </p>
        
        <ScoreBoard score={score} />
        
        {!showResult ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-3 gap-4 justify-items-center mb-8"
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-8"
            >
              <GameResult
                userChoice={userChoice}
                computerChoice={computerChoice}
                result={result}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center"
            >
              <button
                onClick={resetGame}
                className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-200"
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