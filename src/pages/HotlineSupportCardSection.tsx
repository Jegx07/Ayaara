export const HotlineSupportCardSection = (): JSX.Element => {
  return (
    <div className="absolute top-[536px] left-[252px] w-[370px] h-[218px] bg-white rounded-[20px] overflow-hidden shadow-[0px_4px_18px_#0000000f]">
      <div className="left-0 w-[370px] h-[5px] bg-[#ffe5e0] absolute top-0" />

      <div className="bg-[#ffe5e0] absolute top-5 left-5 w-12 h-12 rounded-[14px] flex items-center justify-center">
        <span className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-[22px] leading-[normal]">
          📞
        </span>
      </div>

      <div className="bg-[#ffe5e0] absolute top-[22px] left-[252px] w-[100px] h-[26px] rounded-[13px] flex items-center justify-center">
        <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#3f8c0c] text-[10px] whitespace-nowrap tracking-[0] leading-[normal]">
          Hotline
        </span>
      </div>

      <div className="absolute top-20 left-5 w-[310px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#141911] text-[15px] tracking-[0] leading-[normal]">
        24/7 Mental Health Hotline
      </div>

      <p className="absolute top-[106px] left-5 w-[330px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-xs tracking-[0] leading-[18px]">
        Round-the-clock confidential helpline for immediate emotional support.
      </p>

      <div className="absolute top-[158px] left-5 w-[280px] h-[26px] bg-[#f4f9ef] rounded-[13px] flex items-center px-3">
        <span className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-[11px] whitespace-nowrap tracking-[0] leading-[normal]">
          🕐 Available 24/7
        </span>
      </div>

      <button className="absolute top-[190px] left-5 w-[120px] h-6 bg-[#3f8c0c] rounded-xl flex items-center justify-center cursor-pointer border-none outline-none">
        <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[10px] whitespace-nowrap tracking-[0] leading-[normal]">
          Call Now
        </span>
      </button>
    </div>
  );
};
