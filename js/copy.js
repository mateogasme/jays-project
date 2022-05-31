const btnCopy = document.querySelector('#copy-cmd');

function copyToClipBoard() {
	var content = document.querySelector('.cl');

	content.select();
	document.execCommand('copy');
    
	alert('Copied!');
}