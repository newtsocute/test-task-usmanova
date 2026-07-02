const MARQUEE_TEXT =
  "По Методу Усмановой уже тренируются более 590 000 женщин ●";

export function MarqueeSection() {
  return (
    <div className="w-full overflow-hidden bg-[#F95B80] py-[13px]">
      <div className="flex w-max animate-[marquee-scroll_25s_linear_infinite] flex-nowrap">
        <span className="whitespace-nowrap px-2 text-[20px] font-medium leading-[31px] text-white">
          {MARQUEE_TEXT} {MARQUEE_TEXT} {MARQUEE_TEXT} {MARQUEE_TEXT}
        </span>
        <span className="whitespace-nowrap px-2 text-[20px] font-medium leading-[31px] text-white">
          {MARQUEE_TEXT} {MARQUEE_TEXT} {MARQUEE_TEXT} {MARQUEE_TEXT}
        </span>
      </div>
      <style>{`
        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
