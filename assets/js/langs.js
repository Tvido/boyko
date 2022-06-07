/*==================== TOGGLE LANGUAGE ====================*/

const langs = document.querySelector('.langs'),
  link = document.querySelectorAll('a'),
  name = document.querySelector('.home__title'),
  description = document.querySelector('.home__description');

link.forEach(el => {
  el.addEventListener('click', () => {
    langs.querySelector('.active').classList.remove('active');
    el.classList.add('active');

    let attr = el.getAttribute('language');

    name.textContent = data[attr].name;
    description.textContent = data[attr].description;
  });
});

const data = {
  us: {
    name: 'Myroslava',
    description:
      'Since February 20, 2014, Ukraine has been defending itself against the armed invasion of the Russian Federation, which includes the annexation of Crimea and the occupation of Donetsk and Luhansk regions. The new stage of the Russian-Ukrainian war began on February 24, 2022 with a large-scale Russian invasion of Ukraine.',
  },
  ua: {
    name: 'Мирослава',
    description:
      'З 20 лютого 2014 року Україна захищається від збройного вторгнення Російської Федерації, складовими якого є анексія Криму та окупація частини Донецької та Луганської областей. Новий етап російсько-української війни розпочався 24 лютого 2022 року з широкомасштабним російським вторгненням в Україну.',
  },
};

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
/*==================== work ====================*/

// const langs = document.querySelector('.langs'),
//   link = document.querySelectorAll('a');

// link.forEach(el => {
//   el.addEventListener('click', () => {
//     langs.querySelector('.active').classList.remove('active');
//     el.classList.add('active');
//     let attr = el.getAttribute('language');
//     console.log('attr', attr);

//     location.href = window.location.pathname + '#' + attr;
//     // location.reload();
//   });
// });
