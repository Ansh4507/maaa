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
              As a dedicated and innovative developer, I specialize in full-stack development with a strong foundation in both front-end and back-end technologies. Currently pursuing an Integrated MTech in Computer Science Engineering from Jaypee Institute of Information Technology, Noida, I have a proven track record of developing and deploying impactful projects. My portfolio includes creating a scalable social media platform using microservices architecture and <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">Kubernetes</span>, and an advanced code analysis tool leveraging Abstract Syntax Trees. I am proficient in using <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">ReactJS</span>, <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">NodeJS</span>, <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">ExpressJS</span>, and <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">MongoDB</span> for building scalable applications. Additionally, I have experience implementing microservices architecture with Kubernetes and ensuring seamless interservice communication using <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">Kafka</span>. My expertise extends to optimizing <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">CI/CD</span> pipelines for rapid and efficient deployment. I have also worked on machine learning projects, developing tools for advanced code analysis and plagiarism detection using techniques like <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">Abstract Syntax Trees</span> and <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">TF-IDF vectors</span>. I am committed to continuous learning and problem-solving, consistently delivering innovative, user-centric solutions.
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
