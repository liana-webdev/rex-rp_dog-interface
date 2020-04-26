// Поиск элементов по id
let health = document.getElementById('health'); // индикатор здоровья

let hunger = document.getElementById('hunger'); // индикатор голода

let name_text = document.getElementById('name'); // Имя

// Контроль градиента индикаторов
let healthControl = document.getElementById('healthControl').children;
let hungerControl = document.getElementById('hungerControl').children;

// Индикаторы "хочет играть"
let ball = document.getElementById('ball');
let game = document.getElementById('game');

let h_input = document.querySelector('.h-input'); // значение здоровья
let g_input = document.querySelector('.g-input'); // значение голода
let n_input = document.getElementById('name-input'); // Значение имени

let play_check = document.querySelector('.play-check');

// Дефолтные значения индикаторов
let hp = h_input.value;
console.log(hp);
let golod = g_input.value;
console.log(golod);
let play = false;
let name = n_input.value;
console.log(name);
// Контроль индикаторов
h_input.onchange = function () {
  hp = h_input.value;
  let pct = hp / 100;
  healthControl[1].offset.baseVal = healthControl[2].offset.baseVal = pct;
  console.log(hp);
};

g_input.onchange = function () {
  golod = g_input.value;
  let ppt = golod / 100;
  hungerControl[1].offset.baseVal = hungerControl[2].offset.baseVal = ppt;
  console.log(golod);
};

play_check.onchange = function () {
  if (play_check.checked == true) {
    console.log(play_check.checked);
    play = true;
    console.log('Хочет играть');
    game.classList.remove('visibility');
  } else {
    play = false;
    console.log('Не хочет играть');
    game.classList.add('visibility');
  }
};

n_input.onchange = function () {
  name = n_input.value;
  name_text.textContent = name;
};
