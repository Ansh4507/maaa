import pic2 from '../assets/meraabout.png';
import { motion } from "framer-motion";


const About = () => {
  return (
    <section id="about">
      <div className="h-auto">
        <div>
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="mb-20 text-center text-4xl my-16 ">About Me</motion.h1>
        </div>
        <div className="flex flex-col md:flex-row my-10">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="left w-full md:w-1/2 flex justify-center items-center p-4 ">
            <img src={pic2} alt="About Pic" className="h-auto max-h-full rounded-md overflow-hidden " />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="right w-full md:w-1/2 flex justify-center items-center p-4">
            <p className='lg:text-lg text-justify md:text-md sm:text-sm'>
              As a dedicated full-stack developer, I excel in leveraging cutting-edge technologies to craft robust applications that redefine user experiences. Currently pursuing an Integrated MTech in Computer Science Engineering at Jaypee Institute of Information Technology, Noida, I specialize in <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">ReactJS</span>, <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">NodeJS</span>, <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">ExpressJS</span>, and <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">MongoDB</span>.
              My passion lies in architecting scalable solutions using microservices and <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">Kubernetes</span>, ensuring high performance and flexibility. I am driven by a relentless pursuit of knowledge, constantly seeking innovative ways to solve complex challenges and deliver impactful, user-centric solutions.
              Beyond coding, I actively explore emerging tech trends and contribute to impactful open-source projects, enriching my skill set and giving back to the community.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
