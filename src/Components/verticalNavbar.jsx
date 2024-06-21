import { motion } from "framer-motion";



const VerticalNavbar = () => {
    return (
        <motion.div
            whileHover={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="fixed top-0 left-0 h-full w-16 bg-transparent md:flex flex-col items-center justify-center py-4 z-50 hidden">
            <ul className="flex flex-col items-center gap-24">
                <motion.li
                    initial={{ rotate: -90 }}
                    whileHover={{ rotate: 0 }}
                    className="transform -rotate-90 text-white  cursor-pointer">
                    Home
                </motion.li>
                <motion.li
                    initial={{ rotate: -90 }}
                    whileHover={{ rotate: 0 }}
                    className="transform -rotate-90 text-white  cursor-pointer">
                    About
                </motion.li>
                <motion.li
                    initial={{ rotate: -90 }}
                    whileHover={{ rotate: 0 }}
                    className="transform -rotate-90 text-white  cursor-pointer">
                    Tech
                </motion.li>
                <motion.li
                    initial={{ rotate: -90 }}
                    whileHover={{ rotate: 0 }}
                    className="transform -rotate-90 text-white  cursor-pointer">
                    Projects
                </motion.li>
                <motion.li
                    initial={{ rotate: -90 }}
                    whileHover={{ rotate: 0 }}
                    className="transform -rotate-90 text-white  cursor-pointer">
                    Contact
                </motion.li>
            </ul>
        </motion.div>
    );
};

export default VerticalNavbar;
