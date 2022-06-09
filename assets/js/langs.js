/*==================== TOGGLE LANGUAGE ====================*/

const langs = document.querySelector('.langs'),
  link = document.querySelectorAll('a');

// nav
home = document.querySelector('.home');
genres = document.querySelector('.genres');
approaches = document.querySelector('.approaches');
galleries = document.querySelector('.galleries');
testimonials = document.querySelector('.testimonials');
contactme = document.querySelector('.contactme');

// hero
home__title = document.querySelector('.home__title');
home__subtitle = document.querySelector('.home__subtitle');
home__description = document.querySelector('.home__description');

experience = document.querySelector('.experience');
projects = document.querySelector('.projects');
compilations = document.querySelector('.compilations');

// genres
genres__title = document.querySelector('.genres__title');
genres__subtitle1 = document.querySelector('.genres__subtitle1');
genres__text1 = document.querySelector('.genres__text1');
genres__subtitle2 = document.querySelector('.genres__subtitle2');
genres__text2 = document.querySelector('.genres__text2');
genres__subtitle3 = document.querySelector('.genres__subtitle3');
genres__text3 = document.querySelector('.genres__text3');
genres__subtitle4 = document.querySelector('.genres__subtitle4');
genres__text4 = document.querySelector('.genres__text4');

// approaches
qualification_title = document.querySelector('.qualification_title');
// tabs
tab1 = document.querySelector('.tab1');
tab2 = document.querySelector('.tab2');

qualification__subtitle1 = document.querySelector('.qualification__subtitle1');
qualification1 = document.querySelector('.qualification1');

qualification__subtitle2 = document.querySelector('.qualification__subtitle2');
qualification2 = document.querySelector('.qualification2');

qualification__subtitle3 = document.querySelector('.qualification__subtitle3');
qualification3 = document.querySelector('.qualification3');

qualification__subtitle4 = document.querySelector('.qualification__subtitle4');
qualification4 = document.querySelector('.qualification4');

// footer
footer__title = document.querySelector('.footer__title');
home__subtitle = document.querySelector('.footer__subtitle');

link.forEach(el => {
  el.addEventListener('click', () => {
    langs.querySelector('.active').classList.remove('active');
    el.classList.add('active');

    let attr = el.getAttribute('language');

    // nav
    home.textContent = data[attr].home;
    genres.textContent = data[attr].genres;
    approaches.textContent = data[attr].approaches;
    galleries.textContent = data[attr].galleries;
    testimonials.textContent = data[attr].testimonials;
    contactme.textContent = data[attr].contactme;

    // hero
    home__title.textContent = data[attr].home__title;
    home__subtitle.textContent = data[attr].home__subtitle;
    home__description.textContent = data[attr].home__description;

    experience.textContent = data[attr].experience;
    projects.textContent = data[attr].projects;
    compilations.textContent = data[attr].compilations;

    // genres
    genres__title.textContent = data[attr].genres__title;
    genres__subtitle1.textContent = data[attr].genres__subtitle1;
    genres__text1.textContent = data[attr].genres__text1;
    genres__subtitle2.textContent = data[attr].genres__subtitle2;
    genres__text2.textContent = data[attr].genres__text2;
    genres__subtitle3.textContent = data[attr].genres__subtitle3;
    genres__text3.textContent = data[attr].genres__text3;
    genres__subtitle4.textContent = data[attr].genres__subtitle4;
    genres__text4.textContent = data[attr].genres__text4;

    // approaches
    qualification_title.textContent = data[attr].qualification_title;
    // tabs
    tab1.textContent = data[attr].tab1;
    tab2.textContent = data[attr].tab2;

    qualification__subtitle1.textContent = data[attr].qualification__subtitle1;
    qualification1.textContent = data[attr].qualification1;

    qualification__subtitle2.textContent = data[attr].qualification__subtitle2;
    qualification2.textContent = data[attr].qualification2;

    qualification__subtitle3.textContent = data[attr].qualification__subtitle3;
    qualification3.textContent = data[attr].qualification3;

    qualification__subtitle4.textContent = data[attr].qualification__subtitle4;
    qualification4.textContent = data[attr].qualification4;

    // footer
    footer__title.textContent = data[attr].footer__title;
    footer__subtitle.textContent = data[attr].footer__subtitle;
  });
});

const data = {
  us: {
    // nav
    home: 'Home',
    genres: 'Genres',
    approaches: 'Approaches',
    galleries: 'Galleries',
    testimonials: 'Testimonials',
    contactme: 'Contact Me',

    // hero
    home__title: 'Myroslava',
    home__subtitle: 'Photographer',
    home__description:
      'Photography captures eternity, is proof that everything is only a brief moment in the eyes of eternity. In my photos, I want to convey the authenticity of this moment, the feeling of this moment, because this time is already history!',
    experience: 'Years experience',
    projects: 'Completed projects',
    compilations: 'Compilations done',

    // genres
    genres__title: 'Genres',
    genres__subtitle1: 'Portrait',
    genres__subtitle2: 'Street',
    genres__subtitle3: 'Subject session',
    genres__subtitle4: "Author's project",
    genres__text1:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Alias numquam atque vitae doloribus quos nam tempore quod culpa! A, sint!',
    genres__text2:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Alias numquam atque vitae doloribus quos nam tempore quod culpa! A, sint!',
    genres__text3:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Alias numquam atque vitae doloribus quos nam tempore quod culpa! A, sint!',
    genres__text4:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Alias numquam atque vitae doloribus quos nam tempore quod culpa! A, sint!',

    // approaches
    qualification_title: 'Approaches',

    // tabs
    tab1: 'tab1',
    tab2: 'tab2',

    qualification__subtitle1: 'Lorem ipsum dolor sit amet consectetur',
    qualification1: 'Approaches',

    qualification__subtitle2: 'Lorem ipsum dolor sit amet consectetur',
    qualification2: 'Approaches',

    qualification__subtitle3: 'Lorem ipsum dolor sit amet consectetur',
    qualification3: 'Approaches',

    qualification__subtitle4: 'Lorem ipsum dolor sit amet consectetur',
    qualification4: 'Approaches',

    // footer
    footer__title: 'Myroslava',
    footer__subtitle: 'Photographer',
  },

  ua: {
    // nav
    home: 'Домашня',
    genres: 'Жанри',
    approaches: 'Підходи',
    galleries: 'Галереї',
    testimonials: 'Відгуки',
    contactme: 'Контакти',

    // hero
    home__title: 'Мирослава',
    home__subtitle: 'Фотограф',
    home__description:
      'Фотографія фіксує вічність, є доказом того, що все лиш коротка мить в очах вічності. В своїх фотографіях , хочу донести справжність цієї миті,відчуття цього моменту, адже цей час вже є історією!',
    experience: 'Років досвіду',
    projects: 'Завершених проектів',
    compilations: 'Спільних проектів',

    // genres
    genres__title: 'Жанри',
    genres__subtitle1: 'Портрет',
    genres__subtitle2: 'Стріт фотографія',
    genres__subtitle3: 'Предметна',
    genres__subtitle4: 'Авторський проект',
    genres__text1:
      'Це розповідь яка відображає зовнішній облік, а через нього і внутрішній світ конкретного и персонажа, в пластичних формах лініях і фарбах живого лиця.',
    genres__text2:
      'Це поєднання особливих моментів у просторі навколишнього середовища, фотографія тяжіє до однієї емоції - спіймати вирішальну мить.',
    genres__text3:
      'Предметна фотографія потребує вищої майстерності так як вона включає всі жанри і потребує унікального підходу, креативного мишлення та неординарних рішень.',
    genres__text4:
      'Це ідея авторської фотографії полягає у зборі та аналізі інформації, створення своєї думки, сигментування думки, підходу і атребутів, вибір основного для розповіді, піготовка проекту до випуску, життя роботи після завершення проекту.',

    // approaches
    qualification_title: 'Підходи до роботи',

    // tabs
    tab1: 'Таба 1',
    tab2: 'Таба 2',

    qualification__subtitle1: 'Підхід побудови відносин',
    qualification1:
      'Мотивація моделі та її особиста розповідь. Емоції викликані автором побачити потенціал моделі щоб проявити потенціал.',

    qualification__subtitle2: 'Підхід неочікуваності',
    qualification2:
      'Відтворення неповторних моментів у реальному життя. Нестандартне бачення об’єктів навколишнього світу.',

    qualification__subtitle3: 'Креативний підхід',
    qualification3:
      'Цікава, різностороння подача та відображення об’єкта зйомки. Викликати цікавость суспільства.',

    qualification__subtitle4: 'Авторський підхід',
    qualification4:
      'Підкреслення неповторності емоцій і краси, підхід до зйомки як до мистецтва. Вкладання в знімок всіх свої думок та душі.',

    // footer
    footer__title: 'Мирослава',
    footer__subtitle: 'Фотограф',
  },
};
