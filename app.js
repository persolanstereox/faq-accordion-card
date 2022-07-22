'use strict';
const test = document.getElementById('arrow--1');
const allArrows = document.querySelectorAll('.arrow');

for (let i = 0; i < allArrows.length; i++) {
  allArrows[i].addEventListener('click', function () {
    document.getElementById(`modal--${i + 1}`).classList.toggle('hidden');
    document.getElementById(`question--${i + 1}`).classList.toggle('font--700');
    document
      .getElementById(`arrow--${i + 1}`)
      .classList.toggle('arrow--rotation');
  });
}
