import Image, {StaticImageData} from "next/image";
import Link from "next/link";

interface CardProps {
  image: StaticImageData | string,
  alt: string
  title: string,
  exact: string,
  href: string
}

export function Card({image, alt, title, exact, href}: CardProps){
  return (
    <div className="group max-w-sm space-y-2">
      <div className="rounded-lg overflow-hidden shadow max-h-44">
        <Image width={300} height={150} className="w-full object-cover" src={image} alt={alt}/>
      </div>
      <div className="py-2 px-3 relative">
        <Link href={href} className="font-bold text-lg text-heading underline">{title}</Link>
        <p className="text-sm text-paragraph">{exact}</p>
      </div>
    </div>
  );
}
