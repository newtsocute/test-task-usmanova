import Image from "next/image";

const BEFORE_AFTER_IMAGES = Array.from({ length: 11 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return `/images/usmanovafit/method-july/testimonials/before-after-${number}.jpg`;
});

const CHAT_CARD_IMAGES = Array.from({ length: 4 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return `/images/usmanovafit/method-july/testimonials/chat-card-${number}.png`;
});

function ScrollHint() {
  return (
    <p className="mt-3 text-center text-[14px] font-medium text-[#F95B80]">
      Листайте вправо →
    </p>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-[#f3f3f3] px-4 py-16 md:py-20">
      <h2 className="text-center text-[28px] font-medium leading-[1.2] text-black md:text-[32px] md:leading-[38.4px]">
        ЖЕНЩИНЫ, КОТОРЫЕ
        <br />
        <span className="text-[#F95B80]">УЖЕ ПРОШЛИ МЕТОД</span>
      </h2>

      <p className="mx-auto mt-6 max-w-xl text-center text-[16px] leading-[1.5] text-black md:text-[18px]">
        Обычные женщины без зала и свободного времени. Типичный результат за
        курс: минус 3-5 кг и до 6 см с талии. У многих больше.
      </p>

      <div className="mx-auto mt-10 max-w-[600px] rounded-[30px] bg-white p-[20px] md:p-[30px]">
        <div className="scrollbar-none flex snap-x snap-mandatory gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {BEFORE_AFTER_IMAGES.map((src) => (
            <Image
              key={src}
              src={src}
              alt="Результат до и после метода Усмановой"
              width={300}
              height={300}
              className="h-[280px] w-[280px] shrink-0 snap-start rounded-[20px] object-cover sm:h-[300px] sm:w-[300px]"
            />
          ))}
        </div>
        <ScrollHint />
      </div>

      <div className="mx-auto mt-5 max-w-[600px] rounded-[30px] bg-white p-[20px] md:p-[30px]">
        <div className="scrollbar-none flex snap-x snap-mandatory gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CHAT_CARD_IMAGES.map((src) => (
            <Image
              key={src}
              src={src}
              alt="Отзыв в переписке от ученицы метода"
              width={916}
              height={626}
              className="h-[164px] w-[240px] shrink-0 snap-start rounded-[16px] object-cover sm:h-[178px] sm:w-[260px] sm:rounded-[20px]"
            />
          ))}
        </div>
        <ScrollHint />
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="#"
          className="rounded-full bg-[#F95B80] px-10 py-4 text-[14px] font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90 sm:text-[16px]"
        >
          ХОЧУ ТАКОЙ ЖЕ РЕЗУЛЬТАТ
        </a>
      </div>
    </section>
  );
}
