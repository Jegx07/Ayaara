export const MoodPerformanceDashboardSection = (): JSX.Element => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const leftPositions = [50, 122, 194, 266, 338, 410, 482];

  return (
    <div className="absolute top-[850px] left-[239px] w-[1170px] h-[246px] bg-white rounded-[20px] overflow-hidden shadow-[0px_4px_16px_#0000000d]">
      <div className="absolute top-[238px] left-6 w-[512px] h-px bg-[#e5eddd]" />
      {days.map((day, index) => (
        <div
          key={day}
          className="absolute top-[248px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#99a593] text-[10px] whitespace-nowrap tracking-[0] leading-[normal]"
          style={{ left: `${leftPositions[index]}px` }}
        >
          {day}
        </div>
      ))}
    </div>
  );
};
