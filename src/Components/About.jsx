import pic2 from '../assets/mera ek or photo.png';
import { motion } from "framer-motion";


const About = () => {
  return (
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
          <img src={pic2} alt="About Pic" className="h-auto max-h-full rounded-md " />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="right w-full md:w-1/2 flex justify-center items-center p-4">
          <p className='lg:text-lg text-justify md:text-md sm:text-sm'>
            As a dedicated and innovative developer, I specialize in full-stack development with a solid foundation in both front-end and back-end technologies. I am currently pursuing an Integrated MTech in Computer Science Engineering from Jaypee Institute of Information Technology, Noida. My experience includes developing and deploying high-impact projects, such as a dynamic social media platform and an advanced logistics optimization tool. I am skilled in using ReactJS, NodeJS, ExpressJS, and MongoDB to create scalable and robust applications. Additionally, I am proficient in implementing microservices architecture with Kubernetes and facilitating seamless interservice communication using Kafka. With expertise in optimizing CI/CD pipelines for rapid and efficient deployment, I am driven by a passion for continuous learning and a problem-solving mindset, consistently delivering innovative, user-centric solutions in every project.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
