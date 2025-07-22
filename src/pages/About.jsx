import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">About the Game</h1>
          
          <div className="prose prose-lg text-gray-600 mb-8">
            <p>
              Rock Paper Scissors is a classic hand game usually played between two people,
              in which each player simultaneously forms one of three shapes with an outstretched hand.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-6">How It Works</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Rock crushes scissors (rock wins)</li>
              <li>Scissors cuts paper (scissors win)</li>
              <li>Paper covers rock (paper wins)</li>
              <li>If both players choose the same shape, it's a tie</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-6">Our Version</h2>
            <p>
              This digital version allows you to play against a computer opponent that makes
              random choices. The game keeps track of your score throughout your session.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-6">History</h2>
            <p>
              The game dates back to the Chinese Han Dynasty (206 BCE–220 CE). It spread
              throughout Asia and eventually to the West in the early 20th century.
            </p>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-6"
          >
            <a
              href="https://en.wikipedia.org/wiki/Rock_paper_scissors"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-200"
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