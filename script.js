var itemsArray = [];
var firstElementPosition = 0;
var secondElementPosition = 1;
var combinationsCounter = 0;

var onClickResetButton = function (evt) {
  evt.preventDefault();
  document.location.reload(true);
};

var addItem = function (content, id) {
  var item = document.createElement('div');
  item.id = 'item-' + id;
  item.classList.add('mb-2', 'd-flex', 'align-items-center', 'bg-light');
  item.innerHTML = '<div class="flex-grow-1 mx-1">' + content + '</div>';
  var deleteItem = document.createElement('button');
  deleteItem.id = 'deleteItem-' + id;
  deleteItem.classList.add('btn', 'btn-danger', 'btn-sm');
  deleteItem.innerHTML = 'Удалить';
  item.insertAdjacentElement('beforeend', deleteItem);
  document.querySelector('#itemsList').insertAdjacentElement('afterbegin', item);
  refreshResetButton();
  refreshRunButton();
};

var renderItemsArray = function (content, id) {
  var item = document.createElement('div');
  item.id = 'item-' + id;
  item.classList.add('mb-2', 'd-flex', 'align-items-center', 'bg-light');
  item.innerHTML = '<div class="flex-grow-1 mx-1">' + content + '</div>';
  var deleteItem = document.createElement('button');
  deleteItem.id = 'deleteItem-' + id;
  deleteItem.classList.add('btn', 'btn-danger', 'btn-sm');
  deleteItem.innerHTML = 'Удалить';
  item.insertAdjacentElement('beforeend', deleteItem);
  document.querySelector('#itemsList').insertAdjacentElement('afterbegin', item);
};

var refreshResetButton = function () {
  if (document.querySelector('#resetButton').style.display === 'none') {
    document.querySelector('#resetButton').style.display = 'inline';
  }
  document.querySelector('#itemsCount').innerHTML = '(' + itemsArray.length + ')';
};

var countCombinations = function () {
  if (itemsArray.length === 1) {
    return 0;
  } else if (itemsArray.length === 2) {
    return 1;
  } else {
    return Math.round((fact(itemsArray.length)) / (2 * fact(itemsArray.length - 2)));
  }
};

var onRunButton = function () {
  document.querySelector('#addItemButton').removeEventListener('click', onAddItemButtonClick);
  document.querySelector('#onboardingPanel').remove();
  document.querySelector('#inputPanel').remove();
  document.querySelector('#runButton').removeEventListener('click', onRunButton);
  document.querySelector('#runPanel').remove();
  document.querySelector('#itemsPanel').remove();
  renderProgressPanel();
  renderComparePanel();
  renderPairs();
  renderUndoPanel();
};

var renderProgressPanel = function () {
  var progressPanel = document.createElement('div');
  progressPanel.id = 'progressPanel';
  progressPanel.classList.add('text-center', 'mb-3');
  progressPanel.innerHTML = '<span id="currentСombination"></span><span>/</span><span id="allСombinations">' + countCombinations() + '</span>';
  document.querySelector('main').appendChild(progressPanel);
};

var renderComparePanel = function () {
  var comparePanel = document.createElement('div');
  comparePanel.id = 'comparePanel';
  comparePanel.classList.add('mb-5');
  comparePanel.innerHTML = '<div id="firstElement" class="py-3 border bg-light text-center"></div><div class="py-1 text-center">или</div><div id="secondElement" class="py-3 border bg-light text-center"></div></div>';
  document.querySelector('main').appendChild(comparePanel);
  document.querySelector('#comparePanel').addEventListener('click', onComparePanelClick);
};

var renderUndoPanel = function () {
  var undoPanel = document.createElement('div');
  undoPanel.id = 'undoPanel';
  undoPanel.classList.add('row', 'justify-content-center', 'mb-3');
  undoPanel.innerHTML = '<button id="undoButton" class="btn btn-outline-danger">Начать заново</button>';
  document.querySelector('main').appendChild(undoPanel);
  document.querySelector('#undoButton').addEventListener('click', onUndoButtonClick);
};

var renderPairs = function () {
  var firstElement = document.querySelector('#firstElement');
  var secondElement = document.querySelector('#secondElement');
  if (secondElementPosition < itemsArray.length) {
    document.querySelector('#currentСombination').innerHTML = combinationsCounter + 1;
    firstElement.innerHTML = itemsArray[firstElementPosition].name;
    secondElement.innerHTML = itemsArray[secondElementPosition].name;
    secondElementPosition = secondElementPosition + 1;
    combinationsCounter += 1;
  } else if (firstElementPosition < itemsArray.length - 2) {
    document.querySelector('#currentСombination').innerHTML = combinationsCounter + 1;
    firstElementPosition = firstElementPosition + 1;
    secondElementPosition = firstElementPosition + 1;
    firstElement.innerHTML = itemsArray[firstElementPosition].name;
    secondElement.innerHTML = itemsArray[secondElementPosition].name;
    secondElementPosition = secondElementPosition + 1;
    combinationsCounter += 1;
  } else if (firstElementPosition === itemsArray.length - 2 && secondElementPosition === itemsArray.length) {
    document.querySelector('#progressPanel').remove();
    document.querySelector('#comparePanel').removeEventListener('click', onComparePanelClick);
    document.querySelector('#comparePanel').remove();
    renderResult();
  }
};

var compareScores = function (itemOne, itemTwo) {
  return itemTwo.score - itemOne.score;
};

var renderResult = function () {
  var result = itemsArray.slice('').sort(compareScores);
  var resultPanel = document.createElement('ol');
  resultPanel.id = 'resultPanel';
  resultPanel.classList.add('mb-5');
  for (var i = 0; i < result.length; i++) {
    var resultElem = document.createElement('li');
    resultElem.innerHTML = result[i].name;
    resultPanel.appendChild(resultElem);
  }
  document.querySelector('#undoPanel').insertAdjacentElement('beforebegin', resultPanel);
};

var fact = function (x) {
  var z = x;
  for (var i = x - 1; i >= 2; i--) {
    z = z * i;
  }
  return z;
};

var refreshRunButton = function () {
  var runPanel = document.querySelector('#runButton');
  if (itemsArray.length === 0) {
    runPanel.style.display = 'none';
  } else {
    runPanel.style.display = 'block';
  }
  if (countCombinations() === 0) {
    runPanel.disabled = true;
  } else if (countCombinations() > 0) {
    runPanel.disabled = false;
  }
  document.querySelector('#combinationsCount').innerHTML = countCombinations();
};

var onAddItemButtonClick = function (evt) {
  evt.preventDefault();
  var inputField = document.querySelector('#inputField');
  if (inputField.value) {
    const inputData = String(inputField.value).split(',');
    const trimmedInputData = Array.from(inputData, elem => elem.trim());
    trimmedInputData.forEach((elem) => {
      itemsArray.push({ name: elem, score: 0 });
      addItem(elem, itemsArray.findIndex(itm => itm.name === elem));
    });
    inputField.value = null;
    inputField.focus();
  } else {
    inputField.focus();
  }
};

var onEnter = function (evt) {
  if (evt.keyCode === 13) {
    evt.preventDefault();
    var inputField = document.querySelector('#inputField');
    if (inputField.value) {
      const inputData = String(inputField.value).split(',');
      const trimmedInputData = Array.from(inputData, elem => elem.trim());
      trimmedInputData.forEach((elem) => {
        itemsArray.push({ name: elem, score: 0 });
        addItem(elem, itemsArray.findIndex(itm => itm.name === elem));
      });
      inputField.value = null;
      inputField.focus();
    } else {
      inputField.focus();
    }
  }
};

var onClickDelete = function (evt) {
  if (/deleteItem/.test(evt.target.id)) {
    evt.preventDefault();
    var itemToDelete = itemsArray.indexOf(itemsArray.find(itm => itm.name === evt.target.previousElementSibling.innerHTML));
    itemsArray.splice(itemToDelete, 1);
    document.querySelector('#itemsList').innerHTML = '';
    itemsArray.forEach((elem, idx) => {
      elem.score = 0;
      renderItemsArray(elem.name, idx);
    });
    refreshRunButton();
    refreshResetButton();
    if (itemsArray.length === 0) {
      document.location.reload(true);
    }
  }
};

var onUndoButtonClick = function (evt) {
  document.querySelector('#undoButton').removeEventListener('click', onUndoButtonClick);
  document.querySelector('#undoButton').remove();
  evt.preventDefault();
  if (document.querySelector('#progressPanel')) {
    document.querySelector('#progressPanel').remove();
    document.querySelector('#comparePanel').removeEventListener('click', onComparePanelClick);
    document.querySelector('#comparePanel').remove();
  } else if (document.querySelector('#resultPanel')) {
    document.querySelector('#resultPanel').remove();
  }
  renderOnboardingPanel();
  renderInputPanel();
  renderRunPanel();
  renderItemsPanel();
  firstElementPosition = 0;
  secondElementPosition = 1;
  combinationsCounter = 0;
  itemsArray.forEach((elem, idx) => {
    elem.score = 0;
    renderItemsArray(elem.name, idx);
  });
  refreshResetButton();
};

var onComparePanelClick = function (evt) {
  evt.preventDefault();
  if (evt.target.id === 'firstElement' || evt.target.id === 'secondElement') {
    itemsArray.find(itm => itm.name === evt.target.innerHTML).score += 1;
    renderPairs();
  }
};

var renderInputPanel = function () {
  var inputPanel = document.createElement('div');
  inputPanel.id = 'inputPanel';
  inputPanel.classList.add('mb-5');
  inputPanel.innerHTML = '<div id="inputRow" class="d-flex flex-row"><input type="text" id="inputField" class="form-control mr-1"><button id="addItemButton" class="btn btn-outline-primary">Добавить</button></div>';
  document.querySelector('main').insertAdjacentElement('beforeend', inputPanel);
  document.querySelector('#addItemButton').addEventListener('click', onAddItemButtonClick);
  document.querySelector('#inputField').addEventListener('paste', (evt) => pasteFromBuffer(evt));
  document.querySelector('#inputField').addEventListener('keydown', onEnter);
  document.querySelector('#inputField').addEventListener('focus', onInputPanelFocus);
};

var onInputPanelFocus = function () {
  document.querySelector('#firstHint').classList.add('fade');
  document.querySelector('#secondHint').classList.add('fade');
};

var renderOnboardingPanel = function () {
  var onboardingPanel = document.createElement('div');
  onboardingPanel.id = 'onboardingPanel';
  onboardingPanel.classList.add('position-relative', 'text-center', 'mb-3');
  onboardingPanel.innerHTML = '<div id="firstHint"><p class="mb-2">Составьте личный рейтинг для чего угодно: фильмов, задач, понравившихся девушек</p><p class="mb-2">Добавьте их в список, и Compupler поможет сравнить всех друг с другом</p></div><div id="secondHint" class="position-absolute fixed-bottom"><p class="mb-1"><small>Можно добавлять несколько значений одним нажатием. Просто вводите их через запятую. Или скопируйте готовый текстовый список в поле ввода</small></p></div>';
  document.querySelector('h1').insertAdjacentElement('afterend', onboardingPanel);
};

const pasteFromBuffer = (evt) => {
  evt.preventDefault();
  const newText = evt.clipboardData.getData('text').replace(/\n/g, ', ');
  document.execCommand('insertHTML', false, newText);
};

var renderItemsPanel = function () {
  var itemsPanel = document.createElement('div');
  itemsPanel.id = 'itemsPanel';
  itemsPanel.classList.add('text-right');
  itemsPanel.innerHTML = '<button id="resetButton" style="display: none;" class="btn btn-outline-danger btn-sm mb-2">Очистить всё <span id="itemsCount"></span></button><div id="itemsList" class="text-left"></div>';
  document.querySelector('main').insertAdjacentElement('beforeend', itemsPanel);
  document.querySelector('#resetButton').addEventListener('click', onClickResetButton);
  document.querySelector('#itemsList').addEventListener('click', onClickDelete);
};

var renderRunPanel = function () {
  var runPanel = document.createElement('div');
  runPanel.id = 'runPanel';
  runPanel.classList.add('row', 'justify-content-center', 'mb-5');
  runPanel.innerHTML = '<button id="runButton" class="btn btn-outline-success">Сравнить сочетания (<span id="combinationsCount"></span>)</button>';
  document.querySelector('#inputPanel').insertAdjacentElement('afterend', runPanel);
  document.querySelector('#runButton').addEventListener('click', onRunButton);
  refreshRunButton();
};

renderOnboardingPanel();
renderInputPanel();
renderRunPanel();
renderItemsPanel();
