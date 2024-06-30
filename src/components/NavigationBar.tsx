"use client";
import {Button} from "@/components/Button";
import {motion} from "framer-motion";
import Link from "next/link";
export function NavigationBar(){
  return (
   <nav className="animate-bounce fixed top-0 z-10 w-full bg-white flex items-center h-20">
     <div className="max-w-[90%] mx-auto container px-6 flex items-center justify-between">
       <div className="space-y-1 relative">
          <Link href="/" className="font-extrabold text-3xl text-heading">Giant</Link>
          <motion.svg className="absolute top-8" xmlns="http://www.w3.org/2000/svg" width="101" height="4" viewBox="0 0 101 4" fill="none">
             <motion.path
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{
               duration: 1,
               ease: "easeInOut",
              }}
               d="M1.52539 1.77808H99.1532" stroke="black" strokeWidth="3" strokeLinecap="round"/>
          </motion.svg>
       </div>
       <div>
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
       {/*<div >*/}
       {/*  <Button className="p-6 bg-gray-800/90 rounded-3xl text-white font-bold">*/}
       {/*    Contact Me*/}
       {/*  </Button>*/}
       {/*</div>*/}
     </div>
   </nav>
  );
}
