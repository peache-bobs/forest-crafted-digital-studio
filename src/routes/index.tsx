import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import hero from "@/assets/forest-hero.jpg";
import { projects, type ProjectKind } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Разработка под задачу — сайты, боты и автоматизация" },
      { name: "description", content: "Независимый разработчик: Telegram-боты, сайты, автоматизация ресторанов, интеграции, внутренние инструменты и AI-помощники." },
      { property: "og:title", content: "Разработка под задачу — сайты, боты и автоматизация" },
      { property: "og:description", content: "Помогаю превратить идею в работающий инструмент: от Telegram-бота до системы управления заведением." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { id: "projects", label: "Проекты" },
  { id: "services", label: "Услуги" },
  { id: "approach", label: "Подход" },
  { id: "contact", label: "Контакт" },
];

const services = [
  { t: "Telegram-боты", d: "Заказы, запись, уведомления и поддержка — там, где ваши клиенты уже общаются." },
  { t: "Сайты и веб-приложения", d: "Лендинги, каталоги и личные кабинеты: быстрые, понятные, удобные с телефона." },
  { t: "Автоматизация ресторанов и кафе", d: "QR-меню, бронирования, приём заказов и отчёты — меньше ручной работы для команды." },
  { t: "Интеграции и CRM", d: "Связываю формы, таблицы и сервисы, чтобы данные приходили туда, где они нужны." },
  { t: "Внутренние инструменты", d: "Дашборды, учёт и управление задачами под ваши процессы, а не наоборот." },
  { t: "AI-помощники", d: "Ответы по базе знаний и обработка типовых обращений, с понятными границами." },
];

const steps = [
  { t: "Разбираюсь в задаче", d: "Выясняю, что должно работать, для кого и как будет выглядеть результат." },
  { t: "Предлагаю решение", d: "Описываю состав работ и подход простыми словами, без лишнего." },
  { t: "Собираю и проверяю", d: "Делаю по частям, показываю промежуточный результат и тестирую." },
  { t: "Помогаю с запуском", d: "Публикация, настройка и объяснение, как всем пользоваться." },
];

const briefTypes = ["Telegram-бот", "Сайт", "Веб-приложение", "Автоматизация заведения", "Интеграция / CRM", "Внутренний инструмент", "AI-помощник", "Пока не знаю"];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function Index() {
  useReveal();
  const [menu, setMenu] = useState(false);
  return (
    <div className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
          <a href="#top" className="font-display text-xl tracking-wide">
            Разработка <span className="text-muted-foreground">/ под задачу</span>
          </a>
          <nav className="hidden gap-8 md:flex" aria-label="Основная навигация">
            {nav.map((n, i) => (
              <a key={n.id} href={`#${n.id}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                <span className="index-label mr-1.5">0{i + 1}</span>{n.label}
              </a>
            ))}
          </nav>
          <button type="button" className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-foreground transition-colors hover:bg-foreground/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground md:hidden" aria-label={menu ? "Закрыть меню" : "Открыть меню"} aria-expanded={menu} aria-controls="mnav" onClick={() => setMenu(!menu)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              {menu ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {menu && (
          <nav id="mnav" className="border-t border-border px-5 pb-6 md:hidden" aria-label="Мобильная навигация">
            {nav.map((n, i) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setMenu(false)} className="flex items-baseline gap-3 border-b border-border py-4 font-display text-2xl">
                <span className="index-label">0{i + 1}</span>{n.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative flex min-h-[100svh] items-end overflow-hidden">
          <img src={hero} alt="" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
          <div className="hero-veil absolute inset-0" />
          <Schematic />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-10 md:pb-24">
            <p className="index-label hero-in mb-8">[ 00 ] Независимая разработка</p>
            <h1 className="hero-in font-display text-[2.6rem] font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.5rem]">
              Сайты, боты и автоматизация.
              <br />
              <span className="text-muted-foreground italic">Под задачи вашего бизнеса.</span>
            </h1>
            <p className="hero-in mt-8 max-w-xl text-base font-light leading-relaxed md:text-lg">
              Помогаю превратить идею в работающий инструмент: от Telegram-бота до системы управления заведением.
            </p>
            <div className="hero-in mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="inline-flex items-center justify-center gap-3 bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85">
                Смотреть проекты <span aria-hidden>↓</span>
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-3 border border-foreground/40 px-7 py-4 text-sm transition-colors hover:border-foreground hover:bg-foreground/5">
                Обсудить задачу <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <Section id="projects" idx="01" title="Проекты" lead="Несколько работ: инструмент для заведения, сайт ресторана и Telegram-бот.">
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <article key={i} className="reveal group border border-border bg-card">
                <div className="aspect-[4/3] border-b border-border bg-background/40 p-5">
                  <Mock kind={p.kind} />
                </div>
                <div className="p-6">
                  <div className="flex justify-between">
                    <span className="index-label">P.0{i + 1}</span>
                    <span className="index-label">{p.tag}</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                  {p.future && (
                    <p className="mt-4 border-l border-border pl-3 text-xs leading-relaxed text-muted-foreground">
                      <span className="index-label block">Возможное развитие</span>
                      {p.future.charAt(0).toUpperCase() + p.future.slice(1)}
                    </p>
                  )}
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-sm underline underline-offset-4 hover:text-muted-foreground">
                    {p.linkLabel} <span aria-hidden>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* SERVICES */}
        <Section id="services" idx="02" title="Услуги" lead="Беру задачу целиком: от первого разговора до запуска. Делаю инструменты, которыми удобно пользоваться каждый день.">
          <div className="grid border-t border-l border-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div key={s.t} className="reveal border-r border-b border-border p-7 transition-colors hover:bg-card md:p-9">
                <span className="index-label">S.0{i + 1}</span>
                <h3 className="mt-10 font-display text-2xl leading-tight md:text-[1.75rem]">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* APPROACH */}
        <Section id="approach" idx="03" title="Подход" lead="Четыре шага без лишней бюрократии.">
          <ol className="grid gap-0 md:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.t} className="reveal border-t border-border py-8 md:pr-8">
                <span className="font-mono text-xs text-muted-foreground">0{i + 1} ——</span>
                <h3 className="mt-6 font-display text-2xl">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* CONTACT */}
        <Section id="contact" idx="04" title="Обсудим вашу задачу" lead="Напишите в Telegram, позвоните или отправьте бриф на почту — обсудим задачу и следующий шаг.">
          <div className="mb-10 flex flex-wrap gap-5 text-sm">
            <a href="https://t.me/peachesafkin" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">@peachesafkin ↗</a>
            <a href="tel:+79166104877" className="underline underline-offset-4">+7 (916) 610-48-77</a>
            <a href="mailto:peachesamsa@gmail.com" className="break-all underline underline-offset-4">peachesamsa@gmail.com</a>
          </div>
          <Brief />
        </Section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-5 py-8 md:flex-row md:px-10">
          <span className="font-display text-lg">Разработка / под задачу</span>
          <span className="index-label">Сайты · Боты · Автоматизация</span>
        </div>
      </footer>
    </div>
  );
}

function Section({ id, idx, title, lead, children }: { id: string; idx: string; title: string; lead: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <div className="mb-14 grid gap-6 md:grid-cols-12">
          <span className="index-label md:col-span-2">[ {idx} ]</span>
          <h2 className="reveal font-display text-4xl font-medium leading-none tracking-tight md:col-span-6 md:text-6xl">{title}</h2>
          <p className="reveal max-w-md text-sm leading-relaxed text-muted-foreground md:col-span-4 md:self-end">{lead}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

function Schematic() {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full text-foreground/25" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="0.8">
        <path className="draw-line" d="M0 620 H380 L440 560 H760 L800 600 H1440" />
        <path className="draw-line" d="M1080 0 V280 L1140 340 V520 H1440" />
        <path className="draw-line" d="M120 900 V700 H300 L340 660" />
        <circle cx="440" cy="560" r="4" />
        <circle cx="800" cy="600" r="4" />
        <circle cx="1140" cy="340" r="4" />
        <rect x="1110" y="420" width="60" height="36" />
      </g>
      <g fill="currentColor" fontFamily="JetBrains Mono, monospace" fontSize="10">
        <text x="450" y="550">node.01</text>
        <text x="1150" y="335">api / sync</text>
        <text x="1180" y="443">db</text>
      </g>
    </svg>
  );
}

function Mock({ kind }: { kind: ProjectKind }) {
  const bar = "h-2 bg-secondary";
  if (kind === "bot")
    return (
      <div className="mx-auto flex h-full max-w-[60%] flex-col gap-2 border border-border p-3 transition-transform duration-700 group-hover:-translate-y-1">
        <div className={`${bar} w-1/3`} />
        <div className="mt-2 w-3/4 self-start bg-secondary p-2"><div className="h-1.5 w-full bg-muted-foreground/40" /></div>
        <div className="w-2/3 self-end border border-border p-2"><div className="h-1.5 w-full bg-muted-foreground/30" /></div>
        <div className="w-3/5 self-start bg-secondary p-2"><div className="h-1.5 w-full bg-muted-foreground/40" /></div>
        <div className="mt-auto grid grid-cols-2 gap-1.5">
          <div className="h-5 border border-border" /><div className="h-5 border border-border" />
        </div>
      </div>
    );
  if (kind === "site")
    return (
      <div className="flex h-full flex-col border border-border transition-transform duration-700 group-hover:-translate-y-1">
        <div className="flex gap-1 border-b border-border p-2">{[0, 1, 2].map((i) => <span key={i} className="h-1.5 w-1.5 rounded-full bg-secondary" />)}</div>
        <div className="flex-1 space-y-2 p-4">
          <div className={`${bar} w-1/2`} /><div className="h-1.5 w-1/3 bg-secondary/70" />
          <div className="grid grid-cols-3 gap-2 pt-3">{[0, 1, 2].map((i) => <div key={i} className="aspect-square border border-border" />)}</div>
        </div>
      </div>
    );
  return (
    <svg viewBox="0 0 200 150" className="h-full w-full text-muted-foreground transition-transform duration-700 group-hover:-translate-y-1">
      <g fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.7">
        <rect x="10" y="20" width="44" height="26" /><rect x="10" y="104" width="44" height="26" />
        <rect x="80" y="60" width="44" height="30" /><rect x="150" y="60" width="40" height="30" />
        <path d="M54 33 H68 V75 H80 M54 117 H68 V75 M124 75 H150" />
        <circle cx="68" cy="75" r="2.5" fill="currentColor" />
      </g>
    </svg>
  );
}

function Brief() {
  const [type, setType] = useState(briefTypes[0]);
  const [desc, setDesc] = useState("");
  const [telegram, setTelegram] = useState("");
  const [status, setStatus] = useState("");
  function briefText() {
    return `Бриф\nТип проекта: ${type}\nTelegram: @${telegram.trim().replace(/^@/, "")}\nОписание задачи:\n${desc.trim()}`;
  }
  function validate(form: HTMLFormElement) {
    if (!form.reportValidity()) return false;
    if (!desc.trim()) { setStatus("Опишите задачу, чтобы я мог предложить решение."); return false; }
    return true;
  }

  async function copy(form: HTMLFormElement) {
    if (!validate(form)) return;
    try {
      await navigator.clipboard.writeText(briefText());
      setStatus("Бриф скопирован. Отправьте его в Telegram или на почту.");
    } catch {
      setStatus("Не удалось скопировать. Скопируйте текст из полей вручную.");
    }
  }

  return (
    <div className="reveal grid gap-10 border border-border bg-card p-6 md:grid-cols-12 md:p-10">
      <div className="md:col-span-4">
        <span className="index-label">Мини-бриф</span>
        <p className="mt-4 font-display text-2xl leading-snug">Расскажите о задаче и обязательно оставьте свой Telegram для ответа.</p>
      </div>
      <form className="space-y-6 md:col-span-8" onSubmit={(event) => {
        event.preventDefault();
        if (!validate(event.currentTarget)) return;
        window.location.href = `mailto:peachesamsa@gmail.com?subject=${encodeURIComponent("Заявка с сайта: " + type)}&body=${encodeURIComponent(briefText())}`;
        setStatus("Откроется почтовое приложение. Нажмите «Отправить» в нём. Если оно не открылось, скопируйте бриф и отправьте вручную.");
      }}>
        <fieldset>
          <legend className="index-label mb-3">Тип проекта</legend>
          <div className="flex flex-wrap gap-2">
            {briefTypes.map((t) => (
              <button
                key={t}
                type="button"
                aria-pressed={type === t}
                onClick={() => setType(t)}
                className={`border px-3 py-2 text-sm transition-colors ${type === t ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground hover:border-foreground/60 hover:text-foreground"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </fieldset>
        <div>
          <label htmlFor="telegram" className="index-label mb-3 block">Ваш Telegram — обязательно</label>
          <input id="telegram" name="telegram" required pattern="@?[A-Za-z][A-Za-z0-9_]{3,31}" maxLength={33}
            title="Введите Telegram username: 4–32 латинские буквы, цифры или подчёркивания, начиная с буквы. Знак @ необязателен."
            value={telegram} onChange={(e) => { setTelegram(e.target.value); setStatus(""); }}
            placeholder="@username" autoCapitalize="none" spellCheck={false}
            className="w-full border border-input bg-background/60 p-4 text-sm focus:border-foreground focus:outline-none" />
        </div>
        <div>
          <label htmlFor="desc" className="index-label mb-3 block">Описание задачи</label>
          <textarea
            id="desc"
            rows={5}
            required
            maxLength={1500}
            value={desc}
            onChange={(e) => { setDesc(e.target.value); setStatus(""); }}
            placeholder="Например: нужен бот для записи клиентов с напоминаниями…"
            className="w-full resize-y border border-input bg-background/60 p-4 text-sm placeholder:text-muted-foreground/70 focus:border-foreground focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <button type="submit" className="bg-primary px-7 py-4 text-sm font-medium text-primary-foreground hover:opacity-85">
            Открыть письмо с брифом
          </button>
          <button type="button" onClick={(e) => { if (e.currentTarget.form) void copy(e.currentTarget.form); }} className="border border-border px-7 py-4 text-sm hover:border-foreground">
            Скопировать бриф
          </button>
        </div>
        <p className="text-sm text-muted-foreground">Письмо откроется в вашем почтовом приложении. Для отправки подтвердите его там. Можно также скопировать бриф и написать в Telegram.</p>
        <p role="status" aria-live="polite" className="text-sm text-muted-foreground">{status}</p>
      </form>
    </div>
  );
}
