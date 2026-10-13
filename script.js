"use strict";

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const root = document.documentElement;
const body = document.body;

// --------------------------------------------------
// TRANSLATIONS
// --------------------------------------------------

const translations = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navGaming: "Gaming",
    navAnime: "Anime",
    navSkills: "Skills",
    navContact: "Contact",
    heroEyebrow: "PERSONAL SPACE / 001",
    greeting: "Hello, I'm",
    heroDescription:
      "A calm mind. A clear goal. Always learning, always improving.",
    discover: "Discover more ↘",
    contactMe: "Contact me",
    scroll: "SCROLL TO EXPLORE",
    aboutTitle: "A little about <span>me.</span>",
    aboutIntro: "The person behind the username.",
    whoAmI: "WHO AM I?",
    aboutHeadline: "Learning today.<br>Building tomorrow.",
    aboutText:
      "I'm Kage, from Uzbekistan. I'm interested in programming, gaming and anime. I'm a beginner frontend developer, learning how to turn ideas into useful, clean and modern websites.",
    quickInfo: "QUICK INFO",
    infoName: "Name",
    infoLocation: "Location",
    infoRole: "Focus",
    infoLevel: "Developer level",
    infoStatus: "Status",
    beginner: "Beginner",
    currentGoal: "CURRENT GOAL",
    goalTitle: "Become a professional developer.",
    goalText: "Learn the fundamentals, build real projects and keep improving.",
    quote: "Discipline beats motivation when motivation disappears.",
    gamingTitle: "Game <span>mode.</span>",
    gamingIntro: "Competitive mindset, calm decisions.",
    gameDescription:
      "Five years in the game. Focused on teamwork, support and smart decisions.",
    gameRole: "Role",
    gameRank: "Rank",
    gameExperience: "Experience",
    gameNickname: "Nickname",
    galleryTitle: "Gaming gallery",
    galleryIntro: "A visual corner for screenshots and memorable moments.",
    galleryNote: "Demo images — replace them with your own screenshots.",
    nowPlaying: "Now playing",
    playingCaption: "Current game · Competitive mode",
    animeTitle: "Anime <span>universe.</span>",
    animeIntro: "Stories, strategy and unforgettable characters.",
    favoriteAnime: "FAVORITE ANIME",
    blueLockText: "Competition, ambition and the drive to improve.",
    deathNoteText: "Psychological battles, deduction and difficult choices.",
    favoriteCharacters: "FAVORITE CHARACTERS",
    skillsTitle: "Building my <span>skills.</span>",
    skillsIntro: "A beginner today, a better developer tomorrow.",
    mySkills: "MY SKILLS",
    techTitle: "Technologies",
    techDescription:
      "Currently learning the fundamentals of frontend development.",
    achievements: "ACHIEVEMENTS",
    progressTitle: "Progress over perfection.",
    achievementOne: "Frontend foundations",
    achievementOneText: "Learning HTML, CSS and JavaScript.",
    achievementTwo: "Website building",
    achievementTwoText: "Practising through personal web projects.",
    achievementThree: "Continuous learning",
    achievementThreeText: "Working towards becoming a professional developer.",
    goalMini: "Current goal: Professional developer",
    contactTitle: "Let’s <span>connect.</span>",
    contactIntro: "Have something to say? Find me here.",
    copyTelegram: "COPY TELEGRAM",
    copyTikTok: "COPY TIKTOK",
    sendMessage: "SEND A MESSAGE",
    yourName: "Your name",
    yourEmail: "Your email",
    yourMessage: "Message",
    sendButton: "Send message ↗",
    formNote: "Demo form: messages are not sent to a server.",
    footerText: "Built with focus.",
    visits: "VISITS",
    online: "Online",
    offline: "Offline",
    copied: "Copied to clipboard.",
    copyFailed: "Couldn't copy automatically. Please copy manually.",
    formSuccess: "Demo submitted. No message was actually sent.",
    formInvalid: "Please fill in all fields correctly.",
    themeDark: "Dark",
    themeLight: "Light",
    themeSystem: "System",
  },

  ru: {
    navHome: "Главная",
    navAbout: "Обо мне",
    navGaming: "Игры",
    navAnime: "Аниме",
    navSkills: "Навыки",
    navContact: "Контакты",
    heroEyebrow: "ЛИЧНОЕ ПРОСТРАНСТВО / 001",
    greeting: "Привет, я",
    heroDescription: "Спокойный ум. Чёткая цель. Учусь и становлюсь лучше.",
    discover: "Узнать больше ↘",
    contactMe: "Связаться",
    scroll: "ПРОКРУТИ, ЧТОБЫ ИЗУЧИТЬ",
    aboutTitle: "Немного обо <span>мне.</span>",
    aboutIntro: "Кто стоит за этим никнеймом.",
    whoAmI: "КТО Я?",
    aboutHeadline: "Учусь сегодня.<br>Создаю завтра.",
    aboutText:
      "Я Kage из Узбекистана. Интересуюсь программированием, играми и аниме. Я начинающий frontend-разработчик и учусь превращать идеи в полезные, аккуратные и современные сайты.",
    quickInfo: "КРАТКАЯ ИНФОРМАЦИЯ",
    infoName: "Имя",
    infoLocation: "Город",
    infoRole: "Интересы",
    infoLevel: "Уровень",
    infoStatus: "Статус",
    beginner: "Начинающий",
    currentGoal: "ТЕКУЩАЯ ЦЕЛЬ",
    goalTitle: "Стать профессиональным разработчиком.",
    goalText: "Изучать основы, создавать реальные проекты и развиваться.",
    quote: "Дисциплина сильнее мотивации, когда мотивация исчезает.",
    gamingTitle: "Игровой <span>режим.</span>",
    gamingIntro: "Соревновательный настрой и спокойные решения.",
    gameDescription:
      "Пять лет в игре. Командная работа, поддержка и грамотные решения.",
    gameRole: "Роль",
    gameRank: "Ранг",
    gameExperience: "Стаж",
    gameNickname: "Никнейм",
    galleryTitle: "Игровая галерея",
    galleryIntro: "Скриншоты и запоминающиеся игровые моменты.",
    galleryNote: "Демонстрационные изображения — замени их своими скриншотами.",
    nowPlaying: "Сейчас играю",
    playingCaption: "Текущая игра · Соревновательный режим",
    animeTitle: "Аниме <span>вселенная.</span>",
    animeIntro: "Истории, стратегия и запоминающиеся персонажи.",
    favoriteAnime: "ЛЮБИМОЕ АНИМЕ",
    blueLockText: "Соревнование, амбиции и стремление стать лучше.",
    deathNoteText: "Психологические противостояния, логика и сложные решения.",
    favoriteCharacters: "ЛЮБИМЫЕ ПЕРСОНАЖИ",
    skillsTitle: "Развиваю свои <span>навыки.</span>",
    skillsIntro: "Сегодня новичок, завтра — более опытный разработчик.",
    mySkills: "МОИ НАВЫКИ",
    techTitle: "Технологии",
    techDescription: "Сейчас изучаю основы frontend-разработки.",
    achievements: "ДОСТИЖЕНИЯ",
    progressTitle: "Прогресс важнее совершенства.",
    achievementOne: "Основы frontend",
    achievementOneText: "Изучаю HTML, CSS и JavaScript.",
    achievementTwo: "Создание сайтов",
    achievementTwoText: "Практикуюсь на собственных веб-проектах.",
    achievementThree: "Постоянное обучение",
    achievementThreeText:
      "Двигаюсь к цели стать профессиональным разработчиком.",
    goalMini: "Цель: профессиональный разработчик",
    contactTitle: "Давай <span>на связи.</span>",
    contactIntro: "Есть что сказать? Найди меня здесь.",
    copyTelegram: "КОПИРОВАТЬ TELEGRAM",
    copyTikTok: "КОПИРОВАТЬ TIKTOK",
    sendMessage: "ОТПРАВИТЬ СООБЩЕНИЕ",
    yourName: "Твоё имя",
    yourEmail: "Твоя почта",
    yourMessage: "Сообщение",
    sendButton: "Отправить ↗",
    formNote: "Демонстрационная форма: сообщения не отправляются на сервер.",
    footerText: "Создано с концентрацией.",
    visits: "ВИЗИТЫ",
    online: "В сети",
    offline: "Не в сети",
    copied: "Скопировано в буфер обмена.",
    copyFailed: "Не удалось скопировать автоматически. Скопируй вручную.",
    formSuccess: "Демонстрационная отправка. Сообщение не было отправлено.",
    formInvalid: "Заполни все поля правильно.",
    themeDark: "Тёмная",
    themeLight: "Светлая",
    themeSystem: "Системная",
  },
};

let currentLanguage = "en";

function translatePage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;

  $$("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translation = translations[language][key];

    if (translation !== undefined) {
      element.innerHTML = translation;
    }
  });

  $("#languageToggle").textContent = language === "en" ? "RU" : "EN";
  $("#languageToggle").setAttribute(
    "aria-label",
    language === "en" ? "Switch to Russian" : "Switch to English",
  );

  $("#senderName").placeholder = language === "en" ? "Name" : "Имя";
  $("#senderEmail").placeholder =
    language === "en" ? "you@example.com" : "you@example.com";
  $("#senderMessage").placeholder =
    language === "en" ? "Write your message..." : "Напиши сообщение...";

  renderStatus();
}

$("#languageToggle").addEventListener("click", () => {
  const nextLanguage = currentLanguage === "en" ? "ru" : "en";
  translatePage(nextLanguage);

  try {
    localStorage.setItem("kage-language", nextLanguage);
  } catch {
    // The site still works when storage is unavailable.
  }
});

// --------------------------------------------------
// THEME: DARK / LIGHT / SYSTEM
// --------------------------------------------------

const themeIcon = $("#themeIcon");
const systemTheme = window.matchMedia("(prefers-color-scheme: light)");

let currentTheme = "system";

function applyTheme(theme) {
  currentTheme = theme;

  const actualTheme =
    theme === "system" ? (systemTheme.matches ? "light" : "dark") : theme;

  root.dataset.theme = actualTheme;
  themeIcon.textContent = actualTheme === "dark" ? "☾" : "☀";

  $("#themeToggle").title =
    `${translations[currentLanguage].themeDark} / ` +
    `${translations[currentLanguage].themeLight} / ` +
    `${translations[currentLanguage].themeSystem} · ${theme}`;

  try {
    localStorage.setItem("kage-theme", theme);
  } catch {
    // Theme remains active for this session.
  }
}

$("#themeToggle").addEventListener("click", () => {
  const nextTheme =
    currentTheme === "system"
      ? "dark"
      : currentTheme === "dark"
        ? "light"
        : "system";

  applyTheme(nextTheme);
  showToast(
    `${translations[currentLanguage].themeSystem}: ` +
      `${
        translations[currentLanguage][
          nextTheme === "dark"
            ? "themeDark"
            : nextTheme === "light"
              ? "themeLight"
              : "themeSystem"
        ]
      }`,
  );
});

systemTheme.addEventListener("change", () => {
  if (currentTheme === "system") {
    applyTheme("system");
  }
});

// --------------------------------------------------
// LOADER
// --------------------------------------------------

function hideLoader() {
  $("#loader").classList.add("hidden");
}

window.addEventListener("load", () => {
  setTimeout(hideLoader, 350);
});

// Fallback for slow loading or cached pages.
setTimeout(hideLoader, 2500);

// --------------------------------------------------
// MOBILE NAVIGATION
// --------------------------------------------------

const menuToggle = $("#menuToggle");
const navLinks = $("#navLinks");

function closeMenu() {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  body.classList.toggle("menu-open", isOpen);
});

$$(".nav-links a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    closeLightbox();
  }
});

// --------------------------------------------------
// MANUAL ONLINE / OFFLINE STATUS
// Click the status in the hero to change it.
// --------------------------------------------------

let isOnline = true;

function renderStatus() {
  const label = translations[currentLanguage][isOnline ? "online" : "offline"];

  $("#heroStatusText").textContent = label;
  $("#aboutStatusText").textContent = label;

  $("#heroStatusDot").classList.toggle("offline", !isOnline);

  const aboutDot = $(".status-value .status-dot");
  aboutDot.classList.toggle("offline", !isOnline);

  $("#heroStatusText").title =
    currentLanguage === "en"
      ? "Click to toggle your status"
      : "Нажми, чтобы изменить статус";

  $("#heroStatusText").style.cursor = "pointer";
  $("#heroStatusText").setAttribute("role", "button");
  $("#heroStatusText").setAttribute("tabindex", "0");
  $("#heroStatusText").setAttribute("aria-label", "Toggle online status");
}

function toggleStatus() {
  isOnline = !isOnline;
  renderStatus();

  try {
    localStorage.setItem("kage-online", String(isOnline));
  } catch {
    // The status remains changed for this session.
  }
}

$("#heroStatusText").addEventListener("click", toggleStatus);

$("#heroStatusText").addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggleStatus();
  }
});

// --------------------------------------------------
// TYPEWRITER EFFECT
// --------------------------------------------------

const typingText = $("#typingText");

const typingWords = {
  en: ["Gamer", "Developer", "Anime fan"],
  ru: ["Геймер", "Разработчик", "Любитель аниме"],
};

let wordIndex = 0;
let charIndex = 0;
let deleting = false;
let typingTimer;

function typeWriter() {
  const words = typingWords[currentLanguage];
  const word = words[wordIndex % words.length];

  charIndex += deleting ? -1 : 1;
  typingText.textContent = word.substring(0, charIndex);

  let delay = deleting ? 45 : 90;

  if (!deleting && charIndex === word.length) {
    deleting = true;
    delay = 1250;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    delay = 350;
  }

  typingTimer = setTimeout(typeWriter, delay);
}

typeWriter();

// --------------------------------------------------
// SCROLL PROGRESS, BACK TO TOP, ACTIVE NAV
// --------------------------------------------------

const progressBar = $("#scrollProgress");
const backToTop = $("#backToTop");
let scrollTicking = false;

function updateScroll() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

  progressBar.style.width = `${Math.min(100, progress)}%`;
  backToTop.classList.toggle("visible", window.scrollY > 450);

  scrollTicking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(updateScroll);
      scrollTicking = true;
    }
  },
  { passive: true },
);

updateScroll();

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const sections = $$("main section[id]");
const navItems = $$(".nav-links a");

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navItems.forEach((link) => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("active", active);
        });
      });
    },
    { rootMargin: "-25% 0px -60% 0px" },
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

// --------------------------------------------------
// REVEAL SECTIONS ON SCROLL
// --------------------------------------------------

const revealElements = $$(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

// --------------------------------------------------
// TOAST NOTIFICATIONS
// --------------------------------------------------

let toastTimer;

function showToast(message) {
  const toast = $("#toast");

  toast.textContent = message;
  toast.classList.add("visible");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("visible");
  }, 2400);
}

// --------------------------------------------------
// COPY CONTACTS
// --------------------------------------------------

async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const temporaryInput = document.createElement("textarea");

      temporaryInput.value = text;
      temporaryInput.style.position = "fixed";
      temporaryInput.style.opacity = "0";
      body.appendChild(temporaryInput);

      temporaryInput.select();
      const copied = document.execCommand("copy");
      temporaryInput.remove();

      if (!copied) throw new Error("Copy failed");
    }

    showToast(translations[currentLanguage].copied);
  } catch {
    showToast(translations[currentLanguage].copyFailed);
  }
}

$$("[data-copy]").forEach((button) => {
  button.addEventListener("click", () => {
    copyText(button.dataset.copy);
  });
});

// --------------------------------------------------
// CONTACT FORM
// Demo only. No backend or real message delivery.
// --------------------------------------------------

const contactForm = $("#contactForm");
const submitButton = $("#submitButton");
let isSubmitting = false;

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (isSubmitting) return;

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    showToast(translations[currentLanguage].formInvalid);
    return;
  }

  isSubmitting = true;
  submitButton.disabled = true;

  const originalText = submitButton.textContent;
  submitButton.textContent =
    currentLanguage === "en" ? "Processing..." : "Обработка...";

  // Simulates a submission. It does not send data anywhere.
  setTimeout(() => {
    showToast(translations[currentLanguage].formSuccess);
    contactForm.reset();

    submitButton.textContent = originalText;
    submitButton.disabled = false;
    isSubmitting = false;
  }, 500);
});

// --------------------------------------------------
// GALLERY LIGHTBOX
// --------------------------------------------------

const galleryItems = $$(".gallery-item");
const lightbox = $("#lightbox");
const lightboxImage = $("#lightboxImage");

let activeGalleryIndex = 0;

function showGalleryImage(index) {
  if (!galleryItems.length) return;

  activeGalleryIndex = (index + galleryItems.length) % galleryItems.length;

  const image = $("img", galleryItems[activeGalleryIndex]);

  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
}

function openLightbox(index) {
  showGalleryImage(index);
  lightbox.classList.add("open");
  body.classList.add("lightbox-open");
  $("#lightboxClose").focus();
}

function closeLightbox() {
  lightbox.classList.remove("open");
  body.classList.remove("lightbox-open");
}

galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => openLightbox(index));
});

$("#lightboxClose").addEventListener("click", closeLightbox);

$("#lightboxPrev").addEventListener("click", () => {
  showGalleryImage(activeGalleryIndex - 1);
});

$("#lightboxNext").addEventListener("click", () => {
  showGalleryImage(activeGalleryIndex + 1);
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("open")) return;

  if (event.key === "ArrowLeft") {
    showGalleryImage(activeGalleryIndex - 1);
  } else if (event.key === "ArrowRight") {
    showGalleryImage(activeGalleryIndex + 1);
  }
});

// --------------------------------------------------
// LOCAL VISIT COUNTER
// Counts visits in this browser, not all website visitors.
// --------------------------------------------------

function initializeVisitCounter() {
  const counter = $("#visitCount");

  try {
    const count = Number(localStorage.getItem("kage-visits") || 0) + 1;
    localStorage.setItem("kage-visits", String(count));
    counter.textContent = count.toLocaleString();
  } catch {
    counter.textContent = "—";
  }
}

// --------------------------------------------------
// INITIALIZE
// --------------------------------------------------

function initialize() {
  try {
    const savedLanguage = localStorage.getItem("kage-language");
    const savedTheme = localStorage.getItem("kage-theme");
    const savedStatus = localStorage.getItem("kage-online");

    if (savedLanguage === "en" || savedLanguage === "ru") {
      translatePage(savedLanguage);
    }

    if (["dark", "light", "system"].includes(savedTheme)) {
      applyTheme(savedTheme);
    } else {
      applyTheme("system");
    }

    if (savedStatus === "true" || savedStatus === "false") {
      isOnline = savedStatus === "true";
    }
  } catch {
    applyTheme("system");
  }

  translatePage(currentLanguage);
  renderStatus();

  $("#year").textContent = new Date().getFullYear();

  initializeVisitCounter();
}

initialize();
