import { useState } from "react";

const moodOptions = [
  {
    emoji: "😄",
    label: "Great",
    index: 0,
    left: "left-6",
    emojiLeft: "left-11",
    labelLeft: "left-[42px]",
    labelColor: "text-[#99a593]",
  },
  {
    emoji: "😊",
    label: "Good",
    index: 1,
    left: "left-28",
    emojiLeft: "left-[134px]",
    labelLeft: "left-[136px]",
    labelColor: "text-[#3f8c0c]",
  },
  {
    emoji: "😐",
    label: "Okay",
    index: 2,
    left: "left-[200px]",
    emojiLeft: "left-56",
    labelLeft: "left-[225px]",
    labelColor: "text-[#99a593]",
  },
  {
    emoji: "😔",
    label: "Low",
    index: 3,
    left: "left-72",
    emojiLeft: "left-[310px]",
    labelLeft: "left-[316px]",
    labelColor: "text-[#99a593]",
  },
  {
    emoji: "😰",
    label: "Anxious",
    index: 4,
    left: "left-[376px]",
    emojiLeft: "left-[396px]",
    labelLeft: "left-[391px]",
    labelColor: "text-[#99a593]",
  },
];

const sleepOptions = [
  { label: "4h", left: "left-6", textLeft: "left-[42px]" },
  { label: "5h", left: "left-24", textLeft: "left-[114px]" },
  { label: "6h", left: "left-[168px]", textLeft: "left-[186px]" },
  {
    label: "7h",
    left: "left-60",
    textLeft: "left-[258px]",
    defaultSelected: true,
  },
  { label: "8h", left: "left-[312px]", textLeft: "left-[330px]" },
  { label: "9h", left: "left-96", textLeft: "left-[402px]" },
];

export const DailyCheckInSection = (): JSX.Element => {
  const [selectedMood, setSelectedMood] = useState<number>(1);
  const [stressLevel, setStressLevel] = useState<number>(51);
  const [selectedSleep, setSelectedSleep] = useState<string>("7h");
  const [notes, setNotes] = useState<string>(
    "Feeling a bit anxious about tomorrow's exam...",
  );

  const sliderThumbLeft = Math.round(24 + (stressLevel / 100) * 452 - 12);

  const handleClear = () => {
    setSelectedMood(1);
    setStressLevel(51);
    setSelectedSleep("7h");
    setNotes("");
  };

  return (
    <div className="absolute top-[92px] left-[234px] w-[500px] h-[506px] bg-white rounded-[20px] overflow-hidden shadow-[0px_4px_20px_#0000000f]">
      <div className="absolute top-0 left-0 w-[500px] h-1.5 bg-[#8cd644]" />

      <div className="top-6 left-6 [font-family:'Inter-Bold',Helvetica] font-bold text-[#141911] text-lg absolute tracking-[0] leading-[normal]">
        Today&#39;s Check-In
      </div>

      <p className="top-[52px] left-6 [font-family:'Inter-Regular',Helvetica] font-normal text-[#99a593] text-xs absolute tracking-[0] leading-[normal]">
        March 26, 2025 · Thursday
      </p>

      <div className="top-[88px] left-6 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#596654] text-[13px] absolute tracking-[0] leading-[normal]">
        How are you feeling?
      </div>

      {moodOptions.map((mood) => {
        const isSelected = selectedMood === mood.index;
        return (
          <button
            key={mood.index}
            onClick={() => setSelectedMood(mood.index)}
            className={`${mood.left} absolute top-28 w-[72px] h-[72px] rounded-2xl cursor-pointer focus:outline-none ${
              isSelected
                ? "bg-[#ddf7b7] border-2 border-solid border-[#8cd644]"
                : "bg-[#f4f9ef] border-2 border-solid border-transparent"
            }`}
          />
        );
      })}

      {moodOptions.map((mood) => (
        <div
          key={`emoji-${mood.index}`}
          className={`absolute top-[124px] ${mood.emojiLeft} [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[28px] tracking-[0] leading-[normal] whitespace-nowrap pointer-events-none`}
        >
          {mood.emoji}
        </div>
      ))}

      {moodOptions.map((mood) => {
        const isSelected = selectedMood === mood.index;
        const topValue = mood.index === 1 ? 154 : mood.index === 0 ? 152 : 156;
        return (
          <div
            key={`label-${mood.index}`}
            className={`${mood.labelLeft} [font-family:'Inter-Regular',Helvetica] font-normal text-[10px] tracking-[0] leading-[normal] whitespace-nowrap pointer-events-none ${
              isSelected ? "text-[#3f8c0c]" : mood.labelColor
            }`}
            style={{ top: `${topValue}px` }}
          >
            {mood.label}
          </div>
        );
      })}

      <div className="top-[204px] left-6 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#596654] text-[13px] absolute tracking-[0] leading-[normal]">
        Stress Level
      </div>

      <div className="absolute top-[228px] left-6 w-[452px] h-3 bg-[#f4f9ef] rounded-md" />
      <div
        className="absolute top-[228px] left-6 h-3 bg-[#8cd644] rounded-md"
        style={{ width: `${(stressLevel / 100) * 452}px` }}
      />
      <input
        type="range"
        min={0}
        max={100}
        value={stressLevel}
        onChange={(e) => setStressLevel(Number(e.target.value))}
        className="absolute top-[222px] left-6 w-[452px] h-6 opacity-0 cursor-pointer z-10"
      />
      <div
        className="absolute top-[222px] w-6 h-6 bg-white rounded-xl shadow-[0px_2px_8px_#00000026] pointer-events-none"
        style={{ left: `${sliderThumbLeft}px` }}
      />

      <div className="top-[222px] left-[440px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#3f8c0c] text-xs absolute tracking-[0] leading-[normal]">
        {stressLevel}%
      </div>

      <div className="top-[268px] left-6 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#596654] text-[13px] absolute tracking-[0] leading-[normal]">
        Sleep Last Night
      </div>

      {sleepOptions.map((option) => {
        const isSelected = selectedSleep === option.label;
        return (
          <button
            key={option.label}
            onClick={() => setSelectedSleep(option.label)}
            className={`absolute top-[292px] ${option.left} w-[60px] h-9 rounded-[10px] cursor-pointer focus:outline-none ${
              isSelected ? "bg-[#8cd644]" : "bg-[#f4f9ef]"
            }`}
          />
        );
      })}

      {sleepOptions.map((option) => {
        const isSelected = selectedSleep === option.label;
        return (
          <div
            key={`sleep-label-${option.label}`}
            className={`top-[302px] ${option.textLeft} text-[13px] absolute tracking-[0] leading-[normal] pointer-events-none ${
              isSelected
                ? "[font-family:'Inter-Bold',Helvetica] font-bold text-[#141911]"
                : "[font-family:'Inter-Regular',Helvetica] font-normal text-[#596654]"
            }`}
          >
            {option.label}
          </div>
        );
      })}

      <div className="top-[348px] left-6 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#596654] text-[13px] absolute tracking-[0] leading-[normal]">
        Notes
      </div>

      <div className="absolute top-[372px] left-6 w-[452px] h-[89px] bg-[#f4f9ef] rounded-xl" />

      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="absolute top-[390px] left-9 w-[400px] h-[55px] bg-transparent [font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-xs tracking-[0] leading-[normal] resize-none focus:outline-none z-10"
        placeholder="Add your notes here..."
      />

      <button
        className="absolute top-[413px] left-[30px] w-[200px] h-10 bg-[#141911] rounded-[20px] cursor-pointer focus:outline-none"
        onClick={() => {}}
      />

      <div className="top-[421px] left-[62px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-sm absolute tracking-[0] leading-[normal] pointer-events-none">
        Save Check-in ✓
      </div>

      <button
        className="absolute top-[413px] left-[250px] w-[140px] h-10 bg-[#f4f9ef] rounded-[20px] cursor-pointer focus:outline-none"
        onClick={handleClear}
      />

      <div className="top-[421px] left-[265px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#596654] text-sm absolute tracking-[0] leading-[normal] pointer-events-none">
        Clear
      </div>
    </div>
  );
};
