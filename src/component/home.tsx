import { motion } from "framer-motion";

const HomeSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-screen w-full text-center p-8 ml-0 md:ml-64" // add md:ml-64 to offset sidebar width
    >
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
        Zarif Amir Sanad
      </h1>
      <h2 className="text-xl md:text-2xl text-gray-400">
        Full-stack Developer
      </h2>
    </motion.section>
  );
};

export default HomeSection;
