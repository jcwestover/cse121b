/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Jackson Westover";
let currentYear = 2024;
let profilePicture = 'images/myimg.png';




/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');





/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);







/* Step 5 - Array */
const favFood = ['pasta', 'steak', 'pizza'];
foodElement.textContent = favFood.join(', ');
let newFood = 'eggs';
favFood.push(newFood);
foodElement.innerHTML += `<br>${favFood.join(', ')}`;
favFood.shift();
foodElement.innerHTML += `<br>${favFood.join(', ')}`;
favFood.pop();
foodElement.innerHTML += `<br>${favFood.join(', ')}`;

