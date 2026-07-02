"use client";

import { useEffect, useState } from "react";

import { PricingCard, type PricingCardProps } from "./PricingCard";

const TARIFFS: PricingCardProps[] = [
  {
    title: "Лёгкий старт",
    highlighted: false,
    priceNew: "3 140 ₽",
    priceOld: "6 400 ₽",
    discount: "51%",
    period: "2 месяца",
    items: [
      "Обновлённый Метод: 20 тренировок, питание по неделям, растяжка и восстановление",
      "5 лекций по питанию: уходит тяга к сладкому",
    ],
    buttonText: "ЗАБРАТЬ НАБОР",
  },
  {
    title: "Преображение",
    badge: "ВЫБОР БОЛЬШИНСТВА",
    highlighted: true,
    priceNew: "5 490 ₽",
    priceOld: "22 380 ₽",
    discount: "75%",
    period: "3 месяца",
    items: [
      "Обновлённый Метод: 20 тренировок, питание по неделям, растяжка и восстановление",
      "5 лекций по питанию: уходит тяга к сладкому",
      "Курс питания с Вероникой Гусаковой: 42 урока без диет",
      "5 тренировок Стаса Свободы: плоский живот и осанка через дыхание",
    ],
    buttonText: "ЗАБРАТЬ НАБОР",
  },
  {
    title: "Максимум",
    badge: "МАКСИМАЛЬНЫЙ РЕЗУЛЬТАТ",
    highlighted: true,
    priceNew: "6 890 ₽",
    priceOld: "37 280 ₽",
    discount: "82%",
    period: "6 месяцев",
    items: [
      "Обновлённый Метод: 20 тренировок, питание по неделям, растяжка и восстановление",
      "5 лекций по питанию: уходит тяга к сладкому",
      "Курс питания с Вероникой Гусаковой: 42 урока без диет",
      "5 тренировок Стаса Свободы: плоский живот и осанка через дыхание",
      "Курс «Жиросжигающий»: три уровня по 45 дней на максимальное жиросжигание",
    ],
    buttonText: "ЗАБРАТЬ НАБОР",
  },
];

const POINT_HOUR = 24;

function getTargetDate(): Date {
  const target = new Date();
  target.setHours(POINT_HOUR - 1, 59, 59);
  if (new Date().getHours() >= POINT_HOUR) {
    target.setDate(target.getDate() + 1);
  }
  return target;
}

function pluralize(n: number, [one, few, many]: [string, string, string]) {
  if (n >= 11 && n <= 14) return many;
  const last = n % 10;
  if (last === 1) return one;
  if (last >= 2 && last <= 4) return few;
  return many;
}

interface CountdownState {
  hours: number;
  minutes: number;
  seconds: number;
}

function computeRemaining(): CountdownState {
  const target = getTargetDate();
  const diff = Math.max(0, target.getTime() - Date.now());
  const totalSeconds = Math.floor(diff / 1000);
  return {
    hours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function useCountdown(): CountdownState {
  // Starts at zero so server and client render identically on mount (avoids
  // a hydration mismatch), then syncs to the real clock once mounted.
  const [time, setTime] = useState<CountdownState>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTime(computeRemaining());
    const interval = setInterval(() => {
      setTime(computeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}

export function PricingSection() {
  const { hours, minutes, seconds } = useCountdown();

  return (
    <section className="bg-[#fce7ec] px-4 py-16 md:py-20">
      <h2 className="text-center text-[28px] font-medium leading-[1.2] text-black md:text-[32px] md:leading-[38.4px]">
        ВЫБЕРИТЕ ФОРМАТ
        <br />
        <span className="text-[#F95B80]">И НАЧНИТЕ СЕГОДНЯ</span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-center text-[16px] leading-[1.4] text-black md:text-[18px]">
        Чем раньше старт, тем больше успеете до конца лета.
      </p>

      <p className="mt-8 text-center text-base font-medium text-black">
        Цены вырастут через:
      </p>

      <div className="mt-3 flex items-end justify-center gap-2 text-center">
        <span className="flex items-baseline gap-1.5">
          <span className="text-[28px] font-bold leading-none text-[#F95B80] md:text-[32px]">
            {hours}
          </span>
          <span className="text-sm font-medium text-black">
            {pluralize(hours, ["час", "часа", "часов"])}
          </span>
        </span>
        <span className="pb-0.5 text-lg font-medium text-black">:</span>
        <span className="flex items-baseline gap-1.5">
          <span className="text-[28px] font-bold leading-none text-[#F95B80] md:text-[32px]">
            {minutes}
          </span>
          <span className="text-sm font-medium text-black">
            {pluralize(minutes, ["минута", "минуты", "минут"])}
          </span>
        </span>
        <span className="pb-0.5 text-lg font-medium text-black">:</span>
        <span className="flex items-baseline gap-1.5">
          <span className="text-[28px] font-bold leading-none text-[#F95B80] md:text-[32px]">
            {seconds}
          </span>
          <span className="text-sm font-medium text-black">
            {pluralize(seconds, ["секунда", "секунды", "секунд"])}
          </span>
        </span>
      </div>

      <div className="mx-auto mt-10 grid max-w-[1200px] grid-cols-1 items-start gap-6 lg:grid-cols-3 lg:gap-[30px]">
        {TARIFFS.map((tariff) => (
          <PricingCard key={tariff.title} {...tariff} />
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-[1200px] flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#FFDD2D] text-xl font-bold text-black">
            T
          </div>
          <p className="text-sm leading-[1.4] text-black">
            РАССРОЧКА НА 6 МЕСЯЦЕВ
            <br />
            от 523 ₽ × 6 платежей
            <br />
            Раз в месяц
          </p>
        </div>

        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-black text-xl font-bold text-white">
            Д
          </div>
          <p className="text-sm leading-[1.4] text-black">
            ДОЛЯМИ
            <br />
            от 785 ₽ × 4 платежа
            <br />
            Раз в 2 недели
          </p>
        </div>
      </div>
    </section>
  );
}
