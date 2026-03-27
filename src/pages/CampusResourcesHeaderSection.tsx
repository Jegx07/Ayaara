import { useState } from "react";

export const CampusResourcesHeaderSection = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="left-[220px] w-[1220px] h-[72px] bg-white absolute top-0">
      <div className="top-[22px] left-8 [font-family:'Inter-Bold',Helvetica] font-bold text-[#141911] text-[22px] absolute tracking-[0] leading-[normal]">
        Campus Resources
      </div>

      <p className="top-12 left-8 [font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-[13px] absolute tracking-[0] leading-[normal]">
        Your complete mental health support directory
      </p>

      <div className="absolute top-[18px] left-[950px] w-60 h-9 bg-[#ddf7b7] rounded-[18px] flex items-center px-3 gap-2">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <circle cx="6" cy="6" r="5" stroke="#596654" strokeWidth="1.5" />
          <line
            x1="10.0607"
            y1="10"
            x2="13"
            y2="12.9393"
            stroke="#596654"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search resources..."
          className="bg-transparent w-full [font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-[13px] tracking-[0] leading-[normal] outline-none placeholder-[#596654]"
        />
      </div>
    </div>
  );
};
