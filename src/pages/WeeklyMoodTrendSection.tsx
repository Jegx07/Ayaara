export const WeeklyMoodTrendSection = (): JSX.Element => {
  const moodData = [
    {
      day: "Mon",
      value: 62,
      barTop: 139,
      barHeight: 99,
      labelTop: 121,
      labelLeft: 52,
      dayLabelLeft: 50,
      barLeft: 48,
      isHighlight: false,
    },
    {
      day: "Tue",
      value: 45,
      barTop: 166,
      barHeight: 72,
      labelTop: 148,
      labelLeft: 124,
      dayLabelLeft: 122,
      barLeft: 120,
      isHighlight: false,
    },
    {
      day: "Wed",
      value: 70,
      barTop: 126,
      barHeight: 112,
      labelTop: 108,
      labelLeft: 196,
      dayLabelLeft: 194,
      barLeft: 192,
      isHighlight: false,
    },
    {
      day: "Thu",
      value: 55,
      barTop: 150,
      barHeight: 88,
      labelTop: 132,
      labelLeft: 268,
      dayLabelLeft: 266,
      barLeft: 264,
      isHighlight: false,
    },
    {
      day: "Fri",
      value: 82,
      barTop: 107,
      barHeight: 131,
      labelTop: 89,
      labelLeft: 340,
      dayLabelLeft: 338,
      barLeft: 336,
      isHighlight: false,
    },
    {
      day: "Sat",
      value: 78,
      barTop: 113,
      barHeight: 125,
      labelTop: 95,
      labelLeft: 412,
      dayLabelLeft: 410,
      barLeft: 408,
      isHighlight: false,
    },
    {
      day: "Sun",
      value: 88,
      barTop: 97,
      barHeight: 141,
      labelTop: 79,
      labelLeft: 484,
      dayLabelLeft: 482,
      barLeft: 480,
      isHighlight: true,
    },
  ];

  return (
    <div className="absolute top-52 left-[252px] w-[567px] h-[314px] bg-white rounded-[20px] overflow-hidden shadow-[0px_4px_16px_#0000000d]">
      <div className="top-6 left-6 [font-family:'Inter-Bold',Helvetica] font-bold text-[#141911] text-base whitespace-nowrap absolute tracking-[0] leading-[normal]">
        7-Day Mood Trend
      </div>

      <p className="top-12 left-6 [font-family:'Inter-Regular',Helvetica] font-normal text-[#99a593] text-xs absolute tracking-[0] leading-[normal]">
        Your emotional journey this week
      </p>

      <div className="absolute top-[238px] left-6 w-[512px] h-px bg-[#e5eddd]" />

      {moodData.map((item) => (
        <div key={item.day}>
          <div
            className={`absolute w-11 rounded-[10px] ${item.isHighlight ? "bg-[#8cd644]" : "bg-[#e5f4d6]"}`}
            style={{
              top: `${item.barTop}px`,
              left: `${item.barLeft}px`,
              height: `${item.barHeight}px`,
            }}
          />
          <div
            className={`absolute [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[10px] whitespace-nowrap tracking-[0] leading-[normal] ${item.isHighlight ? "text-[#3f8c0c]" : "text-[#596654]"}`}
            style={{
              top: `${item.labelTop}px`,
              left: `${item.labelLeft}px`,
            }}
          >
            {item.value}
          </div>
          <div
            className="absolute [font-family:'Inter-Regular',Helvetica] font-normal text-[#99a593] text-[10px] whitespace-nowrap tracking-[0] leading-[normal]"
            style={{
              top: "248px",
              left: `${item.dayLabelLeft}px`,
            }}
          >
            {item.day}
          </div>
        </div>
      ))}
    </div>
  );
};
