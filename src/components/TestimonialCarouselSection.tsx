import Image from "next/image";

const TESTIMONIAL_COUNT = 14;

const testimonials = Array.from({ length: TESTIMONIAL_COUNT }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return {
    src: `/images/usmanovafit/testimonials/testimonial-${num}.jpg`,
    alt: `Отзыв клиентки #${i + 1}`,
  };
});

export function TestimonialCarouselSection() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-[28px] font-medium leading-tight text-black md:text-[32px]">
          Девушки, которые тренируются
          <br />с Катей <span className="text-[#f66297]">прямо сейчас</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[16px] text-neutral-900 md:text-[18px]">
          Реальные истории, реальные результаты. Присоединяйся — следующая
          история будет твоей.
        </p>

        <div className="mx-auto mt-10 max-w-[650px] rounded-[36px] bg-white p-[30px]">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.src}
                className="w-[180px] shrink-0 snap-start"
              >
                <Image
                  src={testimonial.src}
                  alt={testimonial.alt}
                  width={180}
                  height={320}
                  className="h-[320px] w-[180px] rounded-[22px] object-cover"
                />
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-[#f66297]">
            Листайте вправо →
          </p>
        </div>
      </div>
    </section>
  );
}
