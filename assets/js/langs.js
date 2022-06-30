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

// galleries
galleries__title = document.querySelector('.galleries__title');

// testik
testimonial__title = document.querySelector('.testimonial__title');

// contact
contacts__title = document.querySelector('.contacts__title');
callme = document.querySelector('.callme');
mailme = document.querySelector('.mailme');

label__name = document.querySelector('.label__name');
label__message = document.querySelector('.label__message');
label__button = document.querySelector('.label__button');

// footer
footer__title = document.querySelector('.footer__title');
footer__subtitle = document.querySelector('.footer__subtitle');

footer__approaches = document.querySelector('.footer__approaches');
footer__galleries = document.querySelector('.footer__galleries');
footer__testimonials = document.querySelector('.footer__testimonials');

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

    // galleries
    galleries__title.textContent = data[attr].galleries__title;

    // testimonials
    testimonial__title.textContent = data[attr].testimonial__title;

    // contacts
    contacts__title.textContent = data[attr].contacts__title;
    callme.textContent = data[attr].callme;
    mailme.textContent = data[attr].mailme;

    label__name.textContent = data[attr].label__name;
    label__message.textContent = data[attr].label__message;
    label__button.textContent = data[attr].label__button;

    // footer
    footer__title.textContent = data[attr].footer__title;
    footer__subtitle.textContent = data[attr].footer__subtitle;

    footer__approaches.textContent = data[attr].footer__approaches;
    footer__galleries.textContent = data[attr].footer__galleries;
    footer__testimonials.textContent = data[attr].footer__testimonials;
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
      'Photography captures eternity, this is proof that everything is only a brief moment in the eyes of eternity. In my photos I want to show the authenticity of this moment, the feeling of this moment, because this time is already history!',
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
      'Portrait is a story that represents the external accounting, and through it the inner world of a particular character, in the plastic forms of lines and colors of a living face',
    genres__text2:
      'Street photography is a combination of special moments in the space of the environment, photography tends to one emotion - to capture the decisive moment',
    genres__text3:
      'Subject - subject photography requires higher skill as it includes all genres and requires a unique approach, creative thinking and extraordinary solutions',
    genres__text4:
      "Author's project - the idea of author's photography is to collect and analyze information, create your own opinion, segment your thoughts, approach and attributes, choose the main story, prepare the project for release and work life after the project",

    // approaches
    qualification_title: 'Approaches',

    // tabs
    tab1: 'tab 1',
    tab2: 'tab 2',

    qualification__subtitle1: 'The approach to building relationships',
    qualification1:
      'Motivation of the model and her personal story. Emotions are caused by the author to see the potential of the model to show the potential.',

    qualification__subtitle2: 'The approach of the unexpectedness',
    qualification2:
      'Reproduction of unique moments in real life. Non-standard vision of the objects of the surrounding world.',

    qualification__subtitle3: 'Creative approach',
    qualification3:
      'Interesting, versatile presentation and display of the subject. To arouse public interest.',

    qualification__subtitle4: "Author's approach",
    qualification4:
      'Emphasizing the uniqueness of emotions and beauty, the approach to photography as an art. Investing in a picture of all your thoughts and souls.',

    // galleries
    galleries__title: 'GALLERIES',

    // testimonials
    testimonial__title: 'TESTIMONIALS',

    // contacts
    contacts__title: 'CONTACTS',
    callme: 'Call me',
    mailme: 'Mail me',

    label__name: 'John',
    label__message: 'Message',
    label__button: 'SEND',

    // footer
    footer__title: 'Myroslava',
    footer__subtitle: 'Photographer',

    footer__approaches: 'Approaches',
    footer__galleries: 'Galleries',
    footer__testimonials: 'Testimonials',
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
    tab1: 'таба 1',
    tab2: 'таба 2',

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

    // galleries
    galleries__title: 'ГАЛЕРЕЇ',

    // testimonials
    testimonial__title: 'ВІДГУКИ',

    // contacts
    contacts__title: 'КОНТАКТИ',
    callme: 'Подзвони мені',
    mailme: 'Напиши мені',

    label__name: 'Світлана',
    label__message: 'Повідомлення',
    label__button: 'НАДІСЛАТИ',

    // footer
    footer__title: 'Мирослава',
    footer__subtitle: 'Фотограф',

    footer__approaches: 'Підходи до роботи',
    footer__galleries: 'Галереї',
    footer__testimonials: 'Відгуки',
  },
};
