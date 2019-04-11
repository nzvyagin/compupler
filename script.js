// var userInput = document.querySelector('#user-input');
// var addItem = document.querySelector('#add-item');
// var run = document.querySelector('#run-compare');
// var compare = document.querySelector('#compare');
// var one = document.querySelector('#one');
// var two = document.querySelector('#two');
// var first = 0;
// var second = 1;
// var itemsList = [];

// var itemCounter = document.createElement('div');
// itemCounter.classList.add('item-counter', 'mb-1', 'py-2');
// itemsPanel.query().insertAdjacentElement('beforebegin', itemCounter);
// var refreshCounter = function() {
//   itemCounter.innerHTML = 'Количество элементов: ' + itemsList.length;
// }

// var result = document.createElement('ol');
// result.classList.add('result', 'mb-1', 'py-2');

// var renderPairs = function() {
//   if(second < itemsList.length) {
//     one.innerHTML = itemsList[first].name;
//     two.innerHTML = itemsList[second].name;
//     second = second+1;
//   } else if (first < itemsList.length - 2) {
//     first = first + 1;
//     second = first + 1;
//     one.innerHTML = itemsList[first].name;
//     two.innerHTML = itemsList[second].name;
//     second = second+1;
//   } else if(first === itemsList.length - 2 && second === itemsList.length) {
//       compare.remove();
//       document.querySelector('.item-counter').remove();
//       document.querySelector('.variants-counter').remove();
//       run.remove();
//       userInput.remove();
//       addItem.remove();
//       itemsPanel.query().remove();
//       document.querySelector('#cancel').remove();
//       var resultList = itemsList.sort(compareScores);
//       for(i=0; i<resultList.length; i++) {
//         result.insertAdjacentHTML('beforeend', '<li>' + resultList[i].name + '</li>')
//       }
//       document.querySelector('.container').insertAdjacentElement('beforebegin', result);
//   }
// }

// var fact = function(x) {
//   z = x;
//   for(i=x-1; i>=2; i--) {
//     z = z * i;
//   }
//   return z;
// }

// var compareScores = function(itemOne, itemTwo) {
//   return  itemTwo.score - itemOne.score;
// }

// var variantsCounter = document.createElement('div');
// variantsCounter.classList.add('variants-counter', 'mb-1', 'py-2')
// itemsPanel.query().insertAdjacentElement('beforebegin', variantsCounter);
// var countVariants = function() {
//   if(itemsList.length === 1) {
//     variantsCounter.innerHTML = 'Количество вариантов: ' + 0;
//   } else if(itemsList.length === 2) {
//     variantsCounter.innerHTML = 'Количество вариантов: ' + 1;
//   } else {
//     variantsCounter.innerHTML = 'Количество вариантов: ' + (fact(itemsList.length))/(2*fact(itemsList.length - 2));
//   }
// }

// var onClick = function(evt) {
//   evt.preventDefault();
//   if(userInput.value) {
//     itemsList.push({name: userInput.value, score: 0});
//     var item = document.createElement('div');
//     item.innerHTML = '<span class="flex-grow-1"></span><button class="btn btn-danger deleteItem">Удалить</button>';
//     itemsPanel.query().insertAdjacentElement('beforeend', item);
//     item.classList.add('item', 'bg-light', 'mb-1', 'py-2', 'd-flex');
//     setId();
//     item.querySelector('span').innerHTML = userInput.value;
//     refreshCounter();
//     countVariants();
//     userInput.value = null;
//     userInput.focus();
//   } else {
//     userInput.focus();
//   }
// }

// var onEnter = function(evt) {
//   if(userInput.value && evt.keyCode === 13) {
//     itemsList.push({name: userInput.value, score: 0});
//     var item = document.createElement('div');
//     item.innerHTML = '<span class="flex-grow-1"></span><button class="btn btn-danger deleteItem">Удалить</button>';
//     itemsPanel.query().insertAdjacentElement('beforeend', item);
//     item.classList.add('item', 'bg-light', 'mb-1', 'py-2', 'd-flex');
//     setId();
//     item.querySelector('span').innerHTML = userInput.value;
//     refreshCounter();
//     countVariants();
//     userInput.value = null;
//     userInput.focus();
//   } else {
//     userInput.focus();
//   }
// }

// var onClickCompare = function(evt) {
//   if(evt.target.id != 'compare') {
//     itemsList.find(itm => itm.name === evt.target.innerHTML).score += 1;
//     renderPairs();
//   }
// }

// var onClickRun = function(evt) {
//   evt.preventDefault;
//   renderPairs();
//   var cancel = document.createElement('div');
//   cancel.innerHTML = '<button class="btn btn-danger mb-3" id="cancel">Назад к списку</button>';
//   document.querySelector('.input-field').insertAdjacentElement('afterend', cancel);
//   document.querySelector('#cancel').addEventListener('click', onCancel);
// }

// var onClickReset = function(evt) {
//   evt.preventDefault;
//   document.location.reload(true);
// }

// var onCancel = function(evt) {
//   evt.preventDefault;
//   first = 0;
//   second = 1;
//   one.innerHTML = '';
//   two.innerHTML = '';
//   for(i=0; i<itemsList.length; i++) {
//     itemsList[i].score = 0;
//   }
//   document.querySelector('#cancel').remove();
// }

// var onClickDelete = function(evt) {
//   if(/deleteItem/.test(evt.target.id)) {
//     evt.preventDefault;
//     var num = evt.target.id.replace('deleteItem-', '');
//     document.querySelector('#item-' + num).remove();
//     itemsList.splice(num, 1);
//     setId();
//     refreshCounter();
//     countVariants();
//   }
// }

// var setId = function() {
//   var items = document.querySelectorAll('.item ');
//   for(i=0; i<items.length; i++) {
//     items[i].setAttribute('id', 'item-' + i);
//     items[i].querySelector('.deleteItem').setAttribute('id', 'deleteItem-' + i);
//   }
// }

// userInput.focus();
// addItem.addEventListener('click', onClick);
// document.querySelector('#user-input').addEventListener('keydown', onEnter);
// run.addEventListener('click', onClickRun);
// compare.addEventListener('click', onClickCompare);
// document.querySelector('#reset').addEventListener('click', onClickReset);
// itemsPanel.query().addEventListener('click', onClickDelete);

var itemsArray = [];

var addItem = function(content, id) {
  if(document.querySelector('#resetButton').style.display = 'none') {
    document.querySelector('#resetButton').style.display = 'inline';
  }
  var item = document.createElement('div');
  item.id = 'item-' + id;
  item.classList.add('mb-2', 'd-flex', 'align-items-center', 'bg-light');
  item.innerHTML = '<div class="flex-grow-1 mx-1"></div>'
  item.querySelector('div').innerHTML = content;
  var deleteItem = document.createElement('button');
  deleteItem.id = 'deleteItem-' + id;
  deleteItem.classList.add('btn', 'btn-danger', 'btn-sm');
  deleteItem.innerHTML = 'Удалить';
  item.appendChild(deleteItem);
  document.querySelector('#itemsList').appendChild(item);
  document.querySelector('#itemsCount').innerHTML = '(' + itemsArray.length + ')';
  refreshRunButton();
}

var countCombinations = function() {
  if(itemsArray.length === 1) {
    return 0;
  } else if(itemsArray.length === 2) {
    document.querySelector('#runButton').addEventListener('click', onRunButton);
    return 1;
  } else {
    return (fact(itemsArray.length))/(2*fact(itemsArray.length - 2));
  }
}

var onRunButton = function() {
  document.querySelector('#addItemButton').removeEventListener('click', onAddItemButtonClick);
  document.querySelector('#inputPanel').remove();
  document.querySelector('#runButton').removeEventListener('click', onRunButton);
  document.querySelector('#runPanel').remove();
  document.querySelector('#itemsPanel').remove();
}

var fact = function(x) {
  z = x;
  for(i=x-1; i>=2; i--) {
    z = z * i;
  }
  return z;
}

var refreshRunButton = function() {
  if(document.querySelector('#runPanel') === null) {
    var runPanel = document.createElement('div');
    runPanel.id = 'runPanel';
    runPanel.classList.add('row', 'justify-content-center', 'mb-5');
    runPanel.innerHTML = '<button id="runButton" class="btn btn-outline-success">Сравнить сочетания (<span id="combinationsCount">10</span>)</button>'
    document.querySelector('#inputPanel').insertAdjacentElement('afterend', runPanel);
    document.querySelector('#combinationsCount').innerHTML = countCombinations();
  } else {
    document.querySelector('#combinationsCount').innerHTML = countCombinations();
  }
}

var onAddItemButtonClick = function(evt) {
  evt.preventDefault();
  var inputField = document.querySelector('#inputField');
  if(inputField.value) {
    itemsArray.push({name: inputField.value, score: 0});
    addItem(inputField.value, 0);
    inputField.value = null;
    inputField.focus();
  } else {
    inputField.focus();
  }
}

document.querySelector('#inputField').focus();
document.querySelector('#addItemButton').addEventListener('click', onAddItemButtonClick);