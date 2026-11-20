'use strict';

// Dark mode

let $ = document;
const darkModeBtn = $.getElementById('dark-mode-btn');
const html = $.querySelector('html');
const darkModeBtnThamd = $.getElementById('dark-mode-btn__thamd');

// Dark mode2
const darkModeBtn2 = $.getElementById('dark-mode-btn2');
const darkModeBtnThamd2 = $.getElementById('dark-mode-btn__thamd2');
// dark mode text
const darkModeText = $.getElementById('dark-mode');
const lightModeText = $.getElementById('light-mode');

// aside
const aside = $.getElementById('aside');
// menu
const menuBtn = $.querySelector('.fa-bars');
// overlay
const overlay = $.getElementById('overlay');

darkModeBtn.addEventListener('click', function () {
  darkModeBtn.classList.toggle('justify-start');
  darkModeBtn.classList.toggle('justify-end');
  html.classList.toggle('dark');
  html.classList.toggle('light');
});

darkModeBtn2.addEventListener('click', function () {
  darkModeBtn2.classList.toggle('justify-start');
  darkModeBtn2.classList.toggle('justify-end');
  html.classList.toggle('dark');
  html.classList.toggle('light');
  // on and off btn
  darkModeText.classList.toggle('text-text-main');
  darkModeText.classList.toggle('text-text-secondary');
  lightModeText.classList.toggle('text-text-main');
  lightModeText.classList.toggle('text-text-secondary');
});

menuBtn.addEventListener('click', function () {
  menuBtn;
  menuBtn.classList.toggle('fa-bars');
  menuBtn.classList.toggle('fa-times');

  // aside
  aside.classList.toggle('-translate-x-full');

  // overlay
  overlay.classList.toggle('hidden');
});

overlay.addEventListener('click', function () {
  // menuBtn
  menuBtn.classList.toggle('fa-times');
  menuBtn.classList.toggle('fa-bars');

  // aside
  aside.classList.toggle('-translate-x-full');

  // overlay
  overlay.classList.toggle('hidden');
});
