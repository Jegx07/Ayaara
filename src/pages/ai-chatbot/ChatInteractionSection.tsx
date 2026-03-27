import { useState } from "react";

const quickPrompts = [
  { emoji: "😰", label: "Feeling stressed" },
  { emoji: "📈", label: "Career advice" },
  { emoji: "😴", label: "Sleep better" },
  { emoji: "📚", label: "Study plan" },
  { emoji: "🎯", label: "Set a goal" },
];

export const ChatInteractionSection = (): JSX.Element => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleQuickPrompt = (label: string) => {
    setMessage(label);
  };

  return (
    <div className="top-[84px] left-[230px] w-[840px] h-[980px] shadow-[0px_4px_20px_#0000000f] absolute bg-white rounded-[20px] overflow-hidden">
      <div className="absolute top-0 left-0 w-[840px] h-[68px] bg-[#f4f9ef]" />

      <div className="absolute top-3.5 left-5 w-10 h-10 bg-[#8cd645] rounded-[20px]" />

      <div className="top-6 left-[30px] text-lg absolute [font-family:'Inter-Regular',Helvetica] font-normal text-[#141a12] tracking-[0] leading-[normal] whitespace-nowrap">
        🤖
      </div>

      <div className="top-[18px] left-[72px] text-[#141a12] text-[15px] absolute [font-family:'Inter-Bold',Helvetica] font-bold tracking-[0] leading-[normal] whitespace-nowrap">
        MotiAI
      </div>

      <p className="absolute top-[38px] left-[72px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3f8c0c] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
        ● Online · Always here for you
      </p>

      <button
        className="absolute top-5 left-[680px] w-[70px] h-7 bg-[#f4f9ef] rounded-[14px] cursor-pointer border-none"
        onClick={() => {}}
        aria-label="Clear chat"
      />

      <div className="absolute top-7 left-[690px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#596654] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap pointer-events-none">
        🗑 Clear
      </div>

      <button
        className="absolute top-5 left-[760px] w-[66px] h-7 bg-[#f4f9ef] rounded-[14px] cursor-pointer border-none"
        onClick={() => {}}
        aria-label="Export chat"
      />

      <div className="absolute top-7 left-[770px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#596654] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap pointer-events-none">
        ↗ Export
      </div>

      <div className="absolute top-[68px] left-0 w-[840px] h-px bg-[#e5edde]" />

      <div className="top-[86px] w-[600px] h-20 flex bg-[#f4f9ef] rounded-[14px] absolute left-5">
        <p className="mt-3.5 w-[568px] h-12 ml-4 [font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-[13px] tracking-[0] leading-[normal]">
          Hey Arjun! 👋 I&#39;m MotiAI, your personal wellness &amp; career
          companion.
          <br />I can help with mood insights, career guidance, study plans,
          stress
          <br />
          management, and more. What&#39;s on your mind today?
        </p>
      </div>

      <div className="absolute top-[182px] left-[380px] w-[440px] h-11 flex bg-[#38721e] rounded-[14px]">
        <p className="mt-3 w-[416px] h-4 ml-3 [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[normal]">
          I&#39;ve been feeling really stressed about my exams lately 😰
        </p>
      </div>

      <div className="top-[242px] w-[600px] h-24 flex bg-[#f4f9ef] rounded-[14px] absolute left-5">
        <p className="mt-3 w-[568px] h-16 ml-4 [font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-[13px] tracking-[0] leading-[normal]">
          I hear you 💙 Exam stress is totally normal. Let&#39;s try a quick
          <br />
          4-7-8 breathing exercise: breathe in 4 sec, hold 7, exhale 8.
          <br />
          Repeat 3×. Afterward, let&#39;s break down what&#39;s causing the
          stress
          <br />I can help you tackle it step by step.
        </p>
      </div>

      <div className="absolute top-[354px] left-5 w-20 h-8 flex gap-3 bg-[#f4f9ef] rounded-2xl">
        <div className="mt-[11px] w-2.5 h-2.5 ml-3 bg-[#99a593] rounded-[5px]" />
        <div className="mt-[11px] w-2.5 h-2.5 bg-[#99a593] rounded-[5px]" />
        <div className="mt-[11px] w-2.5 h-2.5 bg-[#99a593] rounded-[5px]" />
      </div>

      <div className="absolute top-[410px] left-5 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#99a593] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
        Quick prompts:
      </div>

      <div className="absolute top-[428px] left-5 flex gap-2">
        {quickPrompts.map((prompt) => (
          <button
            key={prompt.label}
            onClick={() => handleQuickPrompt(`${prompt.emoji} ${prompt.label}`)}
            className="h-7 px-2 bg-[#f4f9ef] rounded-[14px] border-none cursor-pointer flex items-center"
          >
            <span className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
              {prompt.emoji} {prompt.label}
            </span>
          </button>
        ))}
      </div>

      <div className="absolute top-[470px] left-0 w-[840px] h-px bg-[#e5edde]" />

      <div className="absolute top-[484px] left-4 w-[700px] h-12 bg-[#f4f9ef] rounded-xl" />

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message… (press Enter to send)"
        className="absolute top-[484px] left-4 w-[700px] h-12 bg-transparent rounded-xl px-4 [font-family:'Inter-Regular',Helvetica] font-normal text-[#99a593] text-[13px] tracking-[0] leading-[normal] border-none outline-none placeholder-[#99a593]"
        aria-label="Type a message"
      />

      <button
        onClick={handleSend}
        className="absolute top-[484px] left-[726px] w-24 h-12 bg-[#38721e] rounded-xl border-none cursor-pointer"
        aria-label="Send message"
      />

      <div className="absolute top-[502px] left-[748px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[13px] tracking-[0] leading-[normal] pointer-events-none">
        Send ➤
      </div>
    </div>
  );
};
