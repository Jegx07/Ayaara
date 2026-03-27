export const WellnessBuddySection = (): JSX.Element => {
  return (
    <div className="absolute top-[412px] left-[972px] w-[440px] h-[200px] bg-[#ddf7b7] rounded-[20px] overflow-hidden">
      <div className="absolute top-0 left-0 w-[440px] h-1.5 bg-[#8cd644]" />

      <div className="top-6 left-6 [font-family:'Inter-Bold',Helvetica] font-bold text-[#141911] text-base whitespace-nowrap absolute tracking-[0] leading-[normal]">
        🤝 My Wellness Buddy
      </div>

      <p className="top-[50px] left-6 [font-family:'Inter-Regular',Helvetica] font-normal text-[#3f8c0c] text-xs absolute tracking-[0] leading-[normal]">
        You&#39;ve been matched with a peer buddy!
      </p>

      <div className="absolute top-[84px] left-6 w-12 h-12 bg-[#8cd644] rounded-3xl" />

      <div className="top-[97px] left-[41px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#141911] text-lg absolute tracking-[0] leading-[normal]">
        K
      </div>

      <div className="top-[88px] left-[82px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#141911] text-sm absolute tracking-[0] leading-[normal]">
        Kavya M.
      </div>

      <p className="top-[108px] left-[82px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3f8c0c] text-xs absolute tracking-[0] leading-[normal]">
        4th Year · Same exam schedule
      </p>

      <p className="top-[152px] left-6 [font-family:'Inter-Regular',Helvetica] font-normal text-[#3f8c0c] text-[11px] whitespace-nowrap absolute tracking-[0] leading-[normal]">
        Last active: 30 min ago · 14 chats
      </p>

      <button
        className="absolute top-[84px] left-[280px] w-20 h-[38px] bg-white rounded-[19px] cursor-pointer border-none"
        aria-label="Message Kavya M."
      />

      <div className="top-24 left-[293px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#3f8c0c] text-xs absolute tracking-[0] leading-[normal] pointer-events-none">
        Message
      </div>

      <button
        className="absolute top-[84px] left-[365px] w-[72px] h-[38px] bg-[#3f8c0c] rounded-[19px] cursor-pointer border-none"
        aria-label="Call Kavya M."
      />

      <div className="top-24 left-[389px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-xs absolute tracking-[0] leading-[normal] pointer-events-none">
        Call
      </div>
    </div>
  );
};
