import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Rock Paper Scissors
        </h1>
        <p className="text-xl text-gray-600 mb-10">
          The classic game with a modern twist. Test your luck against our AI!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <div className="text-primary-500 text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-bold mb-2">Play Now</h3>
            <p className="text-gray-600">
              Jump straight into the action and play against our AI opponent.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <div className="text-primary-500 text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2">Track Scores</h3>
            <p className="text-gray-600">
              Keep track of your wins, losses, and ties throughout your session.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <div className="text-primary-500 text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-2">Smart AI</h3>
            <p className="text-gray-600">
              Our AI makes random choices - just like a human would!
            </p>
          </motion.div>
        </div>

        <Link
          to="/game"
          className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transition-all duration-200"
        >
          Start Playing
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;