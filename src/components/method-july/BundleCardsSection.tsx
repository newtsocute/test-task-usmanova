import Image from "next/image";

interface BundleCard {
  cover: string;
  alt: string;
  description: string;
}

const BUNDLE_CARDS: BundleCard[] = [
  {
    cover: "/images/usmanovafit/method-july/bundle-cards/card-method.png",
    alt: "Обновлённый метод Усмановой",
    description:
      "20 тренировок с Катей по 20-40 минут. 5 дней занимаетесь, 2 дня растяжка и восстановление. Питание расписано по неделям, с меню и списком покупок. Включаете видео и повторяете за Катей.",
  },
  {
    cover:
      "/images/usmanovafit/method-july/bundle-cards/card-nutrition-lectures.png",
    alt: "5 лекций по питанию",
    description:
      "Почему вечером тянет на сладкое и как это убрать без силы воли. Гормоны голода и сытости простым языком.",
  },
  {
    cover: "/images/usmanovafit/method-july/bundle-cards/card-gusakova.png",
    alt: "Курс по питанию Гусаковой",
    description:
      "42 урока от нутрициолога Кати. Один раз разобрались и закрыли тему еды навсегда. Без диет и подсчёта калорий.",
  },
  {
    cover: "/images/usmanovafit/method-july/bundle-cards/card-svobody.png",
    alt: "5 тренировок Стаса Свободы",
    description:
      "Плоский живот и ровная осанка за счёт дыхания, а не сотни скручиваний. По 10-15 минут, снимают стресс и зажимы в спине.",
  },
  {
    cover: "/images/usmanovafit/method-july/bundle-cards/card-fatburn.png",
    alt: "Курс жиросжигающий",
    description:
      "Отдельный курс на максимальное жиросжигание, три уровня каждый по 45 дней. Идёте по своему: умеренный для старта, интенсивный и силовой для серьёзного результата.",
  },
];

export function BundleCardsSection() {
  return (
    <section className="bg-[#f3f3f3] px-4 py-16 md:py-20">
      <h2 className="text-center text-[28px] font-medium leading-[1.2] text-black md:text-[32px] md:leading-[38.4px]">
        <span className="text-[#F95B80]">ВСЁ ДЛЯ РЕЗУЛЬТАТА</span>
        <br />
        УЖЕ СОБРАНО ВНУТРИ
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-center text-[16px] leading-[1.4] text-black md:text-[18px]">
        Обновлённый Метод пересобрали по отзывам 10 000 учениц,
        <br className="hidden md:block" />
        чтобы вы дошли до конца.
        <br className="hidden md:block" />
        Ничего не нужно докупать и придумывать.
      </p>

      <div className="mx-auto mt-10 flex max-w-[1200px] flex-wrap justify-center gap-10">
        {BUNDLE_CARDS.map((card) => (
          <div
            key={card.cover}
            className="w-full flex-shrink-0 flex-grow-0 overflow-hidden rounded-[30px] bg-white md:w-[calc(33.3333%-26.6667px)] md:max-w-[380px]"
          >
            <Image
              src={card.cover}
              alt={card.alt}
              width={1140}
              height={582}
              className="block h-auto w-full"
            />
            <div className="bg-white px-5 py-4 pb-6 text-[16px] leading-[1.4] text-black/80">
              <ul className="m-0 my-4 list-none p-0">
                <li className="relative mb-2.5 pl-[34px]">
                  <Image
                    src="/images/usmanovafit/method-july/bundle-cards/bullet-arrow-icon.png"
                    alt=""
                    width={20}
                    height={20}
                    className="absolute left-0 top-0 h-5 w-5"
                  />
                  {card.description}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="#"
          className="rounded-full bg-[#F95B80] px-10 py-4 text-[14px] font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90 sm:text-[16px]"
        >
          Выбрать тариф
        </a>
      </div>
    </section>
  );
}
