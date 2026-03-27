import { JSX } from "react";

const jobOpportunities = [
  {
    id: 1,
    company: "Google — SWE Intern",
    location: "Bangalore",
    applyBy: "Apr 15",
    bgTop: "top-[70px]",
    titleTop: "top-20",
    subtitleTop: "top-[98px]",
    btnTop: "top-[82px]",
    btnLabelTop: "top-[90px]",
  },
  {
    id: 2,
    company: "Razorpay — Backend Intern",
    location: "Remote",
    applyBy: "Apr 10",
    bgTop: "top-[134px]",
    titleTop: "top-36",
    subtitleTop: "top-[162px]",
    btnTop: "top-[146px]",
    btnLabelTop: "top-[154px]",
  },
  {
    id: 3,
    company: "Swiggy — Data Analyst Intern",
    location: "Bangalore",
    applyBy: "Apr 20",
    bgTop: "top-[198px]",
    titleTop: "top-52",
    subtitleTop: "top-[226px]",
    btnTop: "top-[210px]",
    btnLabelTop: "top-[218px]",
  },
];

export const JobOpportunitiesSection = (): JSX.Element => {
  return (
    <div className="top-[592px] left-[252px] w-[560px] h-[280px] absolute bg-white rounded-[20px] shadow-[0px_4px_20px_#0000000f]">
      <div className="top-6 left-6 [font-family:'Inter-Bold',Helvetica] font-bold text-[#141a12] text-[15px] whitespace-nowrap absolute tracking-[0] leading-[normal]">
        🏢 Job Opportunities
      </div>

      <div className="absolute top-12 left-6 [font-family:'Inter-Regular',Helvetica] font-normal text-[#99a593] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
        Curated for your profile
      </div>

      {jobOpportunities.map((job) => (
        <div key={job.id}>
          <div
            className={`absolute ${job.bgTop} left-4 w-[528px] h-[52px] bg-[#f4f9ef] rounded-xl`}
          />

          <p
            className={`absolute ${job.titleTop} left-7 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#141a12] text-[13px] tracking-[0] leading-[normal]`}
          >
            {job.company}
          </p>

          <p
            className={`absolute ${job.subtitleTop} left-7 [font-family:'Inter-Regular',Helvetica] font-normal text-[#99a593] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap`}
          >
            {job.location} · Apply by {job.applyBy}
          </p>

          <div
            className={`absolute ${job.btnTop} left-[456px] w-14 h-7 bg-[#8cd645] rounded-[14px]`}
          />

          <div
            className={`absolute ${job.btnLabelTop} left-[466px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#141a12] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap`}
          >
            Apply
          </div>
        </div>
      ))}
    </div>
  );
};
