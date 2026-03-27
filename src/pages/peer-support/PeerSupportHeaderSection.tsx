export const PeerSupportHeaderSection = (): JSX.Element => {
  return (
    <div className="absolute top-0 left-[220px] w-[1220px] h-[72px] bg-white">
      <div className="top-[22px] left-8 [font-family:'Inter-Bold',Helvetica] font-bold text-[#141911] text-[22px] absolute tracking-[0] leading-[normal]">
        Peer Support Community
      </div>

      <p className="top-12 left-8 [font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-[13px] absolute tracking-[0] leading-[normal]">
        You are never alone. Connect, share, and grow together.
      </p>

      <button className="absolute top-[18px] left-[1020px] w-[190px] h-9 bg-[#8cd644] rounded-[18px] cursor-pointer border-none outline-none hover:bg-[#7ec23a] transition-colors duration-200">
        <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#141911] text-[13px] tracking-[0] leading-[normal]">
          + Share Your Story
        </span>
      </button>
    </div>
  );
};
