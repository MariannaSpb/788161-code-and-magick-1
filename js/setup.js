'use strict';
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var setupWindow = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list'); // список волшебников
var NUMBER_OF_WIZARDS = 4;
setupWindow.classList.remove('hidden');


// функция случайного сочетания имя + фамилия
var generateName = function () {
  var randomNames = getRandom(NAMES.length); // случайное имя
  var randomSurnames = getRandom(SURNAMES.length); // случайная фамилия
  var fullName = NAMES[randomNames] + ' ' + SURNAMES[randomSurnames]; //  имя + фамилия
  return fullName;
};


// Нахождение случайного элемента массива
var getRandom = function (array) {
  return Math.floor(Math.random() * array);
};

var generateCoat = function () {
  var randomCoatColor = getRandom(COAT_COLOR.length);

  return COAT_COLOR[randomCoatColor];
};

var generateEyes = function () {
  var randomEyesColors = getRandom(EYES_COLORS.length);

  return EYES_COLORS[randomEyesColors];
};

// нахожу шаблон на странице с помощью querySelector и находим div который описывает волшебника:
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// шаблон 1 волшебника
var renderWizard = function () {
  var wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = generateName();
  wizardElement.querySelector('.wizard-coat').style.fill = generateCoat();
  wizardElement.querySelector('.wizard-eyes').style.fill = generateEyes();
  return wizardElement;
};


var createWizardFragment = function () {

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < NUMBER_OF_WIZARDS; i++) {
    fragment.appendChild(renderWizard());// поместили во фрагмент ф-ю создания шаблона волшебника
  }
  return fragment;
};


similarListElement.appendChild(createWizardFragment());
document.querySelector('.setup-similar').classList.remove('hidden');
