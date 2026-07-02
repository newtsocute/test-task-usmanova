import Image from "next/image"

const SOCIAL_LINKS = [
  {
    href: "https://t.me/UsmanovaSport_bot",
    src: "/images/usmanovafit/contact-prompt/icon-telegram.svg",
    alt: "Telegram",
  },
  {
    href: "https://vk.ru/usmanovateam",
    src: "/images/usmanovafit/contact-prompt/icon-vk.svg",
    alt: "VK",
  },
  {
    href: "mailto:help@usmanovasport.ru",
    src: "/images/usmanovafit/contact-prompt/icon-mail.svg",
    alt: "Email",
  },
  {
    href: "https://max.ru/id7734434533_1_bot",
    src: "/images/usmanovafit/contact-prompt/icon-max.png",
    alt: "Max",
  },
] as const

export function ContactPromptSection() {
  return (
    <section className="px-4 py-16 md:py-24">
      <h2 className="text-center text-[20px] font-semibold uppercase text-black md:text-2xl">
        НЕ ЗНАЕТЕ, С ЧЕГО НАЧАТЬ?
      </h2>
      <div className="mx-auto mt-8 max-w-[600px] rounded-[30px] bg-white px-6 py-[30px] md:rounded-[40px] md:px-10">
        <p className="text-center text-base text-black md:text-lg">
          Напишите нам и подберём программу под вашу цель и уровень. Это
          бесплатно и быстро.
        </p>
        <div className="mt-6 flex justify-center gap-4 md:gap-5">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-[17px]"
              aria-label={link.alt}
            >
              <Image
                src={link.src}
                alt={link.alt}
                width={56}
                height={56}
                className="h-14 w-14 rounded-[17px]"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
