import React from "react";

interface SkillLabel {
  emoji: string;
  label: string;
  percentage: string;
  bgTop: string;
  bgLeft: string;
  bgWidth: string;
  textTop: string;
  textLeft: string;
  valueTop: string;
  valueLeft: string;
}

const skills: SkillLabel[] = [
  {
    emoji: "💻",
    label: "Programming",
    percentage: "78%",
    bgTop: "top-[140px]",
    bgLeft: "left-60",
    bgWidth: "w-[110px]",
    textTop: "top-[148px]",
    textLeft: "left-[246px]",
    valueTop: "top-[158px]",
    valueLeft: "left-[246px]",
  },
  {
    emoji: "🧮",
    label: "Mathematics",
    percentage: "65%",
    bgTop: "top-40",
    bgLeft: "left-[440px]",
    bgWidth: "w-[110px]",
    textTop: "top-[168px]",
    textLeft: "left-[446px]",
    valueTop: "top-[178px]",
    valueLeft: "left-[446px]",
  },
  {
    emoji: "🗣",
    label: "Communication",
    percentage: "82%",
    bgTop: "top-[260px]",
    bgLeft: "left-[480px]",
    bgWidth: "w-[110px]",
    textTop: "top-[268px]",
    textLeft: "left-[486px]",
    valueTop: "top-[278px]",
    valueLeft: "left-[486px]",
  },
  {
    emoji: "🤝",
    label: "Teamwork",
    percentage: "88%",
    bgTop: "top-[380px]",
    bgLeft: "left-[400px]",
    bgWidth: "w-[110px]",
    textTop: "top-[388px]",
    textLeft: "left-[406px]",
    valueTop: "top-[398px]",
    valueLeft: "left-[406px]",
  },
  {
    emoji: "🧠",
    label: "Critical Thinking",
    percentage: "71%",
    bgTop: "top-[380px]",
    bgLeft: "left-40",
    bgWidth: "w-[110px]",
    textTop: "top-[388px]",
    textLeft: "left-[166px]",
    valueTop: "top-[398px]",
    valueLeft: "left-[166px]",
  },
  {
    emoji: "⏱",
    label: "Time Mgmt",
    percentage: "60%",
    bgTop: "top-[260px]",
    bgLeft: "left-[60px]",
    bgWidth: "w-[110px]",
    textTop: "top-[268px]",
    textLeft: "left-[66px]",
    valueTop: "top-[278px]",
    valueLeft: "left-[66px]",
  },
];

export const SkillRadarSection = (): JSX.Element => {
  return (
    <div className="top-[222px] left-[252px] w-[560px] h-[360px] absolute bg-white rounded-[20px] shadow-[0px_4px_20px_#0000000f]">
      <div className="top-6 left-6 text-[#141a12] text-base whitespace-nowrap absolute [font-family:'Inter-Bold',Helvetica] font-bold tracking-[0] leading-[normal]">
        Skill Radar
      </div>

      <p className="absolute top-12 left-6 [font-family:'Inter-Regular',Helvetica] font-normal text-[#99a593] text-xs tracking-[0] leading-[normal]">
        Visual breakdown of your core competencies
      </p>

      {skills.map((skill, index) => (
        <React.Fragment key={index}>
          <div
            className={`absolute ${skill.bgTop} ${skill.bgLeft} ${skill.bgWidth} h-7 bg-[#f4f9ef] rounded-lg`}
          />
          <div
            className={`${skill.textTop} ${skill.textLeft} [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#596654] text-[10px] whitespace-nowrap absolute tracking-[0] leading-[normal]`}
          >
            {skill.emoji} {skill.label}
          </div>
          <div
            className={`${skill.valueTop} ${skill.valueLeft} [font-family:'Inter-Bold',Helvetica] font-bold text-[#38721e] text-[10px] absolute tracking-[0] leading-[normal] whitespace-nowrap`}
          >
            {skill.percentage}
          </div>
        </React.Fragment>
      ))}

      <div className="absolute top-[225px] left-[210px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#141a12] text-[13px] tracking-[0] leading-[normal]">
        Overall Score
      </div>

      <div className="top-[243px] left-[220px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#3f8c0c] text-[22px] absolute tracking-[0] leading-[normal]">
        74 / 100
      </div>
    </div>
  );
};
