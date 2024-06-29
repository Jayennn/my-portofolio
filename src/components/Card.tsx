import Image, {StaticImageData} from "next/image";

interface CardProps {
  image: StaticImageData,
  alt: string
  title: string,
  exact: string
}

export function Card({image, alt, title, exact}: CardProps){
  return (
    <div className="max-w-sm space-y-2">
      <div className="rounded-lg overflow-hidden shadow max-h-44">
        <Image className="w-full object-cover" src={image} alt={alt}/>
      </div>
      <div className="py-2 px-3">
        <h4 className="font-bold text-lg text-heading">{title}</h4>
        <p className="text-sm text-paragraph">{exact}</p>
      </div>
    </div>
  );
}
