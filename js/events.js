// Function to modify the text content of the paragraph
const changeText = () => {
	p.textContent = "I changed because of an inline event handler.";
}

const alertText = () => {
	alert('Will I alert?');
}

// Add event handler as a property of the button element
// const button = document.querySelector('button');
// button.onclick = changeText;

// Listen for click event
const button = document.querySelector('button');
const p = document.querySelector('p');
button.addEventListener('click', changeText);
button.addEventListener('click', alertText);