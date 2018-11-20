'use strict';
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GAP = 10;
var GIST_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMN_GAP = 50;
var CLOUD_BOTTOM = 250;
var TEXT_HEIGHT = 16;


//отрисовка облака
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};



var getMaxElement = function (array) { //нужна проверка на случай если будет передан пустой массив (рекомендация в демке)
  if (array.length === 0) {
    return 0;
  }
  var maxElement = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = "16px PT Mono";
  ctx.textBaseline = 'hanging';
  ctx.fillText("Ура, вы победили!", CLOUD_X + GAP * 4, CLOUD_Y + GAP * 2.5);
  ctx.fillText("Список результатов:", CLOUD_X + GAP * 4, CLOUD_Y + GAP * 3.5 + TEXT_HEIGHT);
  var maxTime = getMaxElement(times);
  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы'){
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsla(235, 100%, ' + Math.random() * 100 + '%' + ', 50%)';
    }
   var columnHeight = GIST_HEIGHT * Math.round(times[i]) / maxTime;
  ctx.fillRect(CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_HEIGHT - GAP - TEXT_HEIGHT - columnHeight, COLUMN_WIDTH, columnHeight); // вместо отдельных  переменных х и у
  ctx.fillStyle = '#000';
  ctx.fillText(Math.round(times[i]), CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_HEIGHT - GAP - TEXT_HEIGHT - columnHeight - TEXT_HEIGHT);
  ctx.fillText(names[i], CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, CLOUD_BOTTOM + GAP);
  }
};

