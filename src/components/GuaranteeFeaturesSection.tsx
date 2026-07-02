import Image from "next/image";

interface GuaranteeFeature {
  icon: string;
  title: string;
  text: string;
}

const GUARANTEE_FEATURES: GuaranteeFeature[] = [
  {
    icon: "/images/usmanovafit/guarantee-features/icon-price.png",
    title: "Гарантия лучшей цены",
    text: "Самая лояльная цена на рынке фитнеса для комплекта тренировок с таким глубоким содержанием программ, направленных на быстрый результат.",
  },
  {
    icon: "/images/usmanovafit/guarantee-features/icon-unique.png",
    title: "Гарантия уникальности программ",
    text: "Все программы тренировок разработаны лично Катей Усмановой и проверены на её опыте.",
  },
  {
    icon: "/images/usmanovafit/guarantee-features/icon-result.png",
    title: "Гарантия результата при соблюдении всех рекомендаций",
    text: "Задания и рекомендации помогают закреплять результат и мотивируют двигаться дальше.",
  },
  {
    icon: "/images/usmanovafit/guarantee-features/icon-deadline.png",
    title: "Гарантия соблюдения сроков обучения",
    text: "Все программы будут открыты в указанный срок с согласованным доступом.",
  },
  {
    icon: "/images/usmanovafit/guarantee-features/icon-legal.png",
    title: "Гарантия юридической чистоты сделки",
    text: "Оплата проходит через кассу, вы получите чек на свой e-mail.",
  },
  {
    icon: "/images/usmanovafit/guarantee-features/icon-info.png",
    title: "Гарантия предоставления необходимой информации",
    text: "Мы предоставим все материалы, необходимые вам для быстрого достижения результата. У вас не останется вопросов по питанию и тренировкам.",
  },
];

export function GuaranteeFeaturesSection() {
  return (
    <section className="px-4 py-16 md:py-20">
      <h2 className="mx-auto max-w-2xl text-center text-[22px] font-medium leading-tight text-black sm:text-[28px] md:text-[32px]">
        Программы <span className="text-[#f66297]">Кати Усмановой</span> —
        <br />
        это всегда гарантия
      </h2>

      <div className="mx-auto mt-10 flex max-w-[600px] flex-col gap-5 rounded-[35px] bg-white px-6 py-8 sm:px-10 sm:py-[30px]">
        {GUARANTEE_FEATURES.map((feature) => (
          <div key={feature.title} className="flex items-start gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(246,98,151,0.19)] sm:h-10 sm:w-10">
              <Image
                src={feature.icon}
                alt=""
                width={20}
                height={20}
                className="h-[18px] w-[18px] object-contain sm:h-5 sm:w-5"
              />
            </div>
            <div>
              <div className="mb-1 text-[16px] font-semibold leading-snug text-black sm:text-[18px]">
                {feature.title}
              </div>
              <div className="text-[14px] leading-[1.4] text-[#555555] sm:text-[16px]">
                {feature.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
