import AppSummary from "@/lib/components/AppSummary";

const Apps = () => {
  return (
    <>
      <div className="flex h-full flex-col items-center justify-center">
        <p className="mb-3 text-2xl font-bold">Apps</p>
        <div className="sm: grid grid-cols-1 border-[1px] p-10 sm:grid-cols-2 sm:space-x-3">
          <AppSummary
            src="rhythmusic.gif"
            description="BPMから曲を検索できるWEBアプリです. "
            href="https://rhythmusic.vercel.app/"
            title={"RHYTMUSIC"}
          />
          <AppSummary
            src="measuring_acc.jpg"
            description="携帯から簡単に加速度を測れるWEBアプリです."
            href="https://kou1046.github.io/Measuring-acc/"
            title={"Measuring-acc"}
          />
        </div>
      </div>
    </>
  );
};

export default Apps;
