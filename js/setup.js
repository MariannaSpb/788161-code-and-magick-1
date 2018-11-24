'use strict';
var setupWindow = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list'); // список волшебников

setupWindow.classList.remove('hidden');

// создаю 4 массива данных о персонажах
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

// функция случайного сочетания имя + фамилия
var renderName = function () {
  var randomNames = Math.floor(Math.random() * NAMES.length); // случайное имя
  var randomSurnames = Math.floor(Math.random() * SURNAMES.length); // случайная фамилия
  var fullName = NAMES[randomNames] + ' ' + SURNAMES[randomSurnames]; //  имя + фамилия
  return fullName;
};

// функция случайного цвета мантии
var renderCoat = function () {
  var randomCoatColor = Math.floor(Math.random() * COAT_COLOR.length);
  return COAT_COLOR[randomCoatColor];
};
var renderEyes = function () {
  var randomEyesColors = Math.floor(Math.random() * EYES_COLORS.length);
  return EYES_COLORS[randomEyesColors];
};

// нахожу шаблон на странице с помощью querySelector и находим div который описывает волшебника:
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// шаблон 1 волшебника
var renderWizard = function () {
  var wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = renderName();
  wizardElement.querySelector('.wizard-coat').style.fill = renderCoat();
  wizardElement.querySelector('.wizard-eyes').style.fill = renderEyes();
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard());// поместили во фрагмент ф-ю создания шаблона волшебника
}

similarListElement.appendChild(fragment);// заполняем блок списка DOM-элементами
document.querySelector('.setup-similar').classList.remove('hidden');
