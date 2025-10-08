const form = document.getElementById('form')



const handleFormSubmit = function (e) {
    e.preventDefault();

    const todoInput = document.getElementById('thingToDo');
    let newValue = todoInput.value;

    const listArea = document.getElementById('listArea');
    const listElement = document.createElement('li');
    listElement.innerHTML = `${newValue}`;

    listArea.appendChild(listElement);
    listElement.style.cursor = "pointer";

    const strikeElement = function () {
        
    listElement.style.textDecoration = 'line-through'
    }

    // eventlistener x text strike
    listElement.addEventListener('click', strikeElement)

    const deleteButton = document.createElement('button')
    
    deleteButton.setAttribute('type', 'button')

    deleteButton.innerText = "delete this"

    listElement.append(deleteButton)
    
    const deleteElement = function (e) {
         e.target.parentElement.remove()
    }
    // event listener x click on delete button
    deleteButton.addEventListener('click', deleteElement)

}

form.addEventListener('submit', handleFormSubmit)


