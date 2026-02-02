const translations = {
  en: {
    name: "Dmitry Pletnev",
    role: "Fullstack Developer",

    hero_text:
      "Based in Russia. Fullstack developer with hands-on experience in building and deploying web applications. Focused on clean code, maintainable architecture and practical problem solving.",

    about_title: "About me",
    about_text:
      "Fullstack developer experienced in working across frontend and backend, understanding how client and server interact, and building maintainable, production-ready solutions.",

    projects_title: "Projects",

    project_task_title_1: "Web social network",
    project_task_title: "Task Manager",
    project_task_desc_1:
      "Designed and developed a social networking web application featuring user authentication, private messaging system, conversation management, RESTful API backend and responsive UI built with modern frontend technologies.",
    project_task_desc:
      "Designed and implemented a task management web application with kanban workflow, REST API backend and relational database.",
    project_task_tech_1: "Tech:",
    project_task_tech: "Tech:",

    contact: "Contacts",
  },

  ru: {
    name: "Дмитрий Плетнёв",
    role: "Fullstack разработчик",

    hero_text:
      "Fullstack разработчик, занимаюсь созданием веб-приложений с упором на практическое применение, чистую архитектуру и понятный поддерживаемый код.",

    about_title: "Обо мне",
    about_text:
      "Занимаюсь разработкой fullstack-приложений: от интерфейса до серверной логики и базы данных. Понимаю взаимодействие клиента и сервера, уделяю внимание структуре и качеству кода.",

    projects_title: "Проекты",

    project_task_title: "Менеджер задач",
    project_task_title_1: "Соц-сеть",
    project_task_desc_1:
      "Fullstack веб-приложение социальной сети с индентификацией, аутентификацией, авторизацией, системой диалогов и REST API бэкендом.",
    project_task_desc:
      "Веб-приложение для управления задачами с kanban-доской и drag-and-drop, разработанное для практики fullstack-разработки.",
    project_task_tech_1: "Стек:",
    project_task_tech: "Стек:",


    contact: "Контакты",
  }
};

const buttons = document.querySelectorAll(".lang-btn");
const elements = document.querySelectorAll("[data-i18n]");

function setLanguage(lang) {
  elements.forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem("lang", lang);

  buttons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

const savedLang = localStorage.getItem("lang") || "en";
setLanguage(savedLang);

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
  });
});