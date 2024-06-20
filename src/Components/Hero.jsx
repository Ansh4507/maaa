import { ReactTyped } from 'react-typed';
import pic1 from '../assets/picc.png';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
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
        <div className='flex py-12  mb-20 pb-20 h-fit flex-col md:flex-row '>
            <div className="left w-full lg:w-1/2  mb-4 lg:my-20 mx-10 ">
                <motion.h1
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className='text-6xl font-thin my-2'>Vivek Shaurya</motion.h1>
                <motion.span
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text  text-3xl md:text-4xl tracking-tight text-transparent">
                    <ReactTyped
                        strings={["Full Stack Developer", "DevOps Engineer"]}
                        typeSpeed={100}
                        backSpeed={50}
                        loop
                    />
                </motion.span>
                <div className='flex gap-4 my-6'>
                    <button className='flex bg-slate-400 text-black py-1 px-2 rounded-md'>Resume
                        <MdOutlineFileDownload className='flex items-center justify-center text-2xl' />
                    </button>
                    <div className='flex gap-8'>
                        <button className='flex bg-slate-400 text-black py-1 px-2 rounded-md'>Let&apos;s Connect
                            <FaArrowRight className='flex items-center justify-center text-md my-auto hover:ml-1' />
                        </button>
                    </div>
                </div>
            </div>
            <div className="right w-full lg:w-1/2 lg:p-8">
                <div className='flex justify-center '>
                    <motion.img
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5}}
                        className="rounded-lg" src={pic1} alt="Vivek's Profile Pic" />
                </div>
            </div>
        </div >
    )
}

export default Hero;