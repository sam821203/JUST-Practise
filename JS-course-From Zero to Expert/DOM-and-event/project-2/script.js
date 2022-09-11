'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnShowModal = document.querySelectorAll('.show-modal');

// 設定一個刪除 hidden 的函式表達式
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// 設定一個添加 hidden 的函式表達式
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
// 當點擊外面 (overlay) 的部分時，一樣可以關起來
overlay.addEventListener('click', closeModal);

// keyboard event
document.addEventListener('keydown', function (e) {
  const isHidden = modal.classList.contains('hidden');
  if (e.key === 'Escape' && !isHidden) {
    closeModal();
  }
});
