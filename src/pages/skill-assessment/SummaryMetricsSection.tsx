import rectangle from "./rectangle.svg";

export const SummaryMetricsSection = (): JSX.Element => {
  return (
    <div className="absolute top-0 left-[220px] w-[1220px] h-[72px] bg-white">
      <div className="absolute top-[22px] left-8 [font-family:'Inter-Bold',Helvetica] font-bold text-[#141a12] text-[22px] tracking-[0] leading-[normal]">
        Skill Assessment
      </div>

      <p className="absolute top-12 left-8 [font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-[13px] tracking-[0] leading-[normal]">
        Measure and grow your academic &amp; soft skills
      </p>

      <img
        className="absolute top-4 left-[1001px] w-40 h-9"
        alt="Rectangle"
        src={rectangle}
      />

      <div className="absolute top-[26px] left-[1018px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#141a12] text-[13px] tracking-[0] leading-[normal]">
        + Start Assessment
      </div>

      <div className="absolute top-[18px] left-[1170px] w-9 h-9 bg-[#def7b8] rounded-[18px]" />

      <div className="absolute top-[27px] left-[1181px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#141a12] text-sm tracking-[0] leading-[normal] whitespace-nowrap">
        🔔
      </div>
    </div>
  );
};
