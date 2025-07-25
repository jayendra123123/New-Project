import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black px-4 md:px-12 py-4 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/icons/imagep.jpeg"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
          style={{
            objectPosition: "center",
            minHeight: "100vh",
            minWidth: "100vw",
          }}
        />
      </div>

      <div className="relative z-10">
        <div className="flex flex-col justify-center md:justify-start items-start md:items-start gap-6 pt-24 md:pt-32 min-h-[60vh] md:min-h-0">
          <div className="text-white text-left w-full md:pl-36">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[15px] text-[grey]"
            >
              ________ PORTFOLIO
            </motion.p>

            <br />

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-[15px] text-[grey]"
            >
              HELLO, I'M
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-[40px] sm:text-[50px] md:text-[60px] font-bold"
            >
              JAYENDRA M
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              className="text-[28px] sm:text-[36px] md:text-[50px] font-semibold"
            >
              WEB DEVELOPER
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3 }}
              className="text-[15px] text-gray-400 mt-4 max-w-md leading-relaxed"
            >
              Solving real-world problems with practical innovation and a passion for technology.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="flex flex-wrap items-center gap-4 mt-5"
            >
              <a
                href="https://leetcode.com/jayendra_26"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:opacity-80"
              >
                <img
                  src="https://avatars.githubusercontent.com/u/41718343?s=280&v=4"
                  alt="LeetCode"
                  className="w-6 h-6"
                />
                <span className="ml-2 text-base">LeetCode</span>
              </a>
              <a
                href="https://www.codechef.com/users/malla_jayendra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:opacity-80"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEcv_WJfqB-tC3ZFADRoUMMMTtOA6ZzyAA6g&s"
                  alt="CodeChef"
                  className="w-6 h-6"
                />
                <span className="ml-2 text-base">CodeChef</span>
              </a>
              <a
                href="https://github.com/jayendra123123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:opacity-80"
              >
                <img
                  src="https://avatars1.githubusercontent.com/u/9919?v=4"
                  alt="GitHub"
                  className="w-6 h-6"
                />
                <span className="ml-2 text-base">GitHub</span>
              </a>
            </motion.div>

            {/* Resume Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.7 }}
              className="flex flex-wrap gap-3 mt-5"
            >
              <a
                href="/resume_pdf.pdf"
                download
                className="bg-gray-800 text-white px-4 py-2 text-sm rounded-md hover:bg-gray-700 transition"
              >
                Download Resume
              </a>

              <a
                href="/resume_pdf.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 text-sm rounded-md hover:bg-gray-700 transition"
              >
                View Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
