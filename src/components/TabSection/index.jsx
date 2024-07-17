import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { motion } from "framer-motion";

const TabSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Tabs defaultIndex={0}>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "linear", duration: 0.5 }}
        >
          <TabList className="bg-primary flex flex-col justify-center items-center mx-auto rounded-xl mb-16 w-full dark:bg-primary-500 md:w-max md:flex-row">
            <Tab className="text-white w-full text-center cursor-pointer px-8 py-4 font-semibold focus-within:bg-gray-400 md:w-max dark:focus-within:bg-slate-700 rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
              Who am I?
            </Tab>
            <Tab className="text-white w-full text-center cursor-pointer  px-8 py-4 font-semibold focus-within:bg-gray-400 md:w-max  dark:focus-within:bg-slate-700 rounded-t-none rounded-b-xl md:rounded-l-none md:rounded-r-xl">
              Technical Skills
            </Tab>
          </TabList>
        </motion.div>
        <TabPanel className="flex gap-20 items-center flex-col-reverse md:flex-row-reverse transition-all">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "linear", duration: 0.5 }}
            className="w-full text-primary md:w-1/2 dark:text-white"
          >
            <h2 className="text-2xl font-semibold mb-2">
              👋 Hi, I'm Aryan Shah!
            </h2>
            <p className="text-base font-normal text-neutral-700 dark:text-neutral-300">
              What Am I up to?
              <br /><br />
              Lead Software Engineer at Predica: Leading development of a full-stack HR technology web app.
              <br /><br />
              Building Analyrics: Finishing up my side project at analyrics.info, a full-stack web application with a lyrics analysis database of over 1 million songs, artists, and albums. Utilized MongoDB, Express.js, React, Tailwind, RESTful APIs, and Node.js to create its iconic Bento box UI/UX design.
              <br /><br />
              Self-Studying: Currently focusing on linear algebra in order to dive deep into ML soon.
              <br /><br />
              Recruiting: Seeking software engineering internships for Summer 2025.
            </p>
            <br />
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "linear", duration: 0.5 }}
            className="w-full relative md:w-1/2 md:h-[450px]"
          >
            {!isLoaded && (
              <div className="absolute top-0 rounded-lg left-0 z-50 bg-primary-400 animate-pulse w-full md:h-[450px]" />
            )}
            <img 
              src="/src/assets/profile.jpg" 
              alt="Aryan Shah" 
              onLoad={() => setIsLoaded(true)} 
              className={`w-full h-full object-cover rounded-lg ${isLoaded ? '' : 'hidden'}`} 
            />
          </motion.div>
        </TabPanel>
        <TabPanel className="flex w-full justify-center items-center flex-col md:flex-row-reverse transition-all">
          <div className='w-full flex flex-col items-center justify-center'>
              <img className="w-3/4 md:w-1/2" src="https://skillicons.dev/icons?i=cpp,c,python,js,ts,java,kotlin,swift,postgres,mongodb,androidstudio,git,github,selenium&perline=8" alt="My Skills" />
              <img className="w-3/4 md:w-1/2 mt-16" src="https://skillicons.dev/icons?i=react,tailwind,css,html,d3,django,docker,express,threejs,vite,bootstrap,npm,nextjs,nodejs,postman,redis,kubernetes,aws,netlify,heroku,vercel&perline=8" alt="My Skills" />
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default TabSection;
