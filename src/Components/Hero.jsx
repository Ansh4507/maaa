import { ReactTyped } from 'react-typed';
import pic1 from '../assets/meraprofile.png';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    return (
        <section id="hero">
            <div className='flex py-12  mb-20 pb-20 h-fit flex-col md:flex-row '>
                <div className="left w-full lg:w-1/2  mb-4 lg:my-20 mx-auto ">
                    <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className='text-6xl font-thin my-2'>Vivek Shaurya</motion.h1>
                    <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl md:text-4xl tracking-tight text-transparent">
                        <ReactTyped
                            strings={["Full Stack Developer", "DevOps Engineer"]}
                            typeSpeed={100}
                            backSpeed={50}
                            loop
                        />
                    </motion.span>
                    <motion.div
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className='flex gap-4 my-6'>
                        <a href='https://drive.google.com/file/d/19ekvp4pDKINi5rJCodg6HHLmskBIKqgz/view' target='_blank'>
                            <button className='flex text-slate-300 py-1 px-2 rounded-2xl border-4  border-slate-500 p-4 text-sm md:text-md'>Resume
                                <MdOutlineFileDownload className='flex items-center justify-center text-lg md:text-xl' />
                            </button></a>
                        <div className='flex gap-8'>
                            <Link to="contact" smooth={true} duration={1500}>
                                <button className='flex text-slate-300 py-1 px-2 rounded-2xl border-4  border-slate-500 p-4 text-sm md:text-md'>Let&apos;s Connect
                                    <FaArrowRight className='flex items-center justify-center text-sm md:text-md my-auto hover:ml-1' />
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
                <div className="right w-full lg:w-1/2 lg:p-8">
                    <div className='flex justify-center '>
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="rounded-lg overflow-hidden" src={pic1} alt="Vivek's Profile Pic" />
                    </div>
                </div>
            </div >
        </section>
    )
}

export default Hero;