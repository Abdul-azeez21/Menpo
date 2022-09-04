import React from "react";
import { motion } from "framer-motion";

//icons
import { FaXbox } from "react-icons/fa";

const spinTransition = {
  loop: Infinity,
  duration: 15,
  ease: "linear",
};

const Orbit = () => {
  return (
    <div className="bg-gray-700">
      <div className="flex items-center justify-center w-screen h-screen">
        <motion.div className="border border-indigo-600 rounded-full lg:h-40 lg:w-40 h-24 w-24 flex items-center justify-center">
          <motion.div
            className="border border-indigo-600 rounded-full lg:h-20 lg:w-20 h-16 w-16 relative"
            animate={{ rotate: 360 }}
            transition={spinTransition}
          >
            <motion.div className="bg-pink-800 rounded-full lg:h-8 lg:w-8 h-5 w-5 flex items-center justify-center absolute">
              <FaXbox className="lg:h-5 lg:w-5 h-3 w-3 text-white" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Orbit;
