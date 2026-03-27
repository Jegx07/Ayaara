export const StudentCounselingCardSection = (): JSX.Element => {
  return (
    <div className="absolute top-[306px] left-[252px] w-[370px] h-[218px] bg-white rounded-[20px] overflow-hidden shadow-[0px_4px_18px_#0000000f]">
      <div className="absolute top-0 left-0 w-[370px] h-[5px] bg-[#ddf7b7]" />

      <div className="absolute top-5 left-5 w-12 h-12 bg-[#ddf7b7] rounded-[14px]" />

      <div className="top-[30px] left-[34px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[22px] whitespace-nowrap absolute tracking-[0] leading-[normal]">
        🧠
      </div>

      <div className="absolute top-[22px] left-[252px] w-[100px] h-[26px] bg-[#ddf7b7] rounded-[13px]" />

      <div className="top-7 left-[268px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#3f8c0c] text-[10px] whitespace-nowrap absolute tracking-[0] leading-[normal]">
        Counseling
      </div>

      <div className="absolute top-20 left-5 w-[310px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#141911] text-[15px] tracking-[0] leading-[normal]">
        Student Counseling Center
      </div>

      <p className="absolute top-[106px] left-5 w-[330px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-xs tracking-[0] leading-[18px]">
        Free one-on-one sessions with certified counselors. Walk-in &amp;
        appointment slots.
      </p>

      <div className="absolute top-[158px] left-5 w-[280px] h-[26px] bg-[#f4f9ef] rounded-[13px]" />

      <p className="top-[164px] left-9 [font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-[11px] whitespace-nowrap absolute tracking-[0] leading-[normal]">
        🕐 Mon–Fri · 9 AM – 5 PM
      </p>

      <button className="absolute top-[190px] left-5 w-[120px] h-6 bg-[#3f8c0c] rounded-xl cursor-pointer border-none p-0">
        <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[10px] whitespace-nowrap tracking-[0] leading-[normal]">
          Book Appointment
        </span>
      </button>
    </div>
  );
};
