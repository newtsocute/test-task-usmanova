"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Подойдёт ли мне программа, если я никогда не тренировалась?",
    answer:
      "Да. На витрине есть программы для старта с нуля — например, Метод Усмановой и Марафон стройности. Катя показывает и объясняет каждое движение, вы просто повторяете. Если не знаете, с чего начать, напишите нам — поможем выбрать программу под вашу цель и уровень.",
  },
  {
    question: "Сколько времени в день нужно на тренировки?",
    answer:
      "От 20 до 45 минут. Заниматься можно в любое удобное время — расписания нет, уроки открыты, включаете когда вам удобно днём или вечером.",
  },
  {
    question: "Можно ли тренироваться дома? Нужно ли оборудование?",
    answer:
      "Да, все программы рассчитаны на занятия дома. Для большинства достаточно коврика и собственного веса. Для некоторых программ пригодится минимальный инвентарь — фитнес-резинка, лёгкие гантели или утяжелители. Его можно заменить подручными средствами, например бутылками с водой. Что именно нужно, указано в описании каждой программы.",
  },
  {
    question: "На какой срок открывается доступ к программе?",
    answer: "Срок доступа указан в описании каждой программы.",
  },
  {
    question: "Можно ли оплатить в рассрочку?",
    answer: "Да, рассрочка доступна. Условия указаны при оформлении заказа.",
  },
  {
    question: "Могу ли я оплатить картой иностранного банка?",
    answer:
      "Да. При оформлении заказа нажмите «Оплатить картой иностранного банка», выберите удобный способ на платёжной странице и подтвердите оплату.",
  },
  {
    question: "Я живу не в России. Смогу заниматься?",
    answer:
      "Да. Тренировки доступны в любой точке мира — нужен только смартфон, планшет или компьютер с интернетом.",
  },
  {
    question: "Как я получу доступ после оплаты?",
    answer:
      "Доступ к программам открывается в личном кабинете сразу после оплаты. Авторизация — по номеру телефона, который вы указали при оформлении заказа.",
  },
  {
    question: "Я оплатила, но не вижу доступ. Что делать?",
    answer:
      "Проверьте, что авторизовались по тому же номеру телефона, который указывали при оплате. Письмо-подтверждение приходит на почту в течение суток — загляните и в папку «Спам». Если доступа всё равно нет, напишите в поддержку, поможем.",
  },
  {
    question: "Остались вопросы?",
    answer:
      "Напишите нам — поможем выбрать программу и ответим на любой вопрос. ВК: vk.ru/usmanovateam Почта: help@usmanovasport.ru",
  },
];

export function FaqAccordionSection() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

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
      <h2 className="text-center text-2xl font-medium leading-[28.8px] text-black">
        Отвечаем на вопросы
      </h2>
      <div className="mx-auto mt-8 max-w-[700px]">
        {faqItems.map((item, index) => {
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
                className="flex w-full items-center justify-between border-none bg-transparent text-left text-base font-bold text-black cursor-pointer md:text-xl"
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
