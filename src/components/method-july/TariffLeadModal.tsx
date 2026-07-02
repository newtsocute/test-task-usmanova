"use client";

import { useEffect } from "react";

export interface TariffLeadModalTariff {
  title: string;
  priceOld: string;
  priceNew: string;
}

const METHOD_NAME = "Метод Усмановой";

export function TariffLeadModal({
  tariff,
  onClose,
}: {
  tariff: TariffLeadModalTariff | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!tariff) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [tariff, onClose]);

  if (!tariff) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[500px] rounded-[30px] border border-[#F95B80] bg-white p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-5 rounded-2xl bg-[#FFFBD1] px-4 py-3 text-center text-[15px] leading-[1.4] text-black">
          {METHOD_NAME}. Тариф «{tariff.title}»{" "}
          <span className="text-[#999] line-through">{tariff.priceOld}</span>{" "}
          {tariff.priceNew}
        </div>

        <form
          className="flex flex-col gap-3"
          onSubmit={(event) => {
            event.preventDefault();
            onClose();
          }}
        >
          <input
            type="text"
            required
            placeholder="Введите ваше имя"
            className="w-full rounded-2xl border border-[#e6e6e6] px-5 py-4 text-base text-black outline-none placeholder:text-[#999] focus:border-[#F95B80]"
          />
          <input
            type="email"
            required
            placeholder="Введите ваш эл. адрес"
            className="w-full rounded-2xl border border-[#e6e6e6] px-5 py-4 text-base text-black outline-none placeholder:text-[#999] focus:border-[#F95B80]"
          />
          <input
            type="tel"
            required
            placeholder="Введите ваш телефон"
            className="w-full rounded-2xl border border-[#e6e6e6] px-5 py-4 text-base text-black outline-none placeholder:text-[#999] focus:border-[#F95B80]"
          />

          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-[#F95B80] py-4 text-center text-base font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
          >
            Продолжить
          </button>

          <label className="mt-1 flex items-start gap-2.5 text-sm leading-[1.4] text-[#555]">
            <input
              type="checkbox"
              required
              defaultChecked
              className="mt-0.5 h-4 w-4 flex-shrink-0 accent-[#F95B80]"
            />
            Я согласна на получение информационных и маркетинговых рассылок
            (вы в любой момент можете отказаться от получения писем в личном
            кабинете)
          </label>
        </form>
      </div>
    </div>
  );
}
