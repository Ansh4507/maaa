import pic2 from "../assets/meraabout.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about">
      <div className="h-auto mt-20">
        <div>
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="mb-20 text-center text-4xl my-16 "
          >
            About Me
          </motion.h1>
        </div>
        <div className="flex flex-col md:flex-row my-10">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="left w-full md:w-1/2 flex justify-center items-center p-4 "
          >
            <img
              src={pic2}
              alt="About Pic"
              className="h-auto max-h-full rounded-md overflow-hidden "
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="right w-full md:w-1/2 flex justify-center items-center p-4"
          >
            <p className="lg:text-lg text-justify md:text-md sm:text-sm">
              I am a passionate full-stack developer who thrives on crafting
              scalable, high-performance applications that redefine user
              experiences. Currently pursuing an Integrated MTech in Computer
              Science Engineering at Jaypee Institute of Information Technology,
              Noida, I have honed my expertise in{" "}
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
                ReactJS
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
                NodeJS
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
                ExpressJS
              </span>
              , and{" "}
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
                MongoDB
              </span>
              . My core strength lies in architecting backend systems using a{" "}
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
                microservices architecture
              </span>
              , leveraging{" "}
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
                Kubernetes
              </span>{" "}
              for efficient orchestration and ensuring seamless scalability. I
              am deeply committed to building robust solutions that prioritize
              efficiency, reliability, and user satisfaction. Beyond
              development, I am an avid learner and explorer of emerging
              technologies. Whether contributing to impactful open-source
              projects or staying at the forefront of tech trends, I continually
              seek opportunities to expand my skill set and deliver meaningful
              innovations. Driven by a relentless curiosity, I aim to solve
              complex challenges with creativity and precision, always putting
              users at the heart of my solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
