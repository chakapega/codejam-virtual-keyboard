const arrayOfCyrillicCharacters = [
  {key: 'Ё', code: "Backquote", widthType: 1},
  {key: '1', altKey: '!', code: "Digit1", widthType: 1},
  {key: '2', altKey: '"', code: "Digit2", widthType: 1},
  {key: '3', altKey: '№', code: "Digit3", widthType: 1},
  {key: '4', altKey: ';', code: "Digit4", widthType: 1},
  {key: '5', altKey: '%', code: "Digit5", widthType: 1},
  {key: '6', altKey: ':', code: "Digit6", widthType: 1},
  {key: '7', altKey: '?', code: "Digit7", widthType: 1},
  {key: '8', altKey: '*', code: "Digit8", widthType: 1},
  {key: '9', altKey: '(', code: "Digit9", widthType: 1},
  {key: '0', altKey: ')', code: "Digit0", widthType: 1},
  {key: '-', altKey: '_', code: "Minus", widthType: 1},
  {key: '=', altKey: '+', code: "Equal", widthType: 1},
  {key: 'Backspace', code: "Backspace", widthType: 2},
  {key: 'Tab', code: "Tab", widthType: 1},
  {key: 'Й', code: "KeyQ", widthType: 1},
  {key: 'Ц', code: "KeyW", widthType: 1},
  {key: 'У', code: "KeyE", widthType: 1},
  {key: 'К', code: "KeyR", widthType: 1},
  {key: 'Е', code: "KeyT", widthType: 1},
  {key: 'Н', code: "KeyY", widthType: 1},
  {key: 'Г', code: "KeyU", widthType: 1},
  {key: 'Ш', code: "KeyI", widthType: 1},
  {key: 'Щ', code: "KeyO", widthType: 1},
  {key: 'З', code: "KeyP", widthType: 1},
  {key: 'Х', code: "BracketLeft", widthType: 1},
  {key: 'Ъ', code: "BracketRight", widthType: 1},
  {key: '\\', altKey: '/', code: "Backslash", widthType: 1},
  {key: 'Del', code: "Delete", widthType: 1},
  {key: 'CapsLock', code: "CapsLock", widthType: 2},
  {key: 'Ф', code: "KeyA", widthType: 1},
  {key: 'Ы', code: "KeyS", widthType: 1},
  {key: 'В', code: "KeyD", widthType: 1},
  {key: 'А', code: "KeyF", widthType: 1},
  {key: 'П', code: "KeyG", widthType: 1},
  {key: 'Р', code: "KeyH", widthType: 1},
  {key: 'О', code: "KeyJ", widthType: 1},
  {key: 'Л', code: "KeyK", widthType: 1},
  {key: 'Д', code: "KeyL", widthType: 1},
  {key: 'Ж', code: "Semicolon", widthType: 1},
  {key: 'Э', code: "Quote", widthType: 1},
  {key: 'Enter', code: "Enter", widthType: 2},
  {key: 'Shift', code: "ShiftLeft", widthType: 2},
  {key: 'Я', code: "KeyZ", widthType: 1},
  {key: 'Ч', code: "KeyX", widthType: 1},
  {key: 'С', code: "KeyC", widthType: 1},
  {key: 'М', code: "KeyV", widthType: 1},
  {key: 'И', code: "KeyB", widthType: 1},
  {key: 'Т', code: "KeyN", widthType: 1},
  {key: 'Ь', code: "KeyM", widthType: 1},
  {key: 'Б', code: "Comma", widthType: 1},
  {key: 'Ю', code: "Period", widthType: 1},
  {key: '.', altKey: ',', code: "Slash", widthType: 1},
  {key: '▲', code: "ArrowUp", widthType: 1},
  {key: 'Shift', code: "ShiftRight", widthType: 2},
  {key: 'Ctrl', code: "ControlLeft", widthType: 2},
  {key: 'Alt', code: "AltLeft", widthType: 1},
  {key: 'Space', code: "Space", widthType: 3},
  {key: 'Alt', code: "AltRight", widthType: 1},
  {key: 'Ctrl', code: "ControlRight", widthType: 2},
  {key: '◀', code: "ArrowLeft", widthType: 1},
  {key: '▼', code: "ArrowDown", widthType: 1},
  {key: '▶', code: "ArrowRight", widthType: 1},
];

const arrayOfLatinCharacters = [
  ['`', '~'],
  ['1', '!'],
  ['2', '@'],
  ['3', '#'],
  ['4', '$'],
  ['5', '%'],
  ['6', '^'],
  ['7', '&'],
  ['8', '*'],
  ['9', '('],
  ['0', ')'],
  ['-', '_'],
  ['=', '+'],
  ['Backspace'],
  ['Tab'],
  ['q'],
  ['w'],
  ['e'],
  ['r'],
  ['t'],
  ['y'],
  ['u'],
  ['i'],
  ['o'],
  ['p'],
  ['[', '{'],
  [']', '}'],
  ['\\', '|'],
  ['Delete'],
  ['Capslock'],
  ['a'],
  ['s'],
  ['d'],
  ['f'],
  ['g'],
  ['h'],
  ['j'],
  ['k'],
  ['l'],
  [';', ':'],
  ["'", '"'],
  ['Enter'],
  ['Shift'],
  ['z'],
  ['x'],
  ['c'],
  ['v'],
  ['b'],
  ['n'],
  ['m'],
  [',', '<'],
  ['.', '>'],
  ['/', '?'],
  ['▲'],
  ['Shift'],
  ['Ctrl'],
  ['Win'],
  ['Alt'],
  ['Space'],
  ['Alt'],
  ['Ctrl'],
  ['◀'],
  ['▼'],
  ['▶'],
];

let pressed = false;

const textAreaCreation = () => {
  const textArea = document.createElement('textarea');

  textArea.classList.add('text-area');

  document.querySelector('body').appendChild(textArea);
};

const keyContainerCreation = obj => {
  const keyContainer = document.createElement('div');
  const mainSpan = document.createElement('span');

  keyContainer.classList.add('key-container');
  keyContainer.setAttribute('code', obj.code);

  if (obj.widthType === 2) {
    keyContainer.classList.add('double-key-container');
  } else if (obj.widthType === 3) {
    keyContainer.classList.add('space');
  } else if (obj.code === "ArrowRight") {
    keyContainer.classList.add('right-arrow');
  };

  mainSpan.textContent = obj.key;
  mainSpan.classList.add('main-span');

  if (obj.altKey) {
    const alternativeSpan = document.createElement('span');

    alternativeSpan.textContent = obj.altKey;
    alternativeSpan.classList.add('alternative-span');

    keyContainer.appendChild(alternativeSpan);
  };

  keyContainer.appendChild(mainSpan);

  return keyContainer;
};

const keyboardContainerCreation = () => {
  const keyboardContainer = document.createElement('div');

  keyboardContainer.classList.add('keyboard-container');

  arrayOfCyrillicCharacters.forEach(obj => {
    keyboardContainer.appendChild(keyContainerCreation(obj));
  });

  document.querySelector('body').appendChild(keyboardContainer);
};

textAreaCreation();
keyboardContainerCreation();

document.addEventListener('keydown', e => {
  document.querySelector('.text-area').focus();

  pressed = true;

  console.log(e);

  if (pressed) {
    document.querySelectorAll('.key-container').forEach(keyContainer => {
      if (keyContainer.attributes.code.value === e.code) {
        keyContainer.classList.add('pressed-key-container');
      };
    });
  };
});

document.addEventListener('keyup', e => {
  pressed = false;

  if (!pressed) {
    document.querySelectorAll('.key-container').forEach(keyContainer => {
      if (keyContainer.attributes.code.value === e.code) {
        keyContainer.classList.remove('pressed-key-container');
      };
    });
  };
});