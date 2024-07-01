"use client";
import { Button } from "@/components/Button";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className="fixed top-0 z-10 w-full bg-white flex flex-col items-center h-16 md:h-20">
      <div className="max-w-[90%] mx-auto container px-6 py-4 flex items-center justify-between">
        <div className="space-y-1 relative">
          <h1
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer font-extrabold text-2xl md:text-3xl text-heading"
          >
            Giant
          </h1>
          <motion.svg
            className="hidden md:block absolute top-8"
            xmlns="http://www.w3.org/2000/svg"
            width="101"
            height="4"
            viewBox="0 0 101 4"
            fill="none"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              d="M1.52539 1.77808H99.1532"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </motion.svg>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 font-medium text-base text-paragraph">
            <li>
              <Link href="/#journey">Journey</Link>
            </li>
            <li>
              <Link href="/#portofolio">Portofolio</Link>
            </li>
            <li>
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-[32px] h-[32px] rounded-[50%] border flex md:hidden justify-center items-center bg-transparent"
        >
          <span
            className={cn(
              "inline-block transform-hamburger -translate-y-[3.5px] w-[14px] h-[1.5px] bg-gray-400 absolute",
              isOpen && "translate-y-0 rotate-45 scale-x-[1.1]"
            )}
            data-position="top"
          ></span>
          <span
            className={cn(
              "inline-block transform-hamburger translate-y-[3.5px] w-[14px] h-[1.5px] bg-gray-400 absolute",
              isOpen && "translate-y-0 -rotate-45 scale-x-[1.1]"
            )}
            data-position="bottom"
          ></span>
        </Button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bg-white w-full"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
          >
            <motion.ul className="max-w-[90%] mx-auto container px-6 py-4 overflow-hidden flex flex-col gap-6 font-medium text-base text-paragraph">
              <motion.li variants={itemVariants}>
                <Link href="/#journey">Journey</Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link href="/#portofolio">Portofolio</Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link href="/#contact">Contact</Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
