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
  link = document.querySelectorAll('a'),
  home = document.querySelector('.home'),
  genres = document.querySelector('.genres');

link.forEach(el => {
  el.addEventListener('click', () => {
    langs.querySelector('.active').classList.remove('active');
    el.classList.add('active');

    let attr = el.getAttribute('language');

    home.textContent = data[attr].home;
    genres.textContent = data[attr].genres;
  });
});

const data = {
  us: {
    home: 'Home',
    genres: 'Genres',
  },
  ua: {
    home: 'Домашня',
    genres: 'Жанри',
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
