import { FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiApachekafka } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { AiOutlineKubernetes } from "react-icons/ai";
import { motion } from "framer-motion";



const getRandomDelay = () => Math.random() * 2;

const iconVariants = (delay) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: 2.5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
            delay: delay,
        },
    },
});

const technologies = [
    { icon: <IoLogoJavascript className="text-4xl text-yellow-500" />, borderColor: "border-slate-500" },
    { icon: <FaReact className="text-4xl text-blue-500" />, borderColor: "border-slate-500" },
    { icon: <FaNodeJs className="text-4xl text-green-600" />, borderColor: "border-slate-500" },
    { icon: <SiTailwindcss className="text-4xl text-teal-500" />, borderColor: "border-slate-500" },
    { icon: <SiMongodb className="text-4xl text-green-500" />, borderColor: "border-slate-500" },
    { icon: <GrMysql className="text-4xl text-blue-600" />, borderColor: "border-slate-500" },
    { icon: <FaDocker className="text-4xl text-blue-500" />, borderColor: "border-slate-500" },
    { icon: <AiOutlineKubernetes className="text-4xl text-blue-600" />, borderColor: "border-slate-500" },
    { icon: <SiApachekafka className="text-4xl text-white" />, borderColor: "border-slate-500" },
    { icon: <FaAws className="text-4xl text-orange-500" />, borderColor: "border-slate-500" },
];

const Technologies = () => {
    return (
        <section id="technologies">
            <div className="h-auto">
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className="mb-20 text-center text-4xl my-20">Technologies</motion.h1>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    className="flex flex-wrap items-center justify-center gap-4">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            variants={iconVariants(getRandomDelay())}
                            initial="initial"
                            animate="animate"
                            className={`rounded-2xl border-4 ${tech.borderColor} p-4`}
                            aria-label={tech.icon.type.displayName}
                        >
                            {tech.icon}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Technologies;
