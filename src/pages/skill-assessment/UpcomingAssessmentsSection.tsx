export const UpcomingAssessmentsSection = (): JSX.Element => {
  const assessments = [
    {
      id: 1,
      title: "DSA Mock Test",
      date: "Apr 2 · 60 min",
      bgColor: "bg-[#def7b8]",
      top: "top-[68px]",
      titleTop: "top-[78px]",
      dateTop: "top-24",
    },
    {
      id: 2,
      title: "Communication Quiz",
      date: "Apr 5 · 30 min",
      bgColor: "bg-[#e0dbff]",
      top: "top-[150px]",
      titleTop: "top-40",
      dateTop: "top-[178px]",
    },
    {
      id: 3,
      title: "DBMS Concepts",
      date: "Apr 8 · 45 min",
      bgColor: "bg-[#fff2d1]",
      top: "top-[218px]",
      titleTop: "top-[228px]",
      dateTop: "top-[246px]",
    },
  ];

  return (
    <div className="top-[602px] left-[1110px] w-[280px] h-[280px] absolute bg-white rounded-[20px] shadow-[0px_4px_20px_#0000000f]">
      <div className="absolute top-5 left-5 [font-family:'Inter-Bold',Helvetica] font-bold text-[#141a12] text-[13px] tracking-[0] leading-[normal]">
        Upcoming Assessments
      </div>

      <div className="absolute top-10 left-5 [font-family:'Inter-Regular',Helvetica] font-normal text-[#99a593] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
        Scheduled evaluations
      </div>

      {assessments.map((assessment) => (
        <div key={assessment.id}>
          <div
            className={`absolute ${assessment.top} left-4 w-[248px] h-[54px] ${assessment.bgColor} rounded-xl`}
          />
          <div
            className={`absolute ${assessment.titleTop} left-6 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#141a12] text-[13px] tracking-[0] leading-[normal]`}
          >
            {assessment.title}
          </div>
          <p
            className={`absolute ${assessment.dateTop} left-6 [font-family:'Inter-Regular',Helvetica] font-normal text-[#596654] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap`}
          >
            {assessment.date}
          </p>
        </div>
      ))}
    </div>
  );
};
