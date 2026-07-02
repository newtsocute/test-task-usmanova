import Image from "next/image";

interface BenefitItem {
  icon: string;
  title: string;
  text: string;
}

const BENEFITS: BenefitItem[] = [
  {
    icon: "/images/usmanovafit/method-july/benefits/icon-energy.png",
    title: "Энергия",
    text: "Утро начинается легко, сил хватает на весь день. Как пишут ученицы, «я просто ожила».",
  },
  {
    icon: "/images/usmanovafit/method-july/benefits/icon-lightness.png",
    title: "Лёгкость и форма",
    text: "Уходят объёмы, одежда сидит свободнее, тело подтянуто.",
  },
  {
    icon: "/images/usmanovafit/method-july/benefits/icon-confidence.png",
    title: "Уверенность",
    text: "Спорт становится в кайф, а не в наказание. Появляется гордость за себя и привычка, которая остаётся.",
  },
];

export function BenefitsSection() {
  return (
    <section className="bg-[#f3f3f3] px-4 py-16 md:py-20">
      <h2 className="text-center text-[28px] font-medium leading-[1.2] text-black md:text-[32px] md:leading-[38.4px]">
        С МЕТОДОМ МЕНЯЕТСЯ
        <br />
        <span className="text-[#F95B80]">НЕ ТОЛЬКО ФИГУРА</span>
      </h2>

      <p className="mx-auto mt-6 max-w-xl text-center text-[16px] leading-[1.5] text-black md:text-[18px]">
        Тело это то, что можно взять под контроль уже за месяц.
        <br />
        А следом возвращается всё остальное.
      </p>

      <div className="mx-auto mt-10 max-w-[600px] rounded-[30px] bg-white p-[15px]">
        <ul className="flex flex-col gap-4 px-2 pt-3 sm:gap-5 sm:px-3 sm:pt-4">
          {BENEFITS.map((benefit) => (
            <li key={benefit.title} className="flex items-start gap-3 sm:gap-4">
              <Image
                src={benefit.icon}
                alt=""
                width={30}
                height={30}
                className="mt-0.5 h-6 w-6 shrink-0 object-contain sm:h-[30px] sm:w-[30px]"
              />
              <div>
                <strong className="block text-[16px] font-bold leading-snug text-black sm:text-[18px]">
                  {benefit.title}
                </strong>
                <span className="text-[14px] leading-[1.4] text-[#555555] sm:text-[16px]">
                  {benefit.text}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <Image
          src="/images/usmanovafit/method-july/benefits/photo.png"
          alt="Тренировка по методу Кати Усмановой"
          width={1077}
          height={577}
          className="mt-4 h-auto w-full rounded-2xl object-cover"
        />
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="#"
          className="rounded-full bg-[#F95B80] px-10 py-4 text-[14px] font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90 sm:text-[16px]"
        >
          Хочу так же
        </a>
      </div>
    </section>
  );
}
