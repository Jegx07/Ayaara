import { useNavigate } from "react-router-dom";

export const CareerOverviewHeaderSection = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="absolute top-0 left-[220px] w-[1220px] h-[72px] bg-white">
      <div className="absolute top-[22px] left-8 [font-family:'Inter-Bold',Helvetica] font-bold text-[#141a12] text-[22px] tracking-[0] leading-[normal]">
        Career Assistant
      </div>

      <p className="absolute top-12 left-8 [font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-[13px] tracking-[0] leading-[normal]">
        AI-powered career guidance personalised for you
      </p>

      <button
        className="absolute top-[19px] left-[1029px] w-[138px] h-9 bg-[#8cd645] rounded-[18px]"
        onClick={() => navigate("/chatbot")}
      />

      <div className="absolute top-7 left-[1049px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#141a12] text-[13px] tracking-[0] leading-[normal]">
        🤖 Chat with AI
      </div>

      <div className="absolute top-[18px] left-[1178px] w-9 h-9 bg-[#def7b8] rounded-[18px]" />

      <div className="top-[30px] left-[1189px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#141a12] text-sm whitespace-nowrap absolute tracking-[0] leading-[normal]">
        🔔
      </div>
    </div>
  );
};
