"use client";

import { useEffect, useState } from "react";

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
    <div className="text-center text-[30px] font-medium leading-[1.2] text-[#F95B80] md:text-[36px]">
      {formatCountdown(secondsLeft)}
    </div>
  );
}

export function FinalCtaSection() {
  return (
    <section className="bg-[#fce7ec] px-4 py-16 md:py-20">
      <div className="mx-auto max-w-[600px] text-center">
        <h2 className="text-[28px] font-medium leading-[1.2] md:text-[32px] md:leading-[38.4px]">
          <span className="text-black">СПОСОБОВ МНОГО. </span>
          <span className="text-[#F95B80]">МЕТОД ОДИН.</span>
        </h2>

        <p className="mt-4 text-[16px] leading-[1.4] text-black md:text-[18px]">
          Система, по которой прошли более 590 000 женщин.
          <br />
          Тело, питание и энергия в одном месте.
        </p>

        <div className="mt-8">
          <Countdown />
        </div>

        <a
          href="#"
          className="mt-8 inline-block rounded-full bg-[#F95B80] px-10 py-[30px] text-[18px] font-bold uppercase tracking-[2px] text-white transition-transform active:translate-y-0.5"
        >
          ЗАБРАТЬ МЕТОД СО СКИДКОЙ 82%
        </a>
      </div>
    </section>
  );
}
