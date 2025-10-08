const form = document.getElementById('form')



const handleFormSubmit = function (e) {
    e.preventDefault();

    const todoInput = document.getElementById('thingToDo');
    let newValue = todoInput.value;
    console.log(newValue);

    const listArea = document.getElementById('listArea');
    const listElement = document.createElement('li');
    listElement.innerHTML = `<li>${newValue}</li>`;

    listArea.appendChild(listElement);

}

form.addEventListener('submit', handleFormSubmit)
