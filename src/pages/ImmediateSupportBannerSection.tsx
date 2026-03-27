export const ImmediateSupportBannerSection = (): JSX.Element => {
  return (
    <div className="absolute top-[95px] left-[252px] w-[1160px] h-[140px] bg-[#191e16] rounded-[20px] overflow-hidden">
      <div className="top-7 left-8 [font-family:'Inter-Bold',Helvetica] font-bold text-white text-xl whitespace-nowrap absolute tracking-[0] leading-[normal]">
        Need help right now?
      </div>

      <p className="absolute top-14 left-8 w-[600px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-sm tracking-[0] leading-[22px]">
        Campus counselors are available. Reach out — it only takes a minute.
      </p>

      <button
        className="left-6 bg-[#8cd644] absolute top-[90px] w-[180px] h-9 rounded-[18px] cursor-pointer border-none outline-none"
        type="button"
      >
        <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#141911] text-[13px] tracking-[0] leading-[normal]">
          📞 Call Counselor
        </span>
      </button>

      <button
        className="left-[217px] bg-[#2d3828] absolute top-[90px] w-[180px] h-9 rounded-[18px] cursor-pointer border-none outline-none"
        type="button"
      >
        <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#728c6b] text-[13px] tracking-[0] leading-[normal]">
          💬 Chat Now
        </span>
      </button>

      <button
        className="absolute top-9 left-[960px] w-[170px] h-[68px] bg-[#ff4c4c] rounded-2xl cursor-pointer border-none outline-none flex flex-col items-start justify-center"
        type="button"
      >
        <span className="pl-5 [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[13px] tracking-[0] leading-[normal]">
          🚨 Crisis Line
        </span>
        <span className="pl-5 [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-white text-sm tracking-[0] leading-[normal]">
          1800-599-0019
        </span>
      </button>
    </div>
  );
};
