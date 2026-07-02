import { ContactPromptSection } from "@/components/ContactPromptSection";
import { CookieBanner } from "@/components/CookieBanner";
import { CourseSection } from "@/components/CourseSection";
import { FaqAccordionSection } from "@/components/FaqAccordionSection";
import { FooterSection } from "@/components/FooterSection";
import { GuaranteeFeaturesSection } from "@/components/GuaranteeFeaturesSection";
import { HeroSection } from "@/components/HeroSection";
import { MediaMentionsSection } from "@/components/MediaMentionsSection";
import { StatsGallerySection } from "@/components/StatsGallerySection";
import { TestimonialCarouselSection } from "@/components/TestimonialCarouselSection";
import { TrustBioSection } from "@/components/TrustBioSection";
import type { CourseSectionData } from "@/types/content";

const homeWorkouts: CourseSectionData = {
  title: "Тренировки дома",
  cards: [
    {
      flagship: true,
      badge: "ФЛАГМАН",
      title: "Метод Усмановой",
      boldText: "Освоите технику и втянетесь в регулярные тренировки",
      text: "— без травм и через силу. Первая программа, с которой начинают все ученицы Кати.",
      buttonText: "Подробнее",
      buttonHref: "/method_july",
      image: "/images/usmanovafit/home-workouts/method-usmanovoi.png",
      imageAlt: "Метод Усмановой",
    },
    {
      badge: "Марафон",
      title: "Стройности",
      boldText: "Первый видимый результат за 21 день",
      text: "— уходит первый жир, появляется тонус и лёгкость. Для тех, кто стартует с нуля.",
      buttonText: "Подробнее",
      buttonHref: "/method_july",
      image: "/images/usmanovafit/home-workouts/stroynost.png",
      imageAlt: "Марафон Стройности",
    },
    {
      badge: "Марафон",
      title: "Упругая попа 1.0",
      boldText: "Первый объём и подтянутость ягодиц",
      text: "— с собственным весом. Для тех, кто впервые целенаправленно работает над попой.",
      buttonText: "Подробнее",
      buttonHref: "/method_july",
      image: "/images/usmanovafit/home-workouts/uprugaya-popa-1.png",
      imageAlt: "Упругая попа 1.0",
    },
    {
      badge: "Марафон",
      title: "Упругая попа 2.0",
      boldText: "Плотные, упругие ягодицы",
      text: "— следующий уровень после 1.0. С резинкой и утяжелителями, для подготовленных.",
      buttonText: "Подробнее",
      buttonHref: "/method_july",
      image: "/images/usmanovafit/home-workouts/uprugaya-popa-2.png",
      imageAlt: "Упругая попа 2.0",
    },
    {
      badge: "Марафон",
      title: "Плоский живот",
      boldText:
        "Убрать вываливающийся живот, который не уходит даже после похудения.",
      text: "Тренировки на глубокие мышцы пресса, которые отвечают за плоский живот — а не за «кубики».",
      buttonText: "Подробнее",
      buttonHref: "/method_july",
      image: "/images/usmanovafit/home-workouts/ploskiy-zhivot.png",
      imageAlt: "Плоский живот",
    },
    {
      badge: "Курс",
      title: "Жиросжигающий",
      boldText: "Сжечь жир и проявить рельеф",
      text: "— за 6 недель. Для тех, кто уже тренировался: с гантелями, по схеме интервальных нагрузок.",
      buttonText: "Подробнее",
      buttonHref: "/method_july",
      image: "/images/usmanovafit/home-workouts/zhiroszhigayuschiy.png",
      imageAlt: "Жиросжигающий курс",
    },
  ],
};

const gymWorkouts: CourseSectionData = {
  title: "Тренировки в зале",
  cards: [
    {
      badge: "Курс",
      title: "Для зала",
      boldText: "Мышцы снова растут",
      text: "— когда дома прогресс уже встал. Готовая программа для зала на мышечный объём.",
      buttonText: "Подробнее",
      buttonHref: "/method_july",
      image: "/images/usmanovafit/gym-workout/dlya-zala.png",
      imageAlt: "Тренировки для зала",
      imageOffsetClassName: "lg:left-4",
    },
  ],
};

const pregnancy: CourseSectionData = {
  title: "Беременность и после родов",
  cards: [
    {
      badge: "Курс",
      title: "Для беременных",
      boldText: "Поддержать тело и самочувствие",
      text: "— безопасные тренировки для каждого триместра, разработаны совместно со специалистами.",
      buttonText: "Подробнее",
      buttonHref: "/method_july",
      image: "/images/usmanovafit/pregnancy/dlya-beremennyh.png",
      imageAlt: "Программа для беременных",
      imageOffsetClassName: "lg:left-4",
    },
    {
      badge: "Курс",
      title: "Восстановление после родов",
      boldText: "Вернуть форму бережно и без спешки",
      text: "— постепенное восстановление мышц тазового дна, пресса и общего тонуса тела.",
      buttonText: "Подробнее",
      buttonHref: "/method_july",
      image: "/images/usmanovafit/pregnancy/vosstanovlenie-posle-rodov.png",
      imageAlt: "Восстановление после родов",
      imageOffsetClassName: "lg:left-4",
    },
  ],
};

const nutrition: CourseSectionData = {
  title: "Питание",
  cards: [
    {
      flagship: true,
      badge: "БЕСТСЕЛЛЕР",
      title: "ИИ-нутрициолог",
      boldText: "Едите то, что любите, и худеете",
      text: "— персональный план питания без диет и жёстких запретов, который подстраивается под вас.",
      buttonText: "Подробнее",
      buttonHref: "/method_july",
      image: "/images/usmanovafit/nutrition/ii-nutriciolog.png",
      imageAlt: "ИИ-нутрициолог",
    },
    {
      badge: "Курс",
      title: "ПП питание",
      boldText: "Простые привычки правильного питания",
      text: "— без подсчёта калорий и жёстких ограничений, с рецептами на каждый день.",
      buttonText: "Подробнее",
      buttonHref: "/method_july",
      image: "/images/usmanovafit/nutrition/pp-pitanie.png",
      imageAlt: "ПП питание",
    },
  ],
};

const selfLove: CourseSectionData = {
  title: "Любовь к себе",
  cards: [
    {
      badge: "Марафон",
      title: "Любовь к себе 1.0",
      boldText: "Перестать критиковать своё отражение",
      text: "— работа с самооценкой и телом одновременно, без строгих правил.",
      buttonText: "Подробнее",
      buttonHref: "/method_july",
      image: "/images/usmanovafit/self-love/lyubov-k-sebe-1.png",
      imageAlt: "Любовь к себе 1.0",
    },
    {
      badge: "Марафон",
      title: "Любовь к себе 2.0",
      boldText: "Закрепить бережное отношение к себе",
      text: "— продолжение первого марафона для тех, кто хочет двигаться дальше.",
      buttonText: "Подробнее",
      buttonHref: "/method_july",
      image: "/images/usmanovafit/self-love/lyubov-k-sebe-2.png",
      imageAlt: "Любовь к себе 2.0",
    },
  ],
};

export default function Home() {
  return (
    <main className="bg-background flex min-h-screen flex-col overflow-x-hidden">
      <HeroSection />
      <TrustBioSection />
      <MediaMentionsSection />
      <div className="flex flex-col gap-16 py-16">
        <CourseSection {...homeWorkouts} />
        <CourseSection {...gymWorkouts} />
        <CourseSection {...pregnancy} />
        <CourseSection {...nutrition} />
        <CourseSection {...selfLove} />
      </div>
      <StatsGallerySection />
      <ContactPromptSection />
      <GuaranteeFeaturesSection />
      <TestimonialCarouselSection />
      <FaqAccordionSection />
      <FooterSection />
      <CookieBanner />
    </main>
  );
}
