import Image from "next/image";
import type { ReactNode } from "react";

interface WhyItem {
  title: string;
  body: ReactNode;
}

const WHY_ITEMS: WhyItem[] = [
  {
    title: "Диеты",
    body: (
      <>
        загоняют тело в режим голода, метаболизм замедляется, потом срыв и
        вес возвращается с плюсом.{" "}
        <strong className="font-bold text-[#F95B80]">В Методе</strong> вы
        едите 4 раза в день, не голодаете, а метаболизм наоборот ускоряется.
      </>
    ),
  },
  {
    title: "Спортзал",
    body: (
      <>
        это дорога, расписание и непонятно что делать. Бросаете через месяц.{" "}
        <strong className="font-bold text-[#F95B80]">В Методе</strong>{" "}
        тренировки по 20-40 минут дома, чёткие инструкции, занимаетесь когда
        удобно.
      </>
    ),
  },
  {
    title: "Бесплатные видео",
    body: (
      <>
        это хаос без системы и прогрессии, а значит без результата.{" "}
        <strong className="font-bold text-[#F95B80]">В Методе</strong>{" "}
        пошаговая программа. Каждая тренировка на своём месте, нагрузка
        растёт постепенно.
      </>
    ),
  },
];

export function WhyItWorksSection() {
  return (
    <section className="px-4 py-16 md:py-20">
      <h2 className="text-center text-[28px] font-medium leading-[1.2] md:text-[32px] md:leading-[38.4px]">
        <span className="text-[#F95B80]">ПОЧЕМУ МЕТОД РАБОТАЕТ ТАМ,</span>
        <br />
        <span className="text-black">ГДЕ ДИЕТЫ И ЗАЛЫ НЕ СРАБОТАЛИ</span>
      </h2>

      <div className="mx-auto mt-8 max-w-[600px] rounded-[30px] bg-white p-[30px] md:rounded-[40px]">
        <ul className="flex flex-col gap-6">
          {WHY_ITEMS.map((item) => (
            <li key={item.title} className="flex items-start gap-3 sm:gap-4">
              <Image
                src="/images/usmanovafit/method-july/why-works/bullet-arrow-icon.png"
                alt=""
                width={30}
                height={30}
                className="mt-0.5 h-[30px] w-[30px] shrink-0 object-contain"
              />
              <div>
                <strong className="block text-[16px] font-bold leading-snug text-black sm:text-[18px]">
                  {item.title}
                </strong>
                <span className="text-[14px] leading-[1.4] text-[#555555] sm:text-[16px]">
                  {item.body}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="#"
          className="rounded-full bg-[#F95B80] px-10 py-4 text-[14px] font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90 sm:text-[16px]"
        >
          НАЧАТЬ ПО СИСТЕМЕ
        </a>
      </div>
    </section>
  );
}
