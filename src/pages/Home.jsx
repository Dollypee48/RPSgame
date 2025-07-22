import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  {
    icon: "🎮",
    title: "Play Now",
    description: "Jump into action and challenge our AI in real-time.",
  },
  {
    icon: "🏆",
    title: "Track Scores",
    description: "Monitor your wins, losses, and ties with each game.",
  },
  {
    icon: "🤖",
    title: "Smart AI",
    description: "AI simulates randomness just like a real opponent.",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-50 to-gray-200 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Rock Paper Scissors
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-12">
          A modern twist on a timeless game. Battle a smart AI and track your performance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-14">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-2xl shadow-md px-6 py-8 text-center border hover:shadow-xl"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <Link
          to="/game"
          className="inline-block bg-gray-900 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md transition duration-300"
        >
          Start Playing
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
