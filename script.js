var itemsArray = [];
var firstElementPosition = 0;
var secondElementPosition = 1;
var combinationsCounter = 0;

var onClickResetButton = (evt) => {
  evt.preventDefault();
  document.location.reload(true);
};

const addItem = (content, id) => {
  const itemTemplate = `
    <div id="item-${id}" class="mb-2 d-flex align-items-center bg-light">
      <div class="flex-grow-1 mx-1">${content}</div>
      <button id="deleteItem-${id}" class="btn btn-danger btn-sm">Удалить</button>
    </div>
  `;
  document.querySelector('#itemsList').insertAdjacentHTML('afterbegin', itemTemplate);
  refreshResetButton();
  refreshRunButton();
};

var refreshResetButton = () => {
  if (document.querySelector('#resetButton').style.display === 'none') {
    document.querySelector('#resetButton').style.display = 'inline';
  }
  document.querySelector('#itemsCount').innerHTML = '(' + itemsArray.length + ')';
};

var countCombinations = () => {
  if (itemsArray.length === 1) {
    return 0;
  } else if (itemsArray.length === 2) {
    return 1;
  } else {
    return Math.round((fact(itemsArray.length)) / (2 * fact(itemsArray.length - 2)));
  }
};

var onRunButton = () => {
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

var renderProgressPanel = () => {
  const progressPanelTemplate = `
    <div id="progressPanel" class="text-center mb-3">
      <span id="currentСombination"></span>
      <span>/</span>
      <span id="allСombinations">${countCombinations()}</span>
    </div>
  `;
  document.querySelector('main').insertAdjacentHTML('beforeend', progressPanelTemplate);
};

const renderComparePanel = () => {
  const comparePanelTemplate = `
    <div id="comparePanel" class="mb-5">
      <div id="firstElement" class="py-3 border bg-light text-center" tabindex=0></div>
      <div class="py-1 text-center">или</div>
      <div id="secondElement" class="py-3 border bg-light text-center" tabindex=0></div>
    </div>
  `;
  document.querySelector('main').insertAdjacentHTML('beforeend', comparePanelTemplate);
  document.querySelector('#comparePanel').addEventListener('click', onComparePanelClick);
  document.querySelector('#comparePanel').addEventListener('keydown', onComparePanelEnter);
};

const renderUndoPanel = () => {
  const undoPanelTemplate = `
    <div id="undoPanel" class="row justify-content-center mb-3">
      <button id="undoButton" class="btn btn-outline-danger">Начать заново</button>
    </div>
  `;
  document.querySelector('main').insertAdjacentHTML('beforeend', undoPanelTemplate);
  document.querySelector('#undoButton').addEventListener('click', onUndoButtonClick);
};

var renderPairs = () => {
  let firstElement = document.querySelector('#firstElement');
  let secondElement = document.querySelector('#secondElement');
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
    document.querySelector('#comparePanel').removeEventListener('keydown', onComparePanelEnter);
    document.querySelector('#comparePanel').remove();
    renderResult();
  }
};

var compareScores = (itemOne, itemTwo) => {
  return itemTwo.score - itemOne.score;
};

const renderResult = () => {
  const result = itemsArray.slice('').sort(compareScores);
  const renderResultTemplate = `
  <ol id="resultPanel" class="mb-5">${result.reduce((acc, item) => {
    acc += `<li>${item.name}</li>`;
    return acc;
  }, '')}</ol>`;
  document.querySelector('#undoPanel').insertAdjacentHTML('beforebegin', renderResultTemplate);
};

var fact = (x) => {
  let z = x;
  for (let i = x - 1; i >= 2; i--) {
    z = z * i;
  }
  return z;
};

var refreshRunButton = () => {
  let runPanel = document.querySelector('#runButton');
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

var onAddItemButtonClick = (evt) => {
  evt.preventDefault();
  let inputField = document.querySelector('#inputField');
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

var onEnter = (evt) => {
  if (evt.keyCode === 13) {
    evt.preventDefault();
    let inputField = document.querySelector('#inputField');
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

var onClickDelete = (evt) => {
  if (/deleteItem/.test(evt.target.id)) {
    evt.preventDefault();
    let itemToDelete = itemsArray.indexOf(itemsArray.find(itm => itm.name === evt.target.previousElementSibling.innerHTML));
    itemsArray.splice(itemToDelete, 1);
    document.querySelector('#itemsList').innerHTML = '';
    itemsArray.forEach((elem, idx) => {
      elem.score = 0;
      addItem(elem.name, idx);
    });
    refreshRunButton();
    refreshResetButton();
    if (itemsArray.length === 0) {
      document.location.reload(true);
    }
  }
};

var onUndoButtonClick = (evt) => {
  document.querySelector('#undoButton').removeEventListener('click', onUndoButtonClick);
  document.querySelector('#undoButton').remove();
  evt.preventDefault();
  if (document.querySelector('#progressPanel')) {
    document.querySelector('#progressPanel').remove();
    document.querySelector('#comparePanel').removeEventListener('click', onComparePanelClick);
    document.querySelector('#comparePanel').removeEventListener('keydown', onComparePanelEnter);
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
    addItem(elem.name, idx);
  });
  refreshResetButton();
};

var onComparePanelClick = (evt) => {
  evt.preventDefault();
  if (evt.target.id === 'firstElement' || evt.target.id === 'secondElement') {
    itemsArray.find(itm => itm.name === evt.target.innerHTML).score += 1;
    renderPairs();
  }
};

var onComparePanelEnter = (evt) => {
  if (evt.keyCode === 13) {
    evt.preventDefault();
    if (evt.target.id === 'firstElement' || evt.target.id === 'secondElement') {
      itemsArray.find(itm => itm.name === evt.target.innerHTML).score += 1;
      renderPairs();
    }
  }
};

const renderInputPanel = () => {
  const inputPanel = `
  <div id="inputPanel" class="mb-5">
    <div id="inputRow" class="d-flex flex-row">
      <input type="text" id="inputField" class="form-control mr-1">
      <button id="addItemButton" class="btn btn-outline-primary">Добавить</button>
    </div>
  </div>
  `;
  document.querySelector('main').insertAdjacentHTML('beforeend', inputPanel);
  document.querySelector('#addItemButton').addEventListener('click', onAddItemButtonClick);
  document.querySelector('#inputField').addEventListener('paste', (evt) => pasteFromBuffer(evt));
  document.querySelector('#inputField').addEventListener('keydown', onEnter);
  document.querySelector('#inputField').addEventListener('focus', onInputPanelFocus);
};

var onInputPanelFocus = () => {
  document.querySelector('#firstHint').classList.add('fade');
  document.querySelector('#secondHint').classList.add('fade');
};

const renderOnboardingPanel = () => {
  const onboardingPanel = `
    <div id="onboardingPanel" class="position-relative text-center mb-3">
      <div id="firstHint">
        <p class="mb-2">Составьте личный рейтинг для чего угодно: фильмов, задач, понравившихся девушек</p>
        <p class="mb-2">Добавьте их в список, и Compupler поможет сравнить всех друг с другом</p>
      </div>
      <div id="secondHint" class="position-absolute fixed-bottom">
        <p class="mb-1">
          <small>Можно добавлять несколько значений одним нажатием. Просто вводите их через запятую. Или скопируйте готовый текстовый список в поле ввода</small>
        </p>
      </div>
    </div>
  `;
  document.querySelector('h1').insertAdjacentHTML('afterend', onboardingPanel);
};

const pasteFromBuffer = (evt) => {
  evt.preventDefault();
  const newText = evt.clipboardData.getData('text').replace(/\n/g, ', ');
  document.execCommand('insertHTML', false, newText);
};

const renderItemsPanel = () => {
  const itemsPanel = `
    <div id="itemsPanel" class="text-right">
      <button id="resetButton" style="display: none;" class="btn btn-outline-danger btn-sm mb-2">Очистить всё <span id="itemsCount"></span></button>
      <div id="itemsList" class="text-left"></div>
    </div>
  `;
  document.querySelector('main').insertAdjacentHTML('beforeend', itemsPanel);
  document.querySelector('#resetButton').addEventListener('click', onClickResetButton);
  document.querySelector('#itemsList').addEventListener('click', onClickDelete);
};

var renderRunPanel = () => {
  const runPanel = `
    <div id="runPanel" class="row justify-content-center mb-5">
      <button id="runButton" class="btn btn-outline-success">Сравнить сочетания (<span id="combinationsCount"></span>)</button>
    </div>
  `;
  document.querySelector('#inputPanel').insertAdjacentHTML('afterend', runPanel);
  document.querySelector('#runButton').addEventListener('click', onRunButton);
  refreshRunButton();
};

renderOnboardingPanel();
renderInputPanel();
renderRunPanel();
renderItemsPanel();
