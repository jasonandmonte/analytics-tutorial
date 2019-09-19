/**
 * Track a click on a button using the asynchronous tracking API.
 */
function trackButtonClick(e) {
  console.log('triggered click event tracking', e)
  chrome.runtime.sendMessage({command: "button", data: e.target.id});
}

/**
 * Sets up event handlers for the popup's `button` elements once the
 * popup's DOM has loaded.
 */
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', trackButtonClick);
  }
});
