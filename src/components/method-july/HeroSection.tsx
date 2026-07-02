"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const INITIAL_SECONDS = 4 * 24 * 60 * 60 + 4 * 60 * 60 + 17 * 60 + 12;

function formatCountdown(totalSeconds: number) {
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  const pad = (value: number) => String(value).padStart(2, "0");

  return `${days} дня ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function Countdown() {
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-[52px] font-medium leading-[63.96px] text-[#F95B80]">
      {formatCountdown(secondsLeft)}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="bg-white pt-[30px] pb-16">
      <div
        className="mx-auto grid max-w-[1200px] grid-cols-1 justify-center gap-x-0 gap-y-0 px-4 lg:grid-cols-[500px_600px] lg:px-0 [grid-template-areas:'title'_'image'_'paragraph'_'cta'] lg:[grid-template-areas:'title_image'_'paragraph_image'_'cta_image']"
      >
        <div style={{ gridArea: "title" }}>
          <p className="mb-4 text-[16px] font-semibold leading-[19.2px] text-[#F95B80]">
            ХВАТИТ ИСКАТЬ СПОСОБ. ЕСТЬ ОБНОВЛЁННЫЙ «МЕТОД УСМАНОВОЙ»
          </p>
          <h1 className="text-[48px] font-semibold uppercase leading-[1.2] text-black">
            ЗА ЛЕТО ВЕРНИТЕ
            <br />
            <span className="text-[#F95B80]">
              ЛЁГКОСТЬ, ЭНЕРГИЮ
              <br />
              И ФОРМУ
            </span>
          </h1>
        </div>

        <div
          className="relative mb-10 aspect-[6/7] w-full overflow-hidden lg:mb-0 lg:w-[600px]"
          style={{ gridArea: "image" }}
        >
          <div
            className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[60%] w-[70%] rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(249,91,128,0.5) 0%, rgba(249,91,128,0) 70%)",
            }}
          />
          <Image
            src="/images/usmanovafit/method-july/hero/hero-photo.png"
            alt="Катя Усманова"
            fill
            priority
            className="object-cover object-[78%_50%]"
          />
        </div>

        <p
          className="mt-6 text-[18px] leading-[1.2] lg:mt-10"
          style={{ gridArea: "paragraph" }}
        >
          <span className="font-semibold text-[#F95B80]">
            Домашние тренировки с Катей и готовое питание по неделям{" "}
          </span>
          <span className="font-medium text-black">
            возвращают лёгкость, подтягивают тело и наконец превращают спорт в
            чистое удовольствие.
          </span>
        </p>

        <div
          className="mt-8 flex flex-col items-center text-center lg:items-start lg:text-left"
          style={{ gridArea: "cta" }}
        >
          <a
            href="#pricing"
            className="inline-block rounded-full bg-[#F95B80] px-10 py-[30px] text-[18px] font-semibold uppercase tracking-[2px] text-white transition-transform active:translate-y-0.5"
          >
            ПОЛУЧИТЬ МЕТОД
          </a>

          <p className="mt-8 text-[16px] font-medium text-[#F95B80]">
            Успейте забрать тренировки со скидкой до 82%
          </p>
          <Countdown />
        </div>
      </div>
    </section>
  );
}
