// Select input element
const inputE = document.getElementById('title');

// select list element
const listEl = document.getElementById('list');

// select button element
const addButtonEl = document.getElementById('add-button');

// adding "click" event listener on button element
addButtonEl.addEventListener('click', function() {

    // getting the value of the input field
    const titleText = inputE.value;

    // creating and 'li' element and adding inner text
    const li = document.createElement('li');
    li.innerText = titleText;

    // add the newly created li element to the list
    listEl.appendChild(li);

    // clear the input field after adding li to the list
    inputE.value = '';

    // remove li when it is clicked
    li.addEventListener('click', function() {
        li.remove();
    })

})