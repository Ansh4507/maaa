import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";

const VerticalNavbar = () => {
    const [initialHover, setInitialHover] = useState(false);

    return (
        <>
            <motion.div
                whileHover={{ opacity: 1, y: 0 }}
                initial={initialHover ? { opacity: 0, y: -100 } : { opacity: 1, y: 0 }}
                animate={initialHover ? { opacity: 0, y: -100 } : {}}
                transition={{ duration: 1.5 }}
                onHoverStart={() => setInitialHover(true)}
                className="fixed top-0 left-0 h-full w-16 bg-transparent lg:flex flex-col items-center justify-center py-4 z-50 hidden"
            >
                <ul className="flex flex-col items-center gap-24">
                    <motion.li
                        initial={{ rotate: -90 }}
                        whileHover={{ rotate: 0 }}
                        className="transform -rotate-90 text-white cursor-pointer"
                    >
                        <Link to="navbar" smooth={true} duration={1500}>
                            Home
                        </Link>
                    </motion.li>
                    <motion.li
                        initial={{ rotate: -90 }}
                        whileHover={{ rotate: 0 }}
                        className="transform -rotate-90 text-white cursor-pointer"
                    >
                        <Link to="about" smooth={true} duration={1500}>
                            About
                        </Link>
                    </motion.li>
                    <motion.li
                        initial={{ rotate: -90 }}
                        whileHover={{ rotate: 0 }}
                        className="transform -rotate-90 text-white cursor-pointer"
                    >
                        <Link to="technologies" smooth={true} duration={1500}>
                            Tech
                        </Link>
                    </motion.li>
                    <motion.li
                        initial={{ rotate: -90 }}
                        whileHover={{ rotate: 0 }}
                        className="transform -rotate-90 text-white cursor-pointer"
                    >
                        <Link to="projects" smooth={true} duration={1500}>
                            Projects
                        </Link>
                    </motion.li>
                    <motion.li
                        initial={{ rotate: -90 }}
                        whileHover={{ rotate: 0 }}
                        className="transform -rotate-90 text-white cursor-pointer"
                    >
                        <Link to="contact" smooth={true} duration={1500}>
                            Contact
                        </Link>
                    </motion.li>
                </ul>
            </motion.div>
        </>
    );
};

export default VerticalNavbar;
