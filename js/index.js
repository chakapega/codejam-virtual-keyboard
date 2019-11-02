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
  {key: 'Backspace', code: "Backspace", widthType: 2, functionKey: 'true'},
  {key: 'Tab', code: "Tab", widthType: 1, functionKey: 'true'},
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
  {key: 'Del', code: "Delete", widthType: 1, functionKey: 'true'},
  {key: 'CapsLock', code: "CapsLock", widthType: 2, functionKey: 'true'},
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
  {key: 'Enter', code: "Enter", widthType: 2, functionKey: 'true'},
  {key: 'Shift', code: "ShiftLeft", widthType: 2, functionKey: 'true'},
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
  {key: '▲', code: "ArrowUp", widthType: 1, functionKey: 'true'},
  {key: 'Shift', code: "ShiftRight", widthType: 2, functionKey: 'true'},
  {key: 'Ctrl', code: "ControlLeft", widthType: 2, functionKey: 'true'},
  {key: 'Alt', code: "AltLeft", widthType: 1, functionKey: 'true'},
  {key: 'Space', code: "Space", widthType: 3, functionKey: 'true'},
  {key: 'Alt', code: "AltRight", widthType: 1, functionKey: 'true'},
  {key: 'Ctrl', code: "ControlRight", widthType: 2, functionKey: 'true'},
  {key: '◀', code: "ArrowLeft", widthType: 1, functionKey: 'true'},
  {key: '▼', code: "ArrowDown", widthType: 1, functionKey: 'true'},
  {key: '▶', code: "ArrowRight", widthType: 1, functionKey: 'true'},
];
const arrayOfLatinCharacters = [
  {key: '`', altKey: '~', code: "Backquote", widthType: 1},
  {key: '1', altKey: '!', code: "Digit1", widthType: 1},
  {key: '2', altKey: '@', code: "Digit2", widthType: 1},
  {key: '3', altKey: '#', code: "Digit3", widthType: 1},
  {key: '4', altKey: '$', code: "Digit4", widthType: 1},
  {key: '5', altKey: '%', code: "Digit5", widthType: 1},
  {key: '6', altKey: '^', code: "Digit6", widthType: 1},
  {key: '7', altKey: '&', code: "Digit7", widthType: 1},
  {key: '8', altKey: '*', code: "Digit8", widthType: 1},
  {key: '9', altKey: '(', code: "Digit9", widthType: 1},
  {key: '0', altKey: ')', code: "Digit0", widthType: 1},
  {key: '-', altKey: '_', code: "Minus", widthType: 1},
  {key: '=', altKey: '+', code: "Equal", widthType: 1},
  {key: 'Backspace', code: "Backspace", widthType: 2, functionKey: 'true'},
  {key: 'Tab', code: "Tab", widthType: 1, functionKey: 'true'},
  {key: 'Q', code: "KeyQ", widthType: 1},
  {key: 'W', code: "KeyW", widthType: 1},
  {key: 'E', code: "KeyE", widthType: 1},
  {key: 'R', code: "KeyR", widthType: 1},
  {key: 'T', code: "KeyT", widthType: 1},
  {key: 'Y', code: "KeyY", widthType: 1},
  {key: 'U', code: "KeyU", widthType: 1},
  {key: 'I', code: "KeyI", widthType: 1},
  {key: 'O', code: "KeyO", widthType: 1},
  {key: 'P', code: "KeyP", widthType: 1},
  {key: '[', altKey: '{', code: "BracketLeft", widthType: 1},
  {key: ']', altKey: '}', code: "BracketRight", widthType: 1},
  {key: '\\', altKey: '|', code: "Backslash", widthType: 1},
  {key: 'Del', code: "Delete", widthType: 1, functionKey: 'true'},
  {key: 'CapsLock', code: "CapsLock", widthType: 2, functionKey: 'true'},
  {key: 'A', code: "KeyA", widthType: 1},
  {key: 'S', code: "KeyS", widthType: 1},
  {key: 'D', code: "KeyD", widthType: 1},
  {key: 'F', code: "KeyF", widthType: 1},
  {key: 'G', code: "KeyG", widthType: 1},
  {key: 'H', code: "KeyH", widthType: 1},
  {key: 'J', code: "KeyJ", widthType: 1},
  {key: 'K', code: "KeyK", widthType: 1},
  {key: 'L', code: "KeyL", widthType: 1},
  {key: ';', altKey: ':', code: "Semicolon", widthType: 1},
  {key: "'", altKey: '"', code: "Quote", widthType: 1},
  {key: 'Enter', code: "Enter", widthType: 2, functionKey: 'true'},
  {key: 'Shift', code: "ShiftLeft", widthType: 2, functionKey: 'true'},
  {key: 'Z', code: "KeyZ", widthType: 1},
  {key: 'X', code: "KeyX", widthType: 1},
  {key: 'C', code: "KeyC", widthType: 1},
  {key: 'V', code: "KeyV", widthType: 1},
  {key: 'B', code: "KeyB", widthType: 1},
  {key: 'N', code: "KeyN", widthType: 1},
  {key: 'M', code: "KeyM", widthType: 1},
  {key: ',', altKey: '<', code: "Comma", widthType: 1},
  {key: '.', altKey: '>', code: "Period", widthType: 1},
  {key: '/', altKey: '?', code: "Slash", widthType: 1},
  {key: '▲', code: "ArrowUp", widthType: 1, functionKey: 'true'},
  {key: 'Shift', code: "ShiftRight", widthType: 2, functionKey: 'true'},
  {key: 'Ctrl', code: "ControlLeft", widthType: 2, functionKey: 'true'},
  {key: 'Alt', code: "AltLeft", widthType: 1, functionKey: 'true'},
  {key: 'Space', code: "Space", widthType: 3, functionKey: 'true'},
  {key: 'Alt', code: "AltRight", widthType: 1, functionKey: 'true'},
  {key: 'Ctrl', code: "ControlRight", widthType: 2, functionKey: 'true'},
  {key: '◀', code: "ArrowLeft", widthType: 1, functionKey: 'true'},
  {key: '▼', code: "ArrowDown", widthType: 1, functionKey: 'true'},
  {key: '▶', code: "ArrowRight", widthType: 1, functionKey: 'true'},
];
let pressed = false;
let isShiftAndAltPressed = false;
let isCapsLockPressed = false;

const textAreaCreation = () => {
  const textArea = document.createElement('textarea');

  textArea.classList.add('text-area');
  textArea.setAttribute('readonly', true);

  document.querySelector('body').appendChild(textArea);
};

const keyContainersCreation = obj => {
  const keyContainer = document.createElement('div');
  const mainSpan = document.createElement('span');

  keyContainer.classList.add('key-container');
  keyContainer.setAttribute('code', obj.code);
  keyContainer.setAttribute('functionKey', obj.functionKey);
  keyContainer.setAttribute('key', obj.key);
  keyContainer.setAttribute('altKey', obj.altKey);

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
  } else if (obj.key === 'CapsLock') {
    const capsLockIndicatorContainer = document.createElement('div');
    const capsLockIndicator = document.createElement('div');

    capsLockIndicatorContainer.classList.add('caps-lock-indicator-container');
    capsLockIndicator.classList.add('caps-lock-indicator');

    capsLockIndicatorContainer.appendChild(capsLockIndicator);
    keyContainer.appendChild(capsLockIndicatorContainer);
  }

  keyContainer.appendChild(mainSpan);

  return keyContainer;
};

const keyboardContainerCreation = () => {
  if (document.querySelector('.keyboard-container')) {
    document.querySelector('.keyboard-container').remove();
  };

  const keyboardContainer = document.createElement('div');

  keyboardContainer.classList.add('keyboard-container');

  if (localStorage.language === 'en') {
    arrayOfLatinCharacters.forEach(obj => {
      keyboardContainer.appendChild(keyContainersCreation(obj));
    });
  } else if (localStorage.language === 'ru') {
    arrayOfCyrillicCharacters.forEach(obj => {
      keyboardContainer.appendChild(keyContainersCreation(obj));
    });
  };

  document.querySelector('body').appendChild(keyboardContainer);
};

if (!localStorage.language) {
  localStorage.setItem('language', 'en');
};

textAreaCreation();
keyboardContainerCreation();

document.addEventListener('keydown', e => {
  const textArea = document.querySelector('.text-area');

  e.preventDefault();

  pressed = true;

  document.querySelectorAll('.key-container').forEach(keyContainer => {
    if (keyContainer.attributes.code.value === e.code) {
      if (keyContainer.attributes.functionKey.value !== 'true') {
        if (isCapsLockPressed) {
          textArea.textContent += keyContainer.attributes.key.value.toUpperCase();
        } else if (!e.shiftKey) {
          textArea.textContent += keyContainer.attributes.key.value.toLowerCase();
        } else if (e.shiftKey && keyContainer.attributes.altKey.value !== 'undefined') {
          textArea.textContent += keyContainer.attributes.altKey.value;
        } else if (e.shiftKey) {
          textArea.textContent += keyContainer.attributes.key.value;
        };
      } else if (keyContainer.attributes.functionKey.value === 'true') {
        if (keyContainer.attributes.key.value === 'CapsLock') {
          isCapsLockPressed = !isCapsLockPressed;

          document.querySelector('.caps-lock-indicator').classList.toggle('caps-lock-indicator_active');
        } else if (keyContainer.attributes.key.value === 'Backspace') {
          textArea.textContent = textArea.textContent.slice(0, textArea.textContent.length -1);
        } else if (keyContainer.attributes.key.value === 'Space') {
          textArea.textContent += ' ';
        } else if (keyContainer.attributes.key.value === 'Tab') {
          textArea.textContent += '        ';
        } else if (keyContainer.attributes.key.value === 'Enter') {
          textArea.textContent += textArea.innerText + '\n';
        };
      };
    };
  });

  if (pressed) {
    document.querySelectorAll('.key-container').forEach(keyContainer => {
      if (keyContainer.attributes.code.value === e.code) {
        keyContainer.classList.add('pressed-key-container');

        if (e.altKey === true && e.shiftKey === true) {
          isShiftAndAltPressed = true;
        };
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

    if (isShiftAndAltPressed) {
      if (localStorage.language === 'en') {
        localStorage.language = 'ru';
      } else {
        localStorage.language = 'en';
      };

      keyboardContainerCreation();

      isShiftAndAltPressed = false;
    };
  };
});