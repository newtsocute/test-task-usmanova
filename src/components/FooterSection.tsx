import Image from "next/image";

const NAV_LINKS = [
  { label: "Служба заботы", href: "#" },
  { label: "Оферта", href: "#" },
  { label: "Политика конфиденциальности", href: "#" },
  { label: "Согласие на обработку персональных данных", href: "#" },
];

const SOCIAL_LINKS = [
  {
    label: "VK",
    href: "#",
    src: "/images/usmanovafit/footer/icon-vk.svg",
  },
  {
    label: "Telegram",
    href: "#",
    src: "/images/usmanovafit/footer/icon-telegram.svg",
  },
  {
    label: "Max",
    href: "#",
    src: "/images/usmanovafit/footer/icon-max.png",
  },
];

export function FooterSection() {
  return (
    <footer className="w-full pt-10 pb-16 px-4 font-[Gilroy,Roboto,sans-serif]">
      <div className="mx-auto max-w-[1200px] text-left">
        <p className="text-[14px] font-medium leading-[20px] text-[#878787]">
          © ООО «Онлайн Фитнес», 2020 — 2026.
        </p>
        <p className="mt-[5px] text-[14px] font-medium leading-[20px] text-[#878787]">
          ИНН 7734434533
        </p>
        <p className="mt-[5px] text-[14px] font-medium leading-[20px] text-[#878787]">
          КПП 773401001
        </p>
        <p className="mt-[5px] text-[14px] font-medium leading-[20px] text-[#878787]">
          ОГРН 1207700175209
        </p>
        <p className="mt-5 text-[14px] font-medium leading-[20px] text-[#878787]">
          г.Москва, ул.Щукинская, д.2, этаж/офис цокольный/32
        </p>

        <nav className="mt-5 flex flex-col">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] font-medium leading-[20px] text-[#878787] no-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-5 flex items-center gap-2.5">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="flex h-[34px] w-[34px] items-center justify-center overflow-hidden rounded-lg"
            >
              <Image
                src={social.src}
                alt={social.label}
                width={34}
                height={34}
                className="h-full w-full object-cover"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
