import Image from "next/image";

const GRID_IMAGES = [
  {
    src: "/images/usmanovafit/media-mentions/media-01.png",
    alt: "Катя Усманова на телешоу",
  },
  {
    src: "/images/usmanovafit/media-mentions/media-02.png",
    alt: "В любой непонятной ситуации - приседай",
  },
  {
    src: "/images/usmanovafit/media-mentions/media-03.png",
    alt: "Обложка подкаста «Мама фитнес-бикини»",
  },
  {
    src: "/images/usmanovafit/media-mentions/media-04.png",
    alt: "Статья в СМИ «Бикини, которое приносит миллионы»",
  },
];

export function MediaMentionsSection() {
  return (
    <section className="mx-auto max-w-[600px] px-5">
      <h2 className="text-center text-[24px] font-medium leading-[1.2] text-black lg:text-[32px] lg:leading-[38.4px]">
        Кате доверяют миллионы.{" "}
        <span className="text-[#f66297]">Её методы работают</span> — и об
        этом говорят все
      </h2>
      <div className="mt-6 rounded-[32px] bg-white p-[30px]">
        <p className="text-center text-[16px] leading-[1.4] text-black lg:text-[18px]">
          580 000+ учениц. Подкасты. Статьи в СМИ. Коллаборации с звёздами.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-[15px]">
          {GRID_IMAGES.map((image) => (
            <div
              key={image.src}
              className="relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 640px) 285px, 45vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <a
        href="https://usmanovafit.gymteam.ru/maysale2026_7"
        className="mt-6 block w-full rounded-[100px] bg-[#f66297] p-5 text-center font-[Gilroy,Roboto,sans-serif] text-[15px] font-semibold uppercase leading-[1.4] text-white"
      >
        Вернуть форму
      </a>
    </section>
  );
}
