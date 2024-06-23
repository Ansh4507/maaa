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
                    whileHover={{ scale: 1.3, rotate: [-8, 8, -6, 6, 0], transition: { duration: 0.3 } }}
                    className="cursor-pointer"
                >
                    <a href='https://www.linkedin.com/in/vivek-shaurya/' target='_blank'>
                        <FaLinkedin className="text-2xl  hover:text-blue-700" /></a>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.3, rotate: [-8, 8, -6, 6, 0], transition: { duration: 0.3 } }}
                    className="cursor-pointer"
                >
                    <a href='https://github.com/MRPERFECT0603' target='_blank'>
                        <FaGithub className="text-2xl hover:text-gray-800" /></a>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.3, rotate: [-8, 8, -6, 6, 0], transition: { duration: 0.3 } }}
                    className="cursor-pointer"
                >
                    <a href='https://www.instagram.com/valour__sagacious/' target='_blank'>
                        <FaInstagram className="text-2xl  hover:text-pink-700" /></a>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.3, rotate: [-8, 8, -6, 6, 0], transition: { duration: 0.3 } }}
                    className="cursor-pointer"
                >
                    <a href='https://discordapp.com/users/mrperfect06#4663' target='_blank'>
                        <FaDiscord className="text-2xl hover:text-purple-800" /></a>
                </motion.div>
            </div>
            <div className='flex md:hidden text-2xl'>
                {menuOpen ? (
                    <div className="flex flex-col items-end mt-12">
                        <IoClose onClick={toggleMenu} />
                        <div className='bg-transparent text-2xl flex flex-row gap-4 p-4 pr-0 rounded-md '>
                            <a href='https://www.linkedin.com/in/vivek-shaurya/' target='_blank'>
                                <FaLinkedin /></a>
                            <a href='https://github.com/MRPERFECT0603' target='_blank'>
                                <FaGithub /></a>
                            <a href='https://www.instagram.com/valour__sagacious/' target='_blank'>
                                <FaInstagram /></a>
                            <a href='https://discordapp.com/users/mrperfect06#4663' target='_blank'>
                                <FaDiscord /></a>
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
