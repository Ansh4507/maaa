import { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaDiscord } from 'react-icons/fa';
import { IoMenu, IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='flex h-12 justify-between items-center mx-10 py-3 my-10'>
            <div className="left text-4xl font-medium">
                <h1>Vs</h1>
            </div>
            <div className="right md:flex text-2xl gap-4 hidden">
            <motion.div
                whileHover={{ scale: 1.1, rotate: [-5, 5, -3, 3, 0], transition: { duration: 0.3 } }}
                className="cursor-pointer"
            >
                <FaLinkedin className="text-2xl  hover:text-blue-700" />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.1, rotate: [-5, 5, -3, 3, 0], transition: { duration: 0.3 } }}
                className="cursor-pointer"
            >
                <FaGithub className="text-2xl hover:text-gray-800" />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.1, rotate: [-5, 5, -3, 3, 0], transition: { duration: 0.3 } }}
                className="cursor-pointer"
            >
                <FaInstagram className="text-2xl  hover:text-pink-700" />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.1, rotate: [-5, 5, -3, 3, 0], transition: { duration: 0.3 } }}
                className="cursor-pointer"
            >
                <FaDiscord className="text-2xl hover:text-purple-800" />
            </motion.div>
        </div>
            <div className='flex md:hidden text-2xl'>
                {menuOpen ? (
                    <div className="flex flex-col items-end mt-12">
                        <IoClose onClick={toggleMenu} />
                        <div className='bg-transparent text-2xl flex flex-row gap-4 p-4 pr-0 rounded-md '>
                            <FaLinkedin />
                            <FaGithub />
                            <FaInstagram />
                            <FaDiscord />
                        </div>
                    </div>
                ) : (
                    <IoMenu onClick={toggleMenu} />
                )}
            </div>
        </div>
    );
};

export default Navbar;
