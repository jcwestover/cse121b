/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Jackson Westover",
    photo: 'images/myimg.png',
    favoriteFoods: [
        'rice',
        'chicken',
        'beef',
        'oatmeal'
    ],
    hobbies: [
        'gym',
        'tan',
        'laundry'
    ],
    placesLived: [],

};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Kansas City, MO',
        length: '2 years'
    }
);

myProfile.placesLived.push(
    {
        place: 'Pittsburgh, PA',
        length: '7 years'
    }
);

myProfile.placesLived.push(
    {
        place: 'Las Vegas, NV',
        length: '14 years'
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#name').alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement('ul');
    ul.textContent = hobby;
    document.querySelector('#hobbies').appendChild(ul);
});

/* Places Lived DataList */
let placesLivedList = document.querySelector('#places-lived');
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;

    let dd = document.createElement('dd');
    dd.textContent = place.length;

    placesLivedList.appendChild(dt);
    placesLivedList.appendChild(dd);
});




