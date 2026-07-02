"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Подойдут ли мне тренировки?",
    answer:
      "Да, для любого уровня. Катя показывает упрощённый и усложнённый вариант каждого упражнения.",
  },
  {
    question: "Мне не поздно?",
    answer:
      "Нет. По Методу занимаются и в 25, и в 45, и старше. Как говорит Катя, молодость это то, как вы себя ощущаете, а не цифра в паспорте.",
  },
  {
    question: "Нужен ли зал или оборудование?",
    answer:
      "Первую неделю хватит коврика. Со второй недели пригодятся резинка и лёгкие гантели, их можно заменить бутылками с водой.",
  },
  {
    question: "Когда старт?",
    answer: "Доступ открывается сразу после оплаты, занимаетесь когда удобно.",
  },
  {
    question: "Можно ли оплатить из-за рубежа?",
    answer: "Да, принимаем карты банков любой страны.",
  },
  {
    question: "Есть ли рассрочка?",
    answer:
      "Да, без процентов для граждан РФ, и оплата Долями на 4 платежа.",
  },
  {
    question: "Что если не пришло письмо?",
    answer:
      "Проверьте «Спам» или напишите в поддержку, откроем доступ вручную.",
  },
];

export function FaqSection() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0]));

  const toggleItem = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section className="px-4 py-16 md:py-20">
      <h2 className="text-center text-[28px] font-medium leading-tight text-black md:text-[32px]">
        САМЫЕ ПОПУЛЯРНЫЕ <span className="text-[#F95B80]">ВОПРОСЫ</span>
      </h2>

      <div className="mx-auto mt-10 max-w-[700px]">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndices.has(index);
          return (
            <div
              key={item.question}
              className="border-b border-[#e6e6e6] py-5 first:border-t"
            >
              <button
                type="button"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
                className="flex w-full cursor-pointer items-center justify-between border-none bg-transparent text-left text-base font-bold text-black md:text-xl"
              >
                <span>{item.question}</span>
                <span
                  className={cn(
                    "ml-4 shrink-0 text-xl text-black transition-transform duration-[400ms] md:text-2xl",
                    isOpen && "rotate-45"
                  )}
                >
                  +
                </span>
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-[max-height] duration-[400ms] ease-in-out",
                  isOpen ? "max-h-[500px]" : "max-h-0"
                )}
              >
                <p className="pt-2.5 text-sm leading-relaxed text-[#555555] md:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
