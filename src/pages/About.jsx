import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 sm:p-10"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 text-center">
            About the Game
          </h1>

          <div className="prose prose-gray prose-lg max-w-none mb-10 text-gray-700">
            <p>
              Rock Paper Scissors is a classic hand game played by two people, where each player forms one of three shapes — rock, paper, or scissors — with their hand. The winner is determined by the rules of the game.
            </p>

            <h2>How It Works</h2>
            <ul>
              <li><strong>Rock</strong> crushes scissors</li>
              <li><strong>Scissors</strong> cuts paper</li>
              <li><strong>Paper</strong> covers rock</li>
              <li>If both players choose the same shape, it’s a tie</li>
            </ul>

            <h2>Our Version</h2>
            <p>
              This digital version lets you play against an AI opponent that picks randomly. You can track your performance in real-time with a built-in scoreboard that counts wins, losses, and ties throughout your session.
            </p>

            <h2>History</h2>
            <p>
              The origins of Rock Paper Scissors trace back to the Chinese Han Dynasty (206 BCE–220 CE). Over centuries, it spread across Asia and later made its way to Western countries in the early 1900s.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex justify-center"
          >
            <a
              href="https://en.wikipedia.org/wiki/Rock_paper_scissors"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
            >
              Learn More on Wikipedia
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
