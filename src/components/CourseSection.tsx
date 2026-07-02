import type { CourseSectionData } from "@/types/content";

import { MarathonCard } from "@/components/MarathonCard";

export function CourseSection({ title, cards }: CourseSectionData) {
  return (
    <section className="mx-auto w-full max-w-[600px] px-4 py-10 font-[Gilroy,Arial,sans-serif]">
      <h2 className="mb-10 text-center font-[Gilroy,Roboto,sans-serif] text-[32px] leading-[38.4px] font-medium text-black">
        {title}
      </h2>
      <div className="flex flex-col gap-5">
        {cards.map((card) => (
          <MarathonCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}
