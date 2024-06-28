import {Button} from "@/components/Button";

export function NavigationBar(){
  return (
   <nav className="fixed top-0 z-10 w-full bg-white flex items-center h-20">
     <div className="container px-6 flex items-center justify-between">
       <div>
        <h1 className="font-extrabold text-3xl">Giant</h1>
       </div>
       <div>
         <ul className="flex items-center gap-6 font-medium text-lg">
           <li>Journey</li>
           <li>Portofolio</li>
           <li>Contact</li>
         </ul>
       </div>
       <div >
         <Button className="px-6 py-6 bg-gray-800/90 rounded-3xl text-white font-bold">
           Contact Me
         </Button>
       </div>
     </div>
   </nav>
  );
}
