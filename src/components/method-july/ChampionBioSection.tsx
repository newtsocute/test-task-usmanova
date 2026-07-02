import Image from "next/image";

const CHECKLIST_ITEMS = [
  "Профессиональный тренер с опытом более 15 лет, по её программам прошли более 590 000 женщин",
  "Мама двоих детей, за 100 дней после родов похудела на 20 кг",
  "Вице-чемпионка мира и чемпионка России по фитнес-бикини",
  "Автор первых в России массовых марафонов стройности",
];

const GALLERY_IMAGES = Array.from({ length: 9 }, (_, index) =>
  String(index + 1).padStart(2, "0")
);

export function ChampionBioSection() {
  return (
    <section className="px-4 py-16 md:py-20">
      <h2 className="text-center text-[28px] font-medium leading-[1.2] md:text-[32px] md:leading-[38.4px]">
        <span className="text-black">ВЫ ТРЕНИРУЕТЕСЬ С ЧЕМПИОНКОЙ,</span>
        <br />
        <span className="text-[#F95B80]">
          КОТОРАЯ ПРОШЛА ЭТОТ ПУТЬ САМА
        </span>
      </h2>

      <div className="mx-auto mt-8 max-w-[600px] rounded-[30px] bg-white p-[30px] md:rounded-[35px]">
        <ul className="flex flex-col gap-4">
          {CHECKLIST_ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Image
                src="/images/usmanovafit/method-july/champion-bio/checklist-icon.png"
                alt=""
                width={30}
                height={30}
                className="h-[30px] w-[30px] shrink-0 object-contain"
              />
              <span className="text-[16px] leading-[24.8px] text-black">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-5 overflow-x-auto [scroll-snap-type:x_mandatory] [-webkit-overflow-scrolling:touch]">
          {GALLERY_IMAGES.map((num) => (
            <div
              key={num}
              className="relative h-[300px] w-[300px] shrink-0 overflow-hidden rounded-[30px] [scroll-snap-align:start]"
            >
              <Image
                src={`/images/usmanovafit/trust-bio/gallery-${num}.png`}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-[14px] text-[#F95B80]">
          Листайте вправо →
        </p>
      </div>

      <p className="mx-auto mt-8 max-w-[600px] text-center text-[16px] leading-[1.4]">
        <span className="text-[#F95B80]">Цитата Кати:</span>{" "}
        <em className="italic text-black">
          «Летом вы будете идти, и все будут офигевать.»
        </em>
      </p>
    </section>
  );
}
