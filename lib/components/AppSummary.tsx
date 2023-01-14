import Link from "next/link";

type Props = {
  href: string;
  description: string;
  src: string;
  title: string;
};

const AppSummary = ({ src, href, description, title }: Props) => {
  return (
    <>
      <div className="inline-block text-center font-bold">
        {title}
        <div
          className="my-3 mx-auto h-[200px] w-[300px] cursor-pointer
                     rounded-lg border-2 p-3 shadow-md transition 
                     hover:scale-105 sm:h-[250px] sm:w-[350px]"
          onClick={() => window.open(href)}
        >
          <img src={src} alt={title} className="inline h-full" />
        </div>
        {description}
      </div>
    </>
  );
};

export default AppSummary;
