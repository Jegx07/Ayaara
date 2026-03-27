export const QuickContactsSidebarSection = (): JSX.Element => {
  const contacts = [
    {
      id: 1,
      name: "Crisis Helpline",
      phone: "1800-599-0019",
      emoji: "🆘",
      bgColor: "bg-[#ff4c4c]",
      topCard: "top-[76px]",
      topCircle: "top-[92px]",
      topEmoji: "top-24",
      topName: "top-[134px]",
      topPhone: "top-[152px]",
    },
    {
      id: 2,
      name: "Campus Health",
      phone: "044-2345-6789",
      emoji: "🏥",
      bgColor: "bg-[#d8f2ff]",
      topCard: "top-48",
      topCircle: "top-52",
      topEmoji: "top-[212px]",
      topName: "top-[250px]",
      topPhone: "top-[268px]",
    },
    {
      id: 3,
      name: "Counseling",
      phone: "044-2345-0001",
      emoji: "🧠",
      bgColor: "bg-[#ddf7b7]",
      topCard: "top-[308px]",
      topCircle: "top-[324px]",
      topEmoji: "top-[328px]",
      topName: "top-[366px]",
      topPhone: "top-96",
    },
    {
      id: 4,
      name: "Campus Security",
      phone: "044-2345-9999",
      emoji: "👮",
      bgColor: "bg-[#fff2d1]",
      topCard: "top-[424px]",
      topCircle: "top-[440px]",
      topEmoji: "top-[444px]",
      topName: "top-[482px]",
      topPhone: "top-[500px]",
    },
  ];

  return (
    <div className="top-[366px] left-[1204px] w-[190px] bg-[#191e16] overflow-hidden absolute h-[540px] rounded-[20px]">
      <div className="top-5 left-5 [font-family:'Inter-Bold',Helvetica] font-bold text-white text-sm absolute tracking-[0] leading-[normal]">
        Quick Contacts
      </div>

      <div className="top-11 left-5 [font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-[11px] whitespace-nowrap absolute tracking-[0] leading-[normal]">
        Tap to call
      </div>

      {contacts.map((contact) => (
        <div key={contact.id}>
          <div
            className={`absolute ${contact.topCard} left-4 w-[158px] h-[100px] bg-[#2d3828] rounded-[14px]`}
          />
          <div
            className={`absolute ${contact.topCircle} left-7 w-9 h-9 ${contact.bgColor} rounded-[18px]`}
          />
          <div
            className={`${contact.topEmoji} left-[50px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-lg whitespace-nowrap absolute tracking-[0] leading-[normal]`}
          >
            {contact.emoji}
          </div>
          <div
            className={`${contact.topName} left-7 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[11px] whitespace-nowrap absolute tracking-[0] leading-[normal]`}
          >
            {contact.name}
          </div>
          <div
            className={`${contact.topPhone} left-7 [font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-[11px] whitespace-nowrap absolute tracking-[0] leading-[normal]`}
          >
            {contact.phone}
          </div>
        </div>
      ))}
    </div>
  );
};
