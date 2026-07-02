import Image from "next/image";

import { cn } from "@/lib/utils";

export interface PricingCardProps {
  title: string;
  badge?: string;
  highlighted?: boolean;
  priceNew: string;
  priceOld: string;
  discount: string;
  period: string;
  items: string[];
  buttonText: string;
}

export function PricingCard({
  title,
  badge,
  highlighted = false,
  priceNew,
  priceOld,
  discount,
  period,
  items,
  buttonText,
  onSelect,
}: PricingCardProps & { onSelect: () => void }) {
  return (
    <div className="flex h-full flex-col">
      <div
        className={cn(
          "flex flex-1 flex-col rounded-[30px] bg-white p-[15px] font-[Gilroy,sans-serif] text-base font-normal text-black",
          highlighted &&
            "border border-[#F95B80] shadow-[inset_0_0_20px_rgba(249,91,128,0.314)]",
        )}
      >
        <div className="mb-0.5 text-xl font-semibold leading-tight text-[#F95B80]">
          {title}
          {badge && (
            <>
              <br />
              {badge}
            </>
          )}
        </div>

        <div className="mb-5 h-px w-full bg-[#F95B80]/[0.314]" />

        <div className="mb-[5px] flex items-end justify-between">
          <span className="text-[36px] font-medium leading-none text-black">
            {priceNew}
          </span>
          <span className="text-2xl font-medium leading-none text-[#555] line-through decoration-[#F95B80]">
            {priceOld}
          </span>
        </div>

        <div className="mb-5 flex items-end justify-between">
          <span className="text-sm font-medium text-[#F95B80]">
            Скидка: {discount}
          </span>
          <span className="text-base font-medium text-black">
            Доступ: {period}
          </span>
        </div>

        <div className="mb-5 text-lg font-medium">Что входит:</div>

        <ul className="m-0 mb-2 flex-1 list-none p-0">
          {items.map((item) => (
            <li
              key={item}
              className="mb-2.5 flex items-start gap-2.5 last:mb-0"
            >
              <Image
                src="/images/usmanovafit/method-july/pricing/bullet-arrow-icon.png"
                alt=""
                width={30}
                height={30}
                className="h-[30px] w-[30px] flex-shrink-0"
              />
              <span className="text-base font-normal leading-[1.4]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={onSelect}
        className="mt-4 block w-full rounded-full bg-[#F95B80] py-4 text-center text-base font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
      >
        {buttonText}
      </button>
    </div>
  );
}
