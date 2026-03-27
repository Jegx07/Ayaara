export const CommunityMetricsSection = (): JSX.Element => {
  const metrics = [
    {
      value: "1,247",
      label: "Active Students",
      valueColor: "text-[#8cd644]",
      bgLeft: "left-6",
      valueLeft: "left-9",
      labelLeft: "left-9",
      top: "top-[58px]",
      topValue: "top-[66px]",
      topLabel: "top-[88px]",
    },
    {
      value: "89",
      label: "Posts Shared",
      valueColor: "text-[#e0dbff]",
      bgLeft: "left-40",
      valueLeft: "left-[172px]",
      labelLeft: "left-[172px]",
      top: "top-14",
      topValue: "top-[66px]",
      topLabel: "top-[88px]",
    },
    {
      value: "342",
      label: "Peer Connections",
      valueColor: "text-[#fff2d1]",
      bgLeft: "left-[296px]",
      valueLeft: "left-[308px]",
      labelLeft: "left-[308px]",
      top: "top-14",
      topValue: "top-[66px]",
      topLabel: "top-[88px]",
    },
  ];

  return (
    <div className="top-[878px] left-[972px] w-[440px] h-[180px] bg-[#191e16] absolute rounded-[20px] overflow-hidden">
      <div className="top-6 left-6 [font-family:'Inter-Bold',Helvetica] font-bold text-white text-sm absolute tracking-[0] leading-[normal]">
        Community Today
      </div>

      {metrics.map((metric, index) => (
        <div key={index}>
          <div
            className={`absolute ${metric.top} ${metric.bgLeft} w-[120px] h-[60px] bg-[#2d3828] rounded-xl`}
          />
          <div
            className={`${metric.topValue} ${metric.valueLeft} [font-family:'Inter-ExtraBold',Helvetica] font-extrabold ${metric.valueColor} text-lg absolute tracking-[0] leading-[normal]`}
          >
            {metric.value}
          </div>
          <div
            className={`${metric.topLabel} ${metric.labelLeft} [font-family:'Inter-Regular',Helvetica] font-normal text-[#728c6b] text-[10px] whitespace-nowrap absolute tracking-[0] leading-[normal]`}
          >
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  );
};
