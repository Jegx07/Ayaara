export const MoodAnalyticsSection = (): JSX.Element => {
  const stats = [
    { value: "7.4", label: "Avg Mood", color: "#8cd644" },
    { value: "61%", label: "Avg Stress", color: "#fff2d1" },
    { value: "6.2h", label: "Avg Sleep", color: "#d8f2ff" },
    { value: "22", label: "Entries", color: "#e0dbff" },
  ];

  const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];

  const heatmapRows = [
    [
      { value: 6, bg: "#609236", textColor: "#141911" },
      { value: 8, bg: "#76b43d", textColor: "#141911" },
      { value: 5, bg: "#558233", textColor: "#728c6b" },
      { value: 9, bg: "#81c541", textColor: "#141911" },
      { value: 7, bg: "#6ba33a", textColor: "#141911" },
      { value: 4, bg: "#4a712f", textColor: "#728c6b" },
      { value: 9, bg: "#7bbc3f", textColor: "#141911" },
    ],
    [
      { value: 5, bg: "#558233", textColor: "#728c6b" },
      { value: 6, bg: "#609236", textColor: "#141911" },
      { value: 9, bg: "#81c541", textColor: "#141911" },
      { value: 7, bg: "#6ba33a", textColor: "#141911" },
      { value: 8, bg: "#76b43d", textColor: "#141911" },
      { value: 6, bg: "#609236", textColor: "#141911" },
      { value: 5, bg: "#558233", textColor: "#728c6b" },
    ],
    [
      { value: 7, bg: "#6ba33a", textColor: "#141911" },
      { value: 4, bg: "#4a712f", textColor: "#728c6b" },
      { value: 6, bg: "#609236", textColor: "#141911" },
      { value: 9, bg: "#7bbc3f", textColor: "#141911" },
      { value: 5, bg: "#558233", textColor: "#728c6b" },
      { value: 9, bg: "#81c541", textColor: "#141911" },
      { value: 7, bg: "#6ba33a", textColor: "#141911" },
    ],
    [
      { value: 8, bg: "#76b43d", textColor: "#141911" },
      { value: 9, bg: "#81c541", textColor: "#141911" },
      { value: 7, bg: "#6ba33a", textColor: "#141911" },
      { value: 6, bg: "#609236", textColor: "#141911" },
      { value: 9, bg: "#7bbc3f", textColor: "#141911" },
      { value: 7, bg: "#6ba33a", textColor: "#141911" },
      { value: 6, bg: "#609236", textColor: "#141911" },
    ],
  ];

  const commonMoods = [
    { emoji: "😊", label: "Good · 12 days" },
    { emoji: "😐", label: "Okay · 8 days" },
    { emoji: "😔", label: "Low · 4 days" },
  ];

  const statLeftPositions = [
    "left-7",
    "left-[184px]",
    "left-[340px]",
    "left-[496px]",
  ];
  const statValueLeftPositions = [
    "left-11",
    "left-[200px]",
    "left-[356px]",
    "left-[512px]",
  ];

  const dayLabelLeftPositions = [
    "left-9",
    "left-[122px]",
    "left-52",
    "left-[294px]",
    "left-[380px]",
    "left-[466px]",
    "left-[552px]",
  ];

  const rowTopPositions = [220, 258, 296, 334];
  const rowTextTopPositions = [228, 266, 304, 342];
  const cellLeftPositions = [28, 114, 200, 286, 372, 458, 544];
  const cellTextLeftPositions = [44, 130, 216, 302, 388, 474, 560];

  const moodCardLeftPositions = ["left-7", "left-[238px]", "left-[448px]"];
  const moodEmojiLeftPositions = [
    "left-[42px]",
    "left-[252px]",
    "left-[462px]",
  ];
  const moodLabelLeftPositions = [
    "left-[68px]",
    "left-[278px]",
    "left-[488px]",
  ];

  return (
    <div className="absolute top-[92px] left-[748px] w-[680px] h-[506px] bg-[#191e16] rounded-[20px] overflow-hidden">
      <div className="top-6 left-7 [font-family:'Inter-Bold',Helvetica] font-bold text-white text-lg absolute tracking-[0] leading-[normal]">
        Mood Analytics
      </div>

      <div className="top-[50px] left-7 [font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-xs absolute tracking-[0] leading-[normal]">
        Last 30 days overview
      </div>

      {stats.map((stat, i) => (
        <div key={i}>
          <div
            className={`absolute top-[86px] ${statLeftPositions[i]} w-[140px] h-[76px] bg-[#2d3828] rounded-[14px]`}
          />
          <div
            className={`top-[98px] ${statValueLeftPositions[i]} [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[22px] absolute tracking-[0] leading-[normal]`}
            style={{ color: stat.color }}
          >
            {stat.value}
          </div>
          <div
            className={`top-[124px] ${statValueLeftPositions[i]} [font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-[11px] whitespace-nowrap absolute tracking-[0] leading-[normal]`}
          >
            {stat.label}
          </div>
        </div>
      ))}

      <p className="top-[182px] left-7 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[13px] absolute tracking-[0] leading-[normal]">
        Mood Heatmap · Last 28 Days
      </p>

      {dayLabels.map((day, i) => (
        <div
          key={i}
          className={`top-[204px] ${dayLabelLeftPositions[i]} [font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-[10px] whitespace-nowrap absolute tracking-[0] leading-[normal]`}
        >
          {day}
        </div>
      ))}

      {heatmapRows.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div key={`${rowIndex}-${colIndex}`}>
            <div
              className="absolute w-[70px] h-7 rounded-lg"
              style={{
                top: `${rowTopPositions[rowIndex]}px`,
                left: `${cellLeftPositions[colIndex]}px`,
                backgroundColor: cell.bg,
              }}
            />
            <div
              className="[font-family:'Inter-Regular',Helvetica] font-normal text-[10px] whitespace-nowrap absolute tracking-[0] leading-[normal]"
              style={{
                top: `${rowTextTopPositions[rowIndex]}px`,
                left: `${cellTextLeftPositions[colIndex]}px`,
                color: cell.textColor,
              }}
            >
              {cell.value}
            </div>
          </div>
        )),
      )}

      <div className="top-[382px] left-7 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-xs absolute tracking-[0] leading-[normal]">
        Most Common This Month
      </div>

      {commonMoods.map((mood, i) => (
        <div key={i}>
          <div
            className={`absolute top-[404px] ${moodCardLeftPositions[i]} w-[190px] h-[38px] bg-[#2d3828] rounded-xl`}
          />
          <div
            className={`top-[414px] ${moodEmojiLeftPositions[i]} [font-family:'Inter-Regular',Helvetica] font-normal text-black text-lg whitespace-nowrap absolute tracking-[0] leading-[normal]`}
          >
            {mood.emoji}
          </div>
          <div
            className={`top-[416px] ${moodLabelLeftPositions[i]} [font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-[11px] whitespace-nowrap absolute tracking-[0] leading-[normal]`}
          >
            {mood.label}
          </div>
        </div>
      ))}
    </div>
  );
};
