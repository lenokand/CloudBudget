"use strict";

var burger = document.getElementById('burger-menu'); // const shadow = document.getElementById('shadow')
// const menu = document.getElementById('main-menu')

var toggleMenu = function toggleMenu() {
  burger.classList.toggle('open'); // menu.classList.toggle('open')
  // shadow.classList.toggle('open')
};

burger.addEventListener('click', toggleMenu); // shadow.addEventListener('click', toggleMenu)