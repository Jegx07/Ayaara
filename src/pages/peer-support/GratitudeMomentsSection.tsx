export const GratitudeMomentsSection = (): JSX.Element => {
  const gratitudeItems = [
    {
      id: 1,
      text: '"Grateful for my study group — they kept me going today! 💚"',
      bg: "bg-[#f4f9ef]",
    },
    {
      id: 2,
      text: '"First time I slept 8 hours in 2 weeks. Small wins matter! 🎉"',
      bg: "bg-[#ddf7b7]",
    },
    {
      id: 3,
      text: '"The counselor helped me reframe my exam anxiety. Thank you."',
      bg: "bg-[#f4f9ef]",
    },
  ];

  return (
    <div className="absolute top-[632px] left-[972px] w-[440px] h-[220px] bg-white rounded-[20px] overflow-hidden shadow-[0px_4px_16px_#0000000d]">
      <div className="absolute top-0 left-0 w-[440px] h-1.5 bg-[#ffe844]" />

      <div className="top-6 left-6 [font-family:'Inter-Bold',Helvetica] font-bold text-[#141911] text-base whitespace-nowrap absolute tracking-[0] leading-[normal]">
        🌟 Gratitude Wall
      </div>

      <div className="top-[50px] left-6 [font-family:'Inter-Regular',Helvetica] font-normal text-[#99a593] text-xs absolute tracking-[0] leading-[normal]">
        Positive moments shared today
      </div>

      {gratitudeItems.map((item, index) => {
        const topBase = 76 + index * 44;
        const textTopBase = 84 + index * 44;
        return (
          <div key={item.id}>
            <div
              className={`absolute w-[392px] h-9 ${item.bg} rounded-[10px]`}
              style={{ top: `${topBase}px`, left: "24px" }}
            />
            <p
              className="absolute w-[360px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-[11px] tracking-[0] leading-[normal]"
              style={{ top: `${textTopBase}px`, left: "36px" }}
            >
              {item.text}
            </p>
          </div>
        );
      })}

      <div className="absolute top-[188px] left-6 w-40 h-6 bg-[#ddf7b7] rounded-xl" />

      <div className="top-[194px] left-10 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#3f8c0c] text-xs absolute tracking-[0] leading-[normal]">
        + Add Gratitude
      </div>
    </div>
  );
};
