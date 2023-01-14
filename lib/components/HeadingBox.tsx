import { ReactNode } from "react";

type Props = {
  label: string;
  children: ReactNode;
  className?: string;
};

const HeadingBox = ({ label, children, className }: Props) => {
  const defaultStyle = "relative p-2 ";
  const style = className ? defaultStyle + className : defaultStyle;

  return (
    <>
      <div className={style}>
        <p className="border- absolute top-0 -translate-y-1/2 bg-white text-[13px] font-bold">
          {label}
        </p>
        {children}
      </div>
    </>
  );
};

export default HeadingBox;
