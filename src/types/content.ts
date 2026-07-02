export interface MarathonCardData {
  badge: string;
  title: string;
  boldText: string;
  text: string;
  buttonText: string;
  buttonHref: string;
  image: string;
  imageAlt: string;
  flagship?: boolean;
  imageOffsetClassName?: string;
}

export interface CourseSectionData {
  title: string;
  cards: MarathonCardData[];
}

export interface FaqItemData {
  question: string;
  answer: string;
}

export interface SocialLinkData {
  href: string;
  icon: string;
  label: string;
}

export interface MediaMentionData {
  image: string;
  alt: string;
}

export interface GuaranteeFeatureData {
  icon: string;
  title: string;
  text: string;
}

export interface TestimonialData {
  image: string;
  alt: string;
}
