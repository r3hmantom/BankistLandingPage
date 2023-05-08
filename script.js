'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// SELECTING ELEMENTS
// selecting entire document
// document.documentElement
// |_is not real DOM element, to apply css you need to select document element

// document.documentElement  - html tag
// document.head - head tag
// document.body - body tag

// document.querySelector('.header') -- returns first element that matches this selector

// To select multiple elements, we should use
// document.querySelectorAll('.section') -- returns nodelist that contains all elements selected by selector

// we can also call querySelector on elements, because of inheritance

// document.getElementById('section--1')
// document.getElementsByTagName('button') -- this method returns HTML collection, that's different from nodelist because HTML collection is actually so-called lie collection, that means if DOM changes then this  collection is also immediately updated automatically, the same does not happen with nodelist, if you delete element on page manually, then check html collection it will be updated, while nodelist will not be updated

// document.getElementByClassName('btn') -- returns html collection

// //CREATING AND INSERTING ELEMENTS
// insertAdjacentHTML

// const message = document.createElement('div') -- create and returns DOM element, it is not in the DOM itself, we have to add it manually
// //we can add classes to it
// message.classList.add('cookie-message');

// //adding text into element
// message.textContent = 'we use cookies for improve functionality'
// message.innerHTML = 'we use cookies for improve functionality <button class="btn btn--close-cookie">Got it!</button>  '

// //inserting it into header element
// header.prepend(message)
// prepending add message element as the first child of header

// header.append(message)
// appending add message element as the last child of header

// Remember that this message DOM element is like a person that cannot exist simultaneously at two places at same time, a DOM element is unique

// to insert at multiple place, we have to first create copies of the same element
// header.append(message.cloneNode(true) ) -- true means that all child elements will also be copied

// header.before(message) - before as a sibling
// header.before(message) - after as a sibling

// //DELETING ELEMENTS

// message.remove();

// //old method- DOM traversing
// message.parentElemenet.removeChild(message)

// Smooth Scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords.bottom);
  window.scrollTo({
    left: s1coords.x + window.scrollX,
    top: s1coords.y + window.scrollY,
    behavior: 'smooth',
  });
});
