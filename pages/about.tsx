import { FaPython } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import HeadingBox from "@/lib/components/HeadingBox";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="flex h-full flex-col items-center overflow-auto py-20">
        <img
          src="me.jpg"
          alt="me"
          className="h-[200px] w-[200px] rounded-full border-[1px] border-black  sm:h-[400px] sm:w-[400px]"
        />
        <div className="w-3/4 space-y-4 sm:w-2/4 [&>div]:border-b-[1px]">
          <HeadingBox label="Name">Kosuke Iwashiro</HeadingBox>
          <HeadingBox label="Handle">kou1046</HeadingBox>
          <HeadingBox label="Birthplace">Hiroshima</HeadingBox>
          <HeadingBox label="Favorit tech">
            <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
              <div>
                <FaPython size={60} className="inline-block" />
                <div>Python</div>
              </div>
              <div>
                <SiTypescript size={60} className="inline-block" />
                <div>Typescript</div>
              </div>
              <div>
                <SiReact size={60} className="inline-block" />
                <div>React</div>
              </div>
              <div>
                <SiNextdotjs size={60} className="inline-block" />
                <div>Next.js</div>
              </div>
            </div>
          </HeadingBox>
          <HeadingBox label="Link">
            <div className="flex justify-center">
              <div className="text-center">
                <Link href="https://github.com/kou1046">
                  <SiGithub
                    size={40}
                    className="hover:scale-105 hover:opacity-80"
                  />
                </Link>
              </div>
            </div>
          </HeadingBox>
          <HeadingBox
            label="Introduction"
            className="break-words border-[1px] text-center [&>p]:font-bold"
          >
            こんにちは．山口大学大学院博士前期課程に在学中です．
            最近は自分の作ったものをほかの人も使えるように,
            趣味でWebアプリを創作するようになり始めました.
            よろしくお願いいたします．
          </HeadingBox>
        </div>
      </div>
    </>
  );
};

export default About;
