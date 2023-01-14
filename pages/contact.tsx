import HeadingBox from "@/lib/components/HeadingBox";

const Contact = () => {
  return (
    <>
      <div className="flex h-full flex-col items-center justify-center overflow-auto py-20">
        <h1 className="text-15 text-24 mb-12 text-4xl font-bold">Contact</h1>
        <form className="max-w-[80vw]">
          <div className="[&>input]:mb-5 [&>input]:w-full [&>input]:border-2">
            *Name
            <input />
            *Email
            <input />
            *Subject
            <input />
            *Message
            <textarea className="h-52 w-full border-2"></textarea>
          </div>
          <div className="text-center">
            <button
              className="mt-5 rounded-lg border-2 bg-blue-300 py-2
                         px-10 transition hover:scale-105 hover:border-black"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
