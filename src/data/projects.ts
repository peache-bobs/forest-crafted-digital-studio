export type ProjectKind = "bot" | "site" | "automation";

export interface Project {
  kind: ProjectKind;
  tag: string;
  title: string;
  description: string;
  /** Идея на будущее — не реализованная функция. */
  future?: string;
  url: string;
  linkLabel: string;
}

export const projects: Project[] = [
  {
    kind: "automation",
    tag: "Автоматизация",
    title: "Servi",
    description: "Инструмент для упрощения работы официантов.",
    future: "автоматическая передача заказов на кухню",
    url: "https://peache-bobs.github.io/Servi/",
    linkLabel: "Открыть сайт",
  },
  {
    kind: "site",
    tag: "Сайт",
    title: "Сайт турецкого ресторана",
    description: "Сайт для знакомства гостей с рестораном.",
    url: "https://peache-bobs.github.io/test-sempati/",
    linkLabel: "Открыть сайт",
  },
  {
    kind: "bot",
    tag: "Telegram-бот",
    title: "Turkey Find Friends",
    description: "Telegram-бот для знакомств в Турции.",
    url: "https://t.me/TurkeyFindFriendsBot",
    linkLabel: "Открыть бота",
  },
];
