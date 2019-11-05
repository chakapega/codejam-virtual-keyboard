import { arrayOfCyrillicCharacters, arrayOfLatinCharacters } from './arraysOfKeyboardLayouts.js';

let isShiftAndAltPressed = false;
let isCapsLockPressed = false;

const mouseDownHandler = (e, obj) => {
  const arrayOfKeyContainers = document.querySelectorAll('.key-container');
  const textArea = document.querySelector('.text-area');

  e.preventDefault();

  arrayOfKeyContainers.forEach((keyContainer) => {
    if (keyContainer.attributes.code.value === obj.code) {
      keyContainer.classList.add('pressed-key-container');

      if (keyContainer.attributes.functionKey.value !== 'true') {
        if (isCapsLockPressed) {
          textArea.textContent += keyContainer.attributes.key.value.toUpperCase();
        } else if (!e.shiftKey) {
          textArea.textContent += keyContainer.attributes.key.value.toLowerCase();
        } else if (e.shiftKey && keyContainer.attributes.altKey.value !== 'undefined') {
          textArea.textContent += keyContainer.attributes.altKey.value;
        } else if (e.shiftKey) {
          textArea.textContent += keyContainer.attributes.key.value;
        }
      } else {
        switch (keyContainer.attributes.key.value) {
          case 'CapsLock':
            isCapsLockPressed = !isCapsLockPressed;

            document.querySelector('.caps-lock-indicator').classList.toggle('caps-lock-indicator_active');
            break;
          case 'Backspace':
            textArea.textContent = textArea.textContent.slice(0, textArea.textContent.length - 1);
            break;
          case 'Space':
            textArea.textContent += ' ';
            break;
          case 'Tab':
            textArea.textContent += '        ';
            break;
          case 'Enter':
            textArea.textContent += `${textArea.innerText}\n`;
            break;

          default:
        }
      }
    }
  });
};

const mouseUpHandler = () => {
  if (document.querySelector('.pressed-key-container')) {
    document.querySelector('.pressed-key-container').classList.remove('pressed-key-container');
  }
};

const textAreaCreation = () => {
  const textArea = document.createElement('textarea');

  textArea.classList.add('text-area');
  textArea.setAttribute('readonly', true);

  document.querySelector('body').appendChild(textArea);
};

const keyContainersCreation = (obj) => {
  const keyContainer = document.createElement('div');
  const mainSpan = document.createElement('span');

  keyContainer.setAttribute('code', obj.code);
  keyContainer.setAttribute('functionkey', obj.functionKey);
  keyContainer.setAttribute('key', obj.key);
  keyContainer.setAttribute('altKey', obj.altKey);
  keyContainer.addEventListener('mousedown', (e) => {
    mouseDownHandler(e, obj);
  });

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

  switch (localStorage.language) {
    case 'en':
      arrayOfLatinCharacters.forEach((obj) => {
        keyboardContainer.appendChild(keyContainersCreation(obj));
      });
      break;

    case 'ru':
      arrayOfCyrillicCharacters.forEach((obj) => {
        keyboardContainer.appendChild(keyContainersCreation(obj));
      });
      break;

    default:
  }

  document.querySelector('body').appendChild(keyboardContainer);
};

const deleteKeyboardContainer = () => {
  if (document.querySelector('.keyboard-container')) {
    document.querySelector('.keyboard-container').remove();
  }
};

if (!localStorage.language) {
  localStorage.setItem('language', 'en');
}

textAreaCreation();
keyboardContainerCreation();

document.addEventListener('keydown', (e) => {
  const arrayOfKeyContainers = document.querySelectorAll('.key-container');
  const textArea = document.querySelector('.text-area');

  e.preventDefault();

  if (e.altKey && e.shiftKey) {
    isShiftAndAltPressed = true;
  }

  arrayOfKeyContainers.forEach((keyContainer) => {
    if (keyContainer.attributes.code.value === e.code) {
      keyContainer.classList.add('pressed-key-container');

      if (keyContainer.attributes.functionKey.value !== 'true') {
        if (isCapsLockPressed) {
          textArea.textContent += keyContainer.attributes.key.value.toUpperCase();
        } else if (!e.shiftKey) {
          textArea.textContent += keyContainer.attributes.key.value.toLowerCase();
        } else if (e.shiftKey && keyContainer.attributes.altKey.value !== 'undefined') {
          textArea.textContent += keyContainer.attributes.altKey.value;
        } else if (e.shiftKey) {
          textArea.textContent += keyContainer.attributes.key.value;
        }
      } else {
        switch (keyContainer.attributes.key.value) {
          case 'CapsLock':
            isCapsLockPressed = !isCapsLockPressed;

            document.querySelector('.caps-lock-indicator').classList.toggle('caps-lock-indicator_active');
            break;
          case 'Backspace':
            textArea.textContent = textArea.textContent.slice(0, textArea.textContent.length - 1);
            break;
          case 'Space':
            textArea.textContent += ' ';
            break;
          case 'Tab':
            textArea.textContent += '        ';
            break;
          case 'Enter':
            textArea.textContent += `${textArea.innerText}\n`;
            break;

          default:
        }
      }
    }
  });
});

document.addEventListener('keyup', (e) => {
  const arrayOfKeyContainers = document.querySelectorAll('.key-container');

  arrayOfKeyContainers.forEach((keyContainer) => {
    if (keyContainer.attributes.code.value === e.code) {
      keyContainer.classList.remove('pressed-key-container');
    }
  });

  if (isShiftAndAltPressed) {
    if (localStorage.language === 'en') {
      localStorage.language = 'ru';
    } else {
      localStorage.language = 'en';
    }

    deleteKeyboardContainer();
    keyboardContainerCreation();

    isShiftAndAltPressed = false;
  }
});

document.addEventListener('mouseup', () => {
  mouseUpHandler();
});
