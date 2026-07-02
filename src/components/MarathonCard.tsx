import Image from "next/image";

import { cn } from "@/lib/utils";
import type { MarathonCardData } from "@/types/content";

export function MarathonCard({
  badge,
  title,
  boldText,
  text,
  buttonText,
  buttonHref,
  image,
  imageAlt,
  flagship = false,
  imageOffsetClassName,
}: MarathonCardData) {
  return (
    <div
      className={cn(
        "relative flex min-h-[260px] w-full overflow-hidden rounded-[30px] bg-white pb-[15px]",
        flagship && "border-2 border-[#f66297]",
      )}
    >
      <Image
        src={image}
        alt={imageAlt}
        width={492}
        height={576}
        className={cn(
          "absolute inset-y-0 left-0 h-full w-1/2 object-cover lg:w-auto",
          imageOffsetClassName,
        )}
      />
      <div className="relative ml-[50%] flex w-1/2 flex-col justify-start p-5">
        {flagship ? (
          <div className="mb-[10px] inline-block w-fit rounded-full bg-[#f66297]/[0.19] px-5 py-1.5 text-sm leading-[21.7px] font-semibold text-[#f66297]">
            {badge}
          </div>
        ) : (
          <div className="mb-1 text-sm leading-[21.7px] font-medium text-[#f66297]">
            {badge}
          </div>
        )}
        <div className="mb-2 font-[Gilroy,Roboto,sans-serif] text-lg font-medium leading-[1.55] text-black lg:text-xl lg:leading-[31px]">
          {title}
        </div>
        <div className="mb-[15px] text-sm leading-[1.4] font-normal text-[#555555] lg:text-base lg:leading-[22.4px]">
          <strong className="font-medium text-black">{boldText}</strong>{" "}
          {text}
        </div>
        <a
          href={buttonHref}
          className="mt-[15px] inline-block w-fit rounded-full bg-[#f66297] px-[22px] py-2.5 text-base leading-[22.8571px] font-medium text-white no-underline lg:mt-0"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}
