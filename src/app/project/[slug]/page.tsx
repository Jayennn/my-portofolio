import Link from "next/link";
import {motion} from "framer-motion";
import {ChevronLeft} from "lucide-react";
import Image from "next/image";


export default function ProjectSingle({params}: {params: {slug: string}}){

  return (
    <main className="bg-stone-50 selection:bg-stone-200 min-h-screen">
      <div className="container max-w-2xl">
        <div className="py-8 flex items-center justify-center relative">
          <Link href="/" className="cursor-pointer absolute left-0 flex items-center rounded-md p-0.5 border border-zinc-300">
            <ChevronLeft className="w-4 h-4"/>
          </Link>
          <Link href="/" className="font-bold text-2xl text-heading underline-offset-4 decoration-1 underline">{params.slug}</Link>
        </div>
        <article className="relative max-w-prose mt-4">
            {/*<Image*/}
            {/*  src={}*/}
            {/*  alt={}*/}
            {/*/>*/}
        </article>
      </div>
    </main>
  );
}
