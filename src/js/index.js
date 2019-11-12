import { arrayOfCyrillicCharacters, arrayOfLatinCharacters } from './arraysOfKeyboardLayouts.js';

let isShiftAndAltPressed = false;
let isCapsLockPressed = false;

const keystrokeAction = (event, obj) => {
  const arrayOfKeyContainers = Array.from(document.querySelectorAll('.key-container'));
  const textArea = document.querySelector('.text-area');

  const eventCode = event.type === 'mousedown' ? obj.code : event.code;

  event.preventDefault();

  if (event.type === 'keydown' && event.altKey && event.shiftKey) {
    isShiftAndAltPressed = true;
  }

  arrayOfKeyContainers.forEach(keyContainer => {
    if (keyContainer.getAttribute('code') === eventCode) {
      const key = keyContainer.getAttribute('key');

      keyContainer.classList.add('pressed-key-container');

      if (keyContainer.getAttribute('key-type') !== 'function-key') {
        const altKey = keyContainer.getAttribute('alt-key');

        if (isCapsLockPressed && event.shiftKey === false) {
          textArea.value += key.toUpperCase();
        } else if (isCapsLockPressed && event.shiftKey && altKey) {
          textArea.value += altKey;
        } else if (isCapsLockPressed && event.shiftKey) {
          textArea.value += key.toLowerCase();
        } else if (!event.shiftKey) {
          textArea.value += key.toLowerCase();
        } else if (event.shiftKey && altKey) {
          textArea.value += altKey;
        } else if (event.shiftKey) {
          textArea.value += key;
        }
      } else {
        switch (key) {
          case 'CapsLock':
            isCapsLockPressed = !isCapsLockPressed;

            document.querySelector('.caps-lock-indicator').classList.toggle('caps-lock-indicator_active');
            break;
          case 'Backspace':
            textArea.value = textArea.value.slice(0, textArea.value.length - 1);
            break;
          case 'Space':
            textArea.value += ' ';
            break;
          case 'Tab':
            textArea.value += '        ';
            break;
          case 'Enter':
            textArea.value += '\n';
            break;

          default:
            break;
        }
      }
    }
  });
};

const mouseUpHandler = () => {
  const pressedKeyContainer = document.querySelector('.pressed-key-container');

  if (pressedKeyContainer) {
    pressedKeyContainer.classList.remove('pressed-key-container');
  }
};

const textAreaCreation = () => {
  const textArea = document.createElement('textarea');

  textArea.classList.add('text-area');
  textArea.setAttribute('readonly', true);

  document.querySelector('body').appendChild(textArea);
};

const keyContainersCreation = obj => {
  const keyContainer = document.createElement('div');
  const mainSpan = document.createElement('span');

  keyContainer.setAttribute('code', obj.code);
  keyContainer.setAttribute('key', obj.key);

  if (obj.keyType) {
    keyContainer.setAttribute('key-type', obj.keyType);
  }

  if (obj.altKey) {
    keyContainer.setAttribute('alt-key', obj.altKey);
  }

  keyContainer.addEventListener('mousedown', event => keystrokeAction(event, obj));

  keyContainer.classList.add('key-container');

  if (obj.widthType === 2) {
    keyContainer.classList.add('double-key-container');
  } else if (obj.widthType === 3) {
    keyContainer.classList.add('space');
  }

  if (obj.code === 'ArrowRight') {
    keyContainer.classList.add('right-arrow');
  }

  mainSpan.textContent = obj.key;
  mainSpan.classList.add('main-span');

  if (obj.altKey) {
    const alternativeSpan = document.createElement('span');

    alternativeSpan.classList.add('alternative-span');
    alternativeSpan.textContent = obj.altKey;

    keyContainer.appendChild(alternativeSpan);
  }

  if (obj.key === 'CapsLock') {
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
  const keyboardContainer = document.createElement('div');
  keyboardContainer.classList.add('keyboard-container');

  switch (localStorage.getItem('language')) {
    case 'en':
      arrayOfLatinCharacters.forEach(obj => keyboardContainer.appendChild(keyContainersCreation(obj)));
      break;

    case 'ru':
      arrayOfCyrillicCharacters.forEach(obj => keyboardContainer.appendChild(keyContainersCreation(obj)));
      break;

    default:
      break;
  }

  document.querySelector('body').appendChild(keyboardContainer);
};

const deleteKeyboardContainer = () => {
  const keyboardContainer = document.querySelector('.keyboard-container');

  if (keyboardContainer) {
    keyboardContainer.remove();
  }
};

if (!localStorage.getItem('language')) {
  localStorage.setItem('language', 'en');
}

textAreaCreation();
keyboardContainerCreation();

document.addEventListener('keydown', event => keystrokeAction(event));

document.addEventListener('keyup', event => {
  const arrayOfKeyContainers = Array.from(document.querySelectorAll('.key-container'));

  arrayOfKeyContainers.forEach(keyContainer => {
    if (keyContainer.getAttribute('code') === event.code) {
      keyContainer.classList.remove('pressed-key-container');
    }
  });

  if (isShiftAndAltPressed) {
    if (localStorage.getItem('language') === 'en') {
      localStorage.setItem('language', 'ru');
    } else {
      localStorage.setItem('language', 'en');
    }

    deleteKeyboardContainer();
    keyboardContainerCreation();

    isShiftAndAltPressed = false;
  }
});

document.addEventListener('mouseup', () => mouseUpHandler());
