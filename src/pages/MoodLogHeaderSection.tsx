export const MoodLogHeaderSection = (): JSX.Element => {
  return (
    <div className="absolute top-0 left-[220px] w-[1220px] h-[72px] bg-white">
      <div className="top-[22px] left-8 [font-family:'Inter-Bold',Helvetica] font-bold text-[#141911] text-[22px] absolute tracking-[0] leading-[normal]">
        Mood Log
      </div>

      <p className="top-12 left-8 [font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-[13px] absolute tracking-[0] leading-[normal]">
        Track and reflect on your emotional journey
      </p>

      <button className="absolute top-[18px] left-[1047px] w-40 h-9 bg-[#8cd644] rounded-[18px] cursor-pointer border-none outline-none hover:bg-[#7ec23a] transition-colors duration-200" />

      <span className="top-7 left-[1082px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#141911] text-[13px] absolute tracking-[0] leading-[normal] pointer-events-none">
        + New Entry
      </span>
    </div>
  );
};
