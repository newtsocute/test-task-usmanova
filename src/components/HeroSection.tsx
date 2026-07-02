import Image from "next/image";

export function HeroSection() {
  return (
    <section className="bg-white pt-[30px] pb-16">
      <div
        className="mx-auto grid max-w-[1200px] grid-cols-1 justify-center gap-x-0 gap-y-0 px-4 lg:grid-cols-[500px_600px] lg:px-0 [grid-template-areas:'title'_'image'_'paragraph'_'cta'] lg:[grid-template-areas:'title_image'_'paragraph_image'_'cta_image']"
      >
        <div style={{ gridArea: "title" }}>
          <h1 className="mb-[15px] font-[Gilroy,Roboto,sans-serif] text-[24px] font-semibold uppercase leading-[1.2] text-[#F66297] lg:text-[36px]">
            Приведите тело в форму с чемпионкой Катей Усмановой
          </h1>
          <p className="mb-[60px] font-[Gilroy,Roboto,sans-serif] text-[18px] font-medium leading-[1.2] text-[#F66297] lg:text-[26px]">
            без диет, голода и запретов
            <br />
            с пользой для здоровья
          </p>
        </div>

        <div
          className="relative mb-10 w-full lg:mb-0 lg:w-[600px]"
          style={{ gridArea: "image" }}
        >
          <div
            className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[60%] w-[70%] rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(246,98,151,0.5) 0%, rgba(246,98,151,0) 70%)",
            }}
          />
          <Image
            src="/images/usmanovafit/hero/hero-woman.png"
            alt="Катя Усманова с гантелей"
            width={975}
            height={1134}
            priority
            className="h-auto w-full"
          />
        </div>

        <p
          className="mb-[60px] text-[16px] font-medium leading-[1.2] text-black lg:text-[18px]"
          style={{ gridArea: "paragraph" }}
        >
          Похудеть, подтянуть попу и живот, набрать форму
          <br />
          в зале, восстановиться после родов — тренировки
          <br />
          и питание под вашу цель
        </p>

        <div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          style={{ gridArea: "cta" }}
        >
          <a
            href="/method_july"
            className="inline-block rounded-[100px] bg-[#f66297] px-10 py-[30px] text-[18px] font-semibold uppercase tracking-[2px] text-white transition-transform active:translate-y-0.5"
          >
            Выбрать программу
          </a>
        </div>
      </div>
    </section>
  );
}
