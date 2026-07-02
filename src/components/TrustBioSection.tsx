import Image from "next/image";

const CHECKLIST_ITEMS = [
  "Вице-чемпионка мира и чемпионка России по фитнес-бикини",
  "Профессиональный фитнес-тренер с опытом более 15 лет",
  "Мама 2-х детей. Всего за 100 дней после первых родов похудела на 20 кг и вернулась в прежнюю форму",
  "Автор первых в России масштабных марафонов стройности",
  "Чемпионка России и мира по жиму лёжа",
] as const;

const GALLERY_IMAGES = Array.from({ length: 9 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return `/images/usmanovafit/trust-bio/gallery-${number}.png`;
});

export function TrustBioSection() {
  return (
    <section className="bg-[#f3f3f3] px-4 py-16 md:py-24">
      <p className="mx-auto max-w-[700px] text-center text-[18px] leading-[1.5] text-black md:text-[20px]">
        С 2015 года создаёт топовые тренировки для идеальных ягодиц, плоского
        живота и стройности без жёстких диет. Уже более 580 000+ участниц
        тренируются с Катей, ведь она:
      </p>

      <div className="mx-auto mt-8 max-w-[600px] rounded-[35px] bg-white p-[30px] md:mt-10">
        <ul className="flex flex-col gap-4">
          {CHECKLIST_ITEMS.map((text) => (
            <li key={text} className="flex items-start gap-3">
              <Image
                src="/images/usmanovafit/trust-bio/checklist-icon.png"
                alt=""
                width={30}
                height={30}
                className="mt-0.5 h-[30px] w-[30px] shrink-0"
              />
              <span className="text-left font-[Gilroy,sans-serif] text-base leading-[24.8px] font-normal text-black">
                {text}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-row snap-x snap-mandatory gap-5 overflow-x-auto pb-[10px]">
          {GALLERY_IMAGES.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Катя Усманова, фото ${index + 1}`}
              width={300}
              height={300}
              className="h-[300px] w-[300px] shrink-0 snap-start rounded-[30px] object-cover"
            />
          ))}
        </div>

        <p className="mt-3 text-center text-[13px] text-[#f66297]">
          Листайте вправо →
        </p>
      </div>
    </section>
  );
}
