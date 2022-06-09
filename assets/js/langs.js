/*==================== work ====================*/
// get items:
// const langs = document.querySelector('.langs'),
//   link = document.querySelectorAll('a');

// link.forEach(el => {
//   el.addEventListener('click', () => {
//     let attr = el.getAttribute('language');
//     console.log('attr', attr);
//   });
// });

/*==================== TOGGLE LANGUAGE ====================*/

const langs = document.querySelector('.langs'),
  link = document.querySelectorAll('a');
home = document.querySelector('.home');
genres = document.querySelector('.genres');
methods = document.querySelector('.methods');
galleries = document.querySelector('.galleries');
testimonials = document.querySelector('.testimonials');
contactme = document.querySelector('.contactme');
home__title = document.querySelector('.home__title');
home__subtitle = document.querySelector('.home__subtitle');
home__description = document.querySelector('.home__description');
experience = document.querySelector('.experience');
projects = document.querySelector('.projects');
compilations = document.querySelector('.compilations');

link.forEach(el => {
  el.addEventListener('click', () => {
    // if (langs.querySelector !== 'active') {
    langs.querySelector('.active').classList.remove('active');
    el.classList.add('active');
    // }

    let attr = el.getAttribute('language');

    home.textContent = data[attr].home;
    genres.textContent = data[attr].genres;
    methods.textContent = data[attr].methods;
    galleries.textContent = data[attr].galleries;
    testimonials.textContent = data[attr].testimonials;
    contactme.textContent = data[attr].contactme;
    home__title.textContent = data[attr].home__title;
    home__subtitle.textContent = data[attr].home__subtitle;
    home__description.textContent = data[attr].home__description;
    experience.textContent = data[attr].experience;
    projects.textContent = data[attr].projects;
    compilations.textContent = data[attr].compilations;
  });
});

const data = {
  us: {
    home: 'Home',
    genres: 'Genres',
    methods: 'Methods',
    galleries: 'Galleries',
    testimonials: 'Testimonials',
    contactme: 'Contact Me',
    home__title: 'Myroslava',
    home__subtitle: 'Photographer',
    home__description:
      'Photography captures eternity, is proof that everything is only a brief moment in the eyes of eternity. In my photos, I want to convey the authenticity of this moment, the feeling of this moment, because this time is already history!',
    experience: 'Years experience',
    projects: 'Completed projects',
    compilations: 'Compilations done',
  },
  ua: {
    home: 'Домашня',
    genres: 'Жанри',
    methods: 'Методи',
    galleries: 'Галереї',
    testimonials: 'Відгуки',
    contactme: 'Контакти',
    home__title: 'Мирослава',
    home__subtitle: 'Фотограф',
    home__description:
      'Фотографія фіксує вічність, є доказом того, що все лиш коротка мить в очах вічності. В своїх фотографіях , хочу донести справжність цієї миті,відчуття цього моменту, адже цей час вже є історією!',
    experience: 'Років досвіду',
    projects: 'Завершених проектів',
    compilations: 'Спільних проектів',
  },
};

/*==================== work ====================*/

// const langs = document.querySelector('.langs'),
//   link = document.querySelectorAll('a');

// link.forEach(el => {
//   el.addEventListener('click', () => {
//     if ('active') {
//       langs.querySelector('.active').classList.remove('active');
//       el.classList.add('active');
//       let lang = el.getAttribute('language');

//       const path = window.location.pathname;

//       // location.href = window.location.pathname + '#' + attr;
//       location.href = `${path}#${lang}`;

//       location.reload();
//     }
//   });
// });

// function changeLanguage() {
//   let hash = window.location.hash;
//   hash = hash.substring(1);
//   console.log('hash', hash);
// }

// changeLanguage();
