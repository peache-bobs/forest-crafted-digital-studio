// Заполните реальными данными: title, description, url (null — ссылки нет).
export type ProjectKind = "bot" | "site" | "automation";

export interface Project {
  kind: ProjectKind;
  tag: string;
  title: string;
  description: string;
  url: string | null;
}

export const projects: Project[] = [
  { kind: "bot", tag: "Telegram-бот", title: "Место для проекта", description: "Описание и ссылка появятся здесь", url: null },
  { kind: "site", tag: "Сайт", title: "Место для проекта", description: "Описание и ссылка появятся здесь", url: null },
  { kind: "automation", tag: "Автоматизация", title: "Место для проекта", description: "Описание и ссылка появятся здесь", url: null },
];
