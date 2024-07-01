import {Instagram, Github} from "lucide-react";
import Link from "next/link";


export function Footer(){
  return (
    <footer className="flex items-center h-14">
     <div className="max-w-[90%] mx-auto container px-6 flex items-center justify-center md:justify-normal text-paragraph gap-4">
       <Link className="text-sm flex items-center" href="https://github.com/Jayennn">
        <Github className="mr-2 w-5 h-5"/>
         Jayennn
       </Link>
       <Link className="text-sm flex items-center" href="https://www.instagram.com/_giannnt/">
        <Instagram className="mr-2 w-5 h-5"/>
         _giannnt
       </Link>
     </div>
    </footer>
  );
}
