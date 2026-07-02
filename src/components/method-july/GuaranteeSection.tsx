import Image from "next/image";

interface GuaranteeRow {
  icon: string;
  title: string;
  text: string;
}

const GUARANTEE_ROWS: GuaranteeRow[] = [
  {
    icon: "/images/usmanovafit/method-july/guarantee/icon-price.png",
    title: "Лучшая цена.",
    text: " Для курса с таким наполнением",
  },
  {
    icon: "/images/usmanovafit/method-july/guarantee/icon-unique.png",
    title: "Уникальность.",
    text: " Всё разработано Катей и экспертами проекта, проверено тысячами женщин",
  },
  {
    icon: "/images/usmanovafit/method-july/guarantee/icon-result.png",
    title: "Результат.",
    text: " При выполнении рекомендаций",
  },
  {
    icon: "/images/usmanovafit/method-july/guarantee/icon-support.png",
    title: "Поддержка.",
    text: " Отвечаем на любой вопрос в закрытом чате",
  },
  {
    icon: "/images/usmanovafit/method-july/guarantee/icon-convenience.png",
    title: "Удобство.",
    text: " Занимаетесь дома в любое время, нужен только коврик",
  },
];

export function GuaranteeSection() {
  return (
    <section className="px-4 py-16 md:py-20">
      <h2 className="mx-auto max-w-2xl text-center text-[28px] font-medium leading-tight text-black md:text-[32px]">
        ПРОГРАММЫ КАТИ УСМАНОВОЙ
        <br />
        <span className="text-[#F95B80]">ВСЕГДА ДАЮТ ГАРАНТИЮ</span>
      </h2>

      <div className="mx-auto mt-10 flex max-w-[600px] flex-col gap-5 rounded-[35px] bg-white p-[30px]">
        {GUARANTEE_ROWS.map((row) => (
          <div key={row.title} className="flex items-center gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(249,91,128,0.19)] sm:h-10 sm:w-10">
              <Image
                src={row.icon}
                alt=""
                width={20}
                height={20}
                className="h-[18px] w-[18px] object-contain sm:h-5 sm:w-5"
              />
            </div>
            <p className="text-[14px] leading-[1.4] text-[#555555] sm:text-[16px]">
              <strong className="font-bold text-black">{row.title}</strong>
              {row.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
