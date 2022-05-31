const inputs = document.querySelectorAll('input');

/* A for loop that is looping through the inputs and adding an event listener to each one. */
for (var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('keyup', function() {
		if (this.value.length >= 1) {
			this.nextElementSibling.classList.add('focus');
		} else {
			this.nextElementSibling.classList.remove('focus');
		}
	});
}