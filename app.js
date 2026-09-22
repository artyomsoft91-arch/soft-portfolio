const copy = {
  EN: {
    navWork: "Work",
    navAbout: "About",
    navContact: "Contact",
    navFeedback: "Feedback",
    contactButton: "Contact",
    heroLineOne: "YouTube Video Editing",
    heroLineTwo: "for Experts and Podcasters",
    heroCopy: "I edit podcasts, interviews, and talking-head videos, shaping the structure, pacing, and visual storytelling through graphics and motion design. The creator and their message remain at the center of every video.",
    startProject: "Start a project",
    seeWork: "See the work",
    aboutLabel: "ABOUT",
    aboutTitle: "Hi!",
    aboutP1: "I'm a video editor specializing in long-form YouTube content, including podcasts, interviews, and talking-head videos.",
    aboutP2: "I take care of the structure, pacing, sound, graphics, and overall presentation. I remove anything that distracts from the message, highlight key moments, and use motion design only where it adds value.",
    aboutP3: "To me, editing should never compete with the creator. Its role is to support the content and help communicate the message clearly.",
    aboutP4: "I handle every project from the first cut to the final export and stay in touch throughout every stage.",
    retainer: "Retainer-ready",
    feedbackLabel: "Feedback",
    testimonialsTitle: "What clients say",
    testimonialsIntro: "Firsthand collaboration experience",
    connect: "Connect",
    contactTitle: "Ready to drop files?",
    contactCopy: "Reach out by email or on Twitter to discuss workflow, timelines, and start editing.",
    replyTime: "Usually reply within an hour",
    videoSlot: "Video slot",
    addVideo: "Add your video",
    projectLabel: "Project",
    projectDescription: "A short description of the project will appear here.",
    watchVideo: "Watch video",
    openVideo: "Open on YouTube"
  },
  RU: {
    navWork: "Работы",
    navAbout: "Обо мне",
    navContact: "Контакт",
    navFeedback: "Отзывы",
    contactButton: "Связаться",
    heroLineOne: "Монтаж YouTube-видео",
    heroLineTwo: "для экспертов и подкастеров",
    heroCopy: "Работаю с подкастами, интервью и talking head-видео: выстраиваю структуру, задаю ритм и дополняю речь графикой и моушном. В центре ролика остаются автор и его мысль.",
    startProject: "Начать проект",
    seeWork: "Смотреть работы",
    aboutLabel: "ОБО МНЕ",
    aboutTitle: "Привет!",
    aboutP1: "Я видеомонтажёр и специализируюсь на длинных YouTube-видео: подкастах, интервью и talking head-формате.",
    aboutP2: "В работе отвечаю за структуру, темп, звук, графику и финальную подачу материала. Убираю то, что мешает следить за мыслью, выделяю ключевые моменты и использую моушн там, где он действительно нужен.",
    aboutP3: "Для меня монтаж не должен конкурировать с автором. Его задача — поддерживать содержание и помогать донести мысль до зрителя.",
    aboutP4: "Работаю над проектом от первой сборки до финального рендера и остаюсь на связи на каждом этапе.",
    retainer: "Постоянное ведение",
    feedbackLabel: "Отзывы",
    testimonialsTitle: "Что говорят клиенты",
    testimonialsIntro: "Опыт сотрудничества из первых уст",
    connect: "Связь",
    contactTitle: "Обсудим ваш проект?",
    contactCopy: "Напишите мне на почту или в Twitter — обсудим формат, сроки и начнём работу.",
    replyTime: "Обычно отвечаю в течение часа",
    videoSlot: "Место под ролик",
    addVideo: "Добавьте видео",
    projectLabel: "Проект",
    projectDescription: "Здесь появится короткое описание проекта.",
    watchVideo: "Смотреть видео",
    openVideo: "Открыть на YouTube"
  }
};

const videos = [
  {
    title: { EN: "Seven Years in Trading", RU: "Семь лет в трейдинге" },
    tag: { EN: "Talking Head", RU: "Talking Head" },
    description: {
      EN: "A long-form talking-head edit built around a trader’s seven-year journey — from early mistakes and market lessons to the experience that shaped his current approach.",
      RU: "Длинное talking head-видео о семилетнем пути трейдера: первых ошибках, уроках рынка и опыте, который сформировал его нынешний подход."
    },
    duration: "",
    thumbnail: "https://i.ytimg.com/vi/7c03qTs32ys/maxresdefault.jpg",
    url: "https://www.youtube-nocookie.com/embed/zdD4AEVbBtA",
    sourceUrl: "https://youtu.be/7c03qTs32ys"
  },
  {
    title: { EN: "Selected Editing Moments", RU: "Избранные фрагменты монтажа" },
    tag: { EN: "Showreel", RU: "Шоурил" },
    description: {
      EN: "A compact showreel combining standout moments from several projects to highlight pacing, clean motion design, visual rhythm, and attention to detail.",
      RU: "Небольшой шоурил из сильных фрагментов нескольких проектов, который показывает работу с темпом, чистым моушн-дизайном, визуальным ритмом и деталями."
    },
    duration: "",
    thumbnail: "https://i.ytimg.com/vi/qRpPG479vgg/maxresdefault.jpg",
    url: "https://www.youtube-nocookie.com/embed/qRpPG479vgg?rel=0&playsinline=1",
    sourceUrl: "https://youtu.be/qRpPG479vgg"
  },
  {
    title: { EN: "Opening Film for an AI Course", RU: "Открытие курса по AI" },
    tag: { EN: "Podcast · Course Intro", RU: "Подкаст · Открытие курса" },
    description: {
      EN: "A podcast-style opening film for Kirill and Alexey’s course. The edit introduces two experts in AI and marketing, keeps the conversation clear, and builds momentum toward the programme.",
      RU: "Вступительное видео для курса Кирилла и Алексея. Монтаж знакомит зрителя с экспертами по AI и маркетингу, сохраняет ясность разговора и подводит к программе курса."
    },
    duration: "",
    thumbnail: "https://i.ytimg.com/vi/qaojBS3E9KA/maxresdefault.jpg",
    url: "https://www.youtube-nocookie.com/embed/qaojBS3E9KA?rel=0&playsinline=1",
    sourceUrl: "https://youtu.be/qaojBS3E9KA"
  }
];

const testimonials = {
  EN: [
    { name: "David Seyranyan", role: "Video Production · SMM · AI", text: "I reached out to Artyom for two fairly large editing projects. Dedication, dedication, dedication — that's the main thing I want to say. He treated both projects like his own and aimed for perfection. Every revision was handled with care. If you're on the fence — go for it." },
    { name: "Ilya Yatsko", role: "Video Editor", text: "I can confidently recommend Artyom — he delivered exactly what I asked for and finished ahead of schedule. No revisions needed at all!" },
    { name: "Alex", role: "Video Producer", text: "Artyom made an excellent video. Really loved the reel edit. Reach out to Artyom and don't worry about your video editing." },
    { name: "Nikita", role: "Camera Operator", text: "Thank you for the great work — the video turned out exactly how I envisioned. Really appreciate how well you handle revisions and feedback." }
  ],
  RU: [
    { name: "David Seyranyan", role: "Video Production · SMM · AI", text: "Обращался к Артему за помощью в монтаже двух объёмных проектов. Старание, старание и ещё раз старание — вот главное, что хочу сказать. В оба проекта вникал как в свои собственные. Все правки и пожелания учитывал и делал в идеал. Смело обращайтесь." },
    { name: "Ilya Yatsko", role: "Видеомонтажёр", text: "Смело могу рекомендовать Артема — выполнил задачу ровно как я просил и сделал это быстрее заданных сроков. Даже не потребовалось никаких правок!" },
    { name: "Alex", role: "Видеопродюсер", text: "Артём сделал отличное видео. Очень понравился монтаж рилса. Обращайтесь к Артёму и не волнуйтесь за монтаж своих роликов." },
    { name: "Nikita", role: "Оператор", text: "Спасибо за проделанную работу — видео получилось в точности таким, как я и хотел. Особенно радует, что адекватно относишься к правкам и пожеланиям." }
  ]
};

let language = "EN";
let videoStoryObserver = null;

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
}

function localize(value) {
  if (value && typeof value === "object") return value[language] || value.EN || "";
  return value || "";
}

function renderVideos() {
  const dictionary = copy[language];
  document.querySelector("#video-grid").innerHTML = videos.map((video, index) => {
    const hasMedia = Boolean(video.url);
    const title = localize(video.title) || `${dictionary.videoSlot} ${String(index + 1).padStart(2, "0")}`;
    const tag = localize(video.tag) || dictionary.addVideo;
    const description = localize(video.description) || dictionary.projectDescription;
    const thumb = `<div class="video-empty" aria-hidden="true"><span>PLAY</span></div>${video.thumbnail ? `<img class="video-thumb" src="${escapeHtml(video.thumbnail)}" alt="" loading="lazy" decoding="async" />` : ""}`;
    return `<article class="video-story">
      <div class="video-card${hasMedia ? " has-media" : ""}" data-player-index="${index}">
        <div class="video-poster" data-video-index="${index}" aria-label="${escapeHtml(dictionary.watchVideo)}: ${escapeHtml(title)}"${hasMedia ? ' tabindex="0" role="button"' : ""}>
          ${thumb}<div class="video-vignette"></div><span class="video-index">0${index + 1}</span>${video.duration ? `<span class="video-duration">${escapeHtml(video.duration)}</span>` : ""}
        </div>
      </div>
      <div class="video-copy">
        <span class="project-counter">${escapeHtml(dictionary.projectLabel)} ${String(index + 1).padStart(2, "0")} / 03</span>
        <span class="project-type">${escapeHtml(tag)}</span>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(description)}</p>
        <div class="video-actions">
          <button class="watch-button" type="button" data-video-index="${index}">${escapeHtml(dictionary.watchVideo)}</button>
          <a class="video-link" href="${escapeHtml(video.sourceUrl || video.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(dictionary.openVideo)}</a>
        </div>
      </div>
    </article>`;
  }).join("");
  observeVideoStories();
}

function observeVideoStories() {
  const stories = document.querySelectorAll(".video-story");
  if (!("IntersectionObserver" in window)) {
    stories.forEach((story) => story.classList.add("is-visible"));
    return;
  }
  if (!videoStoryObserver) {
    videoStoryObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        videoStoryObserver.unobserve(entry.target);
      });
    }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
  }
  stories.forEach((story) => videoStoryObserver.observe(story));
}

function renderTestimonials() {
  document.querySelector("#testimonial-grid").innerHTML = testimonials[language].map((item, index) => `<article class="testimonial"><span class="quote-number">“ 0${index + 1}</span><blockquote>${escapeHtml(item.text)}</blockquote><footer><span class="avatar">${escapeHtml(item.name.charAt(0))}</span><span class="client"><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.role)}</span></span></footer></article>`).join("");
}

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language === "RU" ? "ru" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[language][element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-lang]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.lang === language)));
  renderVideos();
  renderTestimonials();
}

function setupReveals() {
  const sections = document.querySelectorAll("main > section");
  sections.forEach((section) => section.classList.add("reveal-section"));
  if (!("IntersectionObserver" in window)) {
    sections.forEach((section) => section.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  sections.forEach((section, index) => {
    if (index === 0) requestAnimationFrame(() => section.classList.add("is-visible"));
    else observer.observe(section);
  });
}

function openVideo(index) {
  const video = videos[index];
  if (!video || !video.url) return;
  document.querySelectorAll(".video-card.is-playing").forEach((card) => {
    card.classList.remove("is-playing");
    card.querySelector(".inline-player")?.remove();
  });
  const card = document.querySelector(`[data-player-index="${index}"]`);
  if (!card) return;
  const title = localize(video.title) || "Portfolio video";
  const player = document.createElement("div");
  player.className = "inline-player";
  player.innerHTML = `<iframe src="${escapeHtml(video.url)}" title="${escapeHtml(title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  card.appendChild(player);
  card.classList.add("is-playing");
  card.scrollIntoView({ behavior: "smooth", block: "center" });
}

document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
document.querySelector(".menu-button").addEventListener("click", (event) => {
  const expanded = event.currentTarget.getAttribute("aria-expanded") === "true";
  event.currentTarget.setAttribute("aria-expanded", String(!expanded));
  document.querySelector("#header").classList.toggle("menu-open", !expanded);
});
document.querySelectorAll(".mobile-nav a").forEach((link) => link.addEventListener("click", () => {
  document.querySelector(".menu-button").setAttribute("aria-expanded", "false");
  document.querySelector("#header").classList.remove("menu-open");
}));
document.addEventListener("scroll", () => document.querySelector("#header").classList.toggle("scrolled", window.scrollY > 24), { passive: true });
document.querySelector("#video-grid").addEventListener("click", (event) => {
  const card = event.target.closest("[data-video-index]");
  if (card) openVideo(Number(card.dataset.videoIndex));
});
document.querySelector("#video-grid").addEventListener("keydown", (event) => {
  const card = event.target.closest("[data-video-index]");
  if (card && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); openVideo(Number(card.dataset.videoIndex)); }
});
setLanguage("EN");
setupReveals();
