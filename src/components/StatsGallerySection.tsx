"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const GALLERY_IMAGES = [
  "/images/usmanovafit/stats-gallery/before-after-01.jpg",
  "/images/usmanovafit/stats-gallery/before-after-02.jpg",
  "/images/usmanovafit/stats-gallery/before-after-03.jpg",
];

const BULLET_POINTS = [
  "Первые видимые результаты уже на 6-й день тренировок",
  "В среднем ученицы теряют 4–6 кг за первый месяц",
];

const BASE_LIVE_COUNT = 3696;
const MIN_LIVE_COUNT = 3600;
const MAX_LIVE_COUNT = 3800;
const LIVE_UPDATE_INTERVAL_MS = 4000;

export function StatsGallerySection() {
  const [liveCount, setLiveCount] = useState(BASE_LIVE_COUNT);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount((prev) => {
        const delta = Math.round((Math.random() - 0.5) * 8);
        return Math.min(MAX_LIVE_COUNT, Math.max(MIN_LIVE_COUNT, prev + delta));
      });
    }, LIVE_UPDATE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-4 py-16 md:px-8">
      <h2 className="mx-auto max-w-[600px] text-center font-[Gilroy,_Roboto,_sans-serif] text-[28px] leading-[33.6px] font-medium">
        <span className="text-[#f66297]">580 000 девушек</span>
        <br />
        <span className="text-black">уже тренируются с Катей</span>
      </h2>

      <div className="mx-auto mt-8 max-w-[600px] rounded-[32px] bg-white p-[30px]">
        <ul className="flex flex-col gap-4">
          {BULLET_POINTS.map((text) => (
            <li key={text} className="flex flex-row items-center gap-3">
              <span className="flex size-[30px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(246,98,151,0.19)]">
                <Image
                  src="/images/usmanovafit/stats-gallery/arrow-icon.png"
                  alt=""
                  width={14}
                  height={14}
                />
              </span>
              <span className="text-[16px] leading-[1.4] text-black">{text}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-[20px] bg-muted p-5">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-[#4cd964]" />
            <span className="text-[14px] text-black">Тренируются прямо сейчас</span>
          </div>
          <div className="mt-1 font-[Gilroy,_sans-serif] text-[30px] leading-[30px] tracking-[1px] font-medium text-black">
            {liveCount.toLocaleString("ru-RU")}
          </div>
        </div>

        <div className="mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto">
          {GALLERY_IMAGES.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Результат тренировок ${index + 1}`}
              width={300}
              height={300}
              className="w-[300px] shrink-0 snap-start rounded-[24px] object-cover"
            />
          ))}
        </div>

        <p className="mt-3 text-center text-[14px] text-[#f66297]">Листай вправо →</p>
      </div>
    </section>
  );
}
