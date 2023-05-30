let display = '';

function appendToDisplay(value) {
  display += value;
  document.querySelector('.js-values').innerHTML = display;
}

function removeLastItem() {
  display = display.slice(0, -1);
  document.querySelector('.js-values').innerHTML = display;
}

function clearDisplay() {
  display = '';
  document.querySelector('.js-values').innerHTML = display;
}

function calculateItems() {
  try {
    const result = eval(display);
    display = String(result);
    document.querySelector('.js-values').innerHTML = display;
  } catch (error) {
    display = '';
    document.querySelector('.js-values').innerHTML = 'Invalid expression!';
  }
}

// Event handler for the plus (+) button
function handlePlus() {
  appendToDisplay('+');
}

// Event handler for the minus (-) button
function handleMinus() {
  appendToDisplay('-');
}

// Add event listener for keydown event
document.addEventListener('keydown', function(event) {
  // Get the pressed key
  var key = event.key;

  // Check if the key corresponds to a number or operator
  if (/[0-9]|\/|\*|\+|\-/.test(key)) {
    event.preventDefault(); // Prevent the default behavior

    if (key === '+') {
      handlePlus();
    } else if (key === '-') {
      handleMinus();
    } else {
      var buttonContent = key;

      // Adjust the button content for multiplication and division
      if (key === '*') {
        buttonContent = '\u00D7'; // Unicode character for multiplication
      } else if (key === '/') {
        buttonContent = '\u00F7'; // Unicode character for division
      }

      // Find the corresponding button
      var buttons = document.querySelectorAll('.button');
      for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].textContent === buttonContent) {
          // Trigger a click event on the button
          buttons[i].click();
          break;
        }
      }
    }
  } else if (key === 'Enter') {
    event.preventDefault(); // Prevent the default behavior
    calculateItems();
    
  } else if (key === 'Backspace') {
			event.preventDefault(); // Prevent the default behavior
			removeLastItem();
	}
});