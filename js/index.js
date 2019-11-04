import { arrayOfCyrillicCharacters, arrayOfLatinCharacters } from './arraysOfKeyboardLayouts.js';

let isKeyPressed = false;
let isShiftAndAltPressed = false;
let isCapsLockPressed = false;

const mouseDownHandler = (e, obj) => {
  const textArea = document.querySelector('.text-area');

  isKeyPressed = true;

  document.querySelectorAll('.key-container').forEach((keyContainer) => {
    if (keyContainer.attributes.code.value === obj.code) {
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
      } else if (keyContainer.attributes.functionKey.value === 'true') {
        if (keyContainer.attributes.key.value === 'CapsLock') {
          isCapsLockPressed = !isCapsLockPressed;

          document.querySelector('.caps-lock-indicator').classList.toggle('caps-lock-indicator_active');
        } else if (keyContainer.attributes.key.value === 'Backspace') {
          textArea.textContent = textArea.textContent.slice(0, textArea.textContent.length - 1);
        } else if (keyContainer.attributes.key.value === 'Space') {
          textArea.textContent += ' ';
        } else if (keyContainer.attributes.key.value === 'Tab') {
          textArea.textContent += '        ';
        } else if (keyContainer.attributes.key.value === 'Enter') {
          textArea.textContent += `${textArea.innerText}\n`;
        }
      }
    }
  });

  if (isKeyPressed) {
    document.querySelectorAll('.key-container').forEach((keyContainer) => {
      if (keyContainer.attributes.code.value === obj.code) {
        keyContainer.classList.add('pressed-key-container');

        if (e.altKey === true && e.shiftKey === true) {
          isShiftAndAltPressed = true;
        }
      }
    });
  }
};

const mouseUpHandler = (e, obj) => {
  isKeyPressed = false;

  if (!isKeyPressed) {
    document.querySelectorAll('.key-container').forEach((keyContainer) => {
      if (keyContainer.attributes.code.value === obj.code) {
        keyContainer.classList.remove('pressed-key-container');
      }
    });
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

  keyContainer.classList.add('key-container');
  keyContainer.setAttribute('code', obj.code);
  keyContainer.setAttribute('functionKey', obj.functionKey);
  keyContainer.setAttribute('key', obj.key);
  keyContainer.setAttribute('altKey', obj.altKey);
  keyContainer.addEventListener('mousedown', (e) => {
    mouseDownHandler(e, obj);
  });
  keyContainer.addEventListener('mouseup', (e) => {
    mouseUpHandler(e, obj);
  });

  if (obj.widthType === 2) {
    keyContainer.classList.add('double-key-container');
  } else if (obj.widthType === 3) {
    keyContainer.classList.add('space');
  } else if (obj.code === 'ArrowRight') {
    keyContainer.classList.add('right-arrow');
  }

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
  }

  const keyboardContainer = document.createElement('div');

  keyboardContainer.classList.add('keyboard-container');

  if (localStorage.language === 'en') {
    arrayOfLatinCharacters.forEach((obj) => {
      keyboardContainer.appendChild(keyContainersCreation(obj));
    });
  } else if (localStorage.language === 'ru') {
    arrayOfCyrillicCharacters.forEach((obj) => {
      keyboardContainer.appendChild(keyContainersCreation(obj));
    });
  }

  document.querySelector('body').appendChild(keyboardContainer);
};

if (!localStorage.language) {
  localStorage.setItem('language', 'en');
}

textAreaCreation();
keyboardContainerCreation();

document.addEventListener('keydown', (e) => {
  const textArea = document.querySelector('.text-area');

  e.preventDefault();

  isKeyPressed = true;

  document.querySelectorAll('.key-container').forEach((keyContainer) => {
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
        }
      } else if (keyContainer.attributes.functionKey.value === 'true') {
        if (keyContainer.attributes.key.value === 'CapsLock') {
          isCapsLockPressed = !isCapsLockPressed;

          document.querySelector('.caps-lock-indicator').classList.toggle('caps-lock-indicator_active');
        } else if (keyContainer.attributes.key.value === 'Backspace') {
          textArea.textContent = textArea.textContent.slice(0, textArea.textContent.length - 1);
        } else if (keyContainer.attributes.key.value === 'Space') {
          textArea.textContent += ' ';
        } else if (keyContainer.attributes.key.value === 'Tab') {
          textArea.textContent += '        ';
        } else if (keyContainer.attributes.key.value === 'Enter') {
          textArea.textContent += `${textArea.innerText}\n`;
        }
      }
    }
  });

  if (isKeyPressed) {
    document.querySelectorAll('.key-container').forEach((keyContainer) => {
      if (keyContainer.attributes.code.value === e.code) {
        keyContainer.classList.add('pressed-key-container');

        if (e.altKey === true && e.shiftKey === true) {
          isShiftAndAltPressed = true;
        }
      }
    });
  }
});

document.addEventListener('keyup', (e) => {
  isKeyPressed = false;

  if (!isKeyPressed) {
    document.querySelectorAll('.key-container').forEach((keyContainer) => {
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

      keyboardContainerCreation();

      isShiftAndAltPressed = false;
    }
  }
});
