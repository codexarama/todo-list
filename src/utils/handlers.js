// MANAGING FOCUS STYLE ACCORDING TO NAVIGATION TYPE : //////////////////////////
// KEYBOARD OR MOUSE
var head = document.head || document.getElementsByTagName('head')[0];
var accessStyles = head.appendChild(document.createElement('style'));

/**
 * eventListener mouse navigation : discard box-shadow
 * @param   {string}  mousedown  [detects mouse navigation]
 * @return  {string}  css        {box-shadow:none !important}
 */
document.addEventListener('mousedown', () => {
  accessStyles.innerHTML = '* {box-shadow:none !important}';
});

/**
 * eventListener keydown navigation : active box-shadow
 * @param   {string}  keydown  [detects keydown navigation]
 * @param   {boolean} e        [event is tab key || shift tab key ? y/n]
 * @return  {string}  css      ["" no content to set the default one]
 */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab' || e.shiftKey) accessStyles.innerHTML = '';
});

// THEME SWITCHER
export const theme = {
  clear: 'clear_bg',
  add: 'add_bg',
  update: 'update_bg',
};

export function bgSwitcher(previous, updated) {
  document.body.classList.replace(previous, updated);
}

// INPUT FOCUSER
export function focusInput() {
  const input = document.querySelector('input');
  input.focus();
}