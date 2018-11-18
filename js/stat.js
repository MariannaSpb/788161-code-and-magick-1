'use strict';
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GAP = 10;
var GIST_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMN_GAP = 50;

//рисуем облако
//вывести надпись
var renderCloud = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var cloudText = function (ctx, text, x, y, color) {
  ctx.fillStyle = color;
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.strokeText(text, x, y);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, plyers, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#fff');
  cloudText(ctx, 'Ура, вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP * 2.5, '#000');
  cloudText(ctx, 'Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP * 5, '#000');
  var maxTime = getMaxElement(times);
  var columnX = 0;
  var columnY = 0;
  var columnHeight = 0;
  var columnColor = '';
  var textY = 0;
  for (var i = 0; i < times.length; i++) {
    columnX = CLOUD_X + GAP * 3 + COLUMN_GAP * i + COLUMN_WIDTH * i;
    columnY = CLOUD_Y + CLOUD_HEIGHT - GAP * 3;
    columnHeight = Math.round(GIST_HEIGHT * times[i] / maxTime);
    var randomBlue = Math.floor(Math.random() * 255);
    columnColor = (plyers[i] === 'Вы') ? 'rgba(255, 0, 0 , 1)' : 'rgba(0, 0, ' + randomBlue + ', 1)';
    renderCloud(ctx, columnX, columnY, COLUMN_WIDTH, -columnHeight, columnColor);
    textY = columnY - columnHeight - GAP * 2;
    cloudText(ctx, Math.round(times[i]), columnX, textY, '#000');
    cloudText(ctx, plyers[i], columnX, columnY + GAP, '#000');
  }
};
