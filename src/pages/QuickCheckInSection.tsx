import { useState } from "react";

const moods = [
  { emoji: "😄", label: "Great" },
  { emoji: "😊", label: "Good" },
  { emoji: "😐", label: "Neutral" },
  { emoji: "😔", label: "Sad" },
  { emoji: "😰", label: "Anxious" },
];

const moodBgPositions = [24, 83, 148, 210, 272];

export const QuickCheckInSection = (): JSX.Element => {
  const [selectedMood, setSelectedMood] = useState<number>(1);
  const [note, setNote] = useState<string>("");
  const [stressLevel, setStressLevel] = useState<number>(180);

  return (
    <div className="absolute top-[544px] left-[632px] w-[360px] h-[300px] bg-[#ddf7b7] rounded-[20px] overflow-hidden">
      <div className="top-6 left-6 [font-family:'Inter-Bold',Helvetica] font-bold text-[#141911] text-[15px] whitespace-nowrap absolute tracking-[0] leading-[normal]">
        Quick Check-in
      </div>

      <p className="top-12 left-6 [font-family:'Inter-Regular',Helvetica] font-normal text-[#3f8c0c] text-xs absolute tracking-[0] leading-[normal]">
        How are you feeling right now?
      </p>

      {moods.map((mood, index) => (
        <button
          key={index}
          onClick={() => setSelectedMood(index)}
          aria-label={mood.label}
          className="absolute focus:outline-none"
          style={{ top: "84px", left: `${moodBgPositions[index]}px` }}
        >
          <div
            className={`w-[50px] h-[50px] rounded-[25px] ${
              selectedMood === index
                ? "bg-white shadow-[0px_2px_8px_#0000001a]"
                : "bg-[#ddf7b7]"
            }`}
          />
          <span
            className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-2xl whitespace-nowrap absolute tracking-[0] leading-[normal]"
            style={{ top: "10px", left: "10px" }}
          >
            {mood.emoji}
          </span>
        </button>
      ))}

      <div className="top-[152px] left-6 [font-family:'Inter-Medium',Helvetica] font-medium text-[#3f8c0c] text-xs absolute tracking-[0] leading-[normal]">
        Stress today:
      </div>

      <div className="w-[312px] bg-[#bfea8c] absolute top-[172px] left-6 h-2.5 rounded-[5px]" />
      <div
        className="bg-[#8cd644] absolute top-[172px] left-6 h-2.5 rounded-[5px]"
        style={{ width: `${stressLevel}px` }}
      />

      <input
        type="range"
        min={0}
        max={312}
        value={stressLevel}
        onChange={(e) => setStressLevel(Number(e.target.value))}
        className="absolute top-[168px] left-6 w-[312px] opacity-0 cursor-pointer h-4"
        aria-label="Stress level"
      />

      <div className="absolute top-[200px] left-6 w-[312px] h-12 bg-white rounded-[14px]" />

      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add a note... (optional)"
        className="top-[218px] left-9 [font-family:'Inter-Regular',Helvetica] font-normal text-[#99a593] text-xs absolute tracking-[0] leading-[normal] bg-transparent border-none outline-none w-[280px]"
        aria-label="Add a note"
      />

      <button
        className="absolute top-[262px] left-6 w-[130px] h-7 bg-[#3f8c0c] rounded-[14px] focus:outline-none hover:bg-[#357a0a] transition-colors"
        aria-label="Log Check-in"
      >
        <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-xs tracking-[0] leading-[normal]">
          Log Check-in
        </span>
      </button>
    </div>
  );
};
